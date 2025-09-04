import { generateAccessToken, generateRefreshToken } from "../../../lib/jwt";
import { logger } from "../../../lib/winston";
import User from "../../../models/user";
import Token from "../../../models/token";
import config from "../../../config/index";
import bcrypt from 'bcryptjs'

//Types
import { IUser } from "../../../models/user";
import { Request, Response, NextFunction } from "express";

type UserData = Pick<IUser, "email" | "password">;

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body as UserData;

    const user = await User.findOne({ email })
      .select("name email password role")
      .lean()
      .exec();

      if(!user){
        res.status(404).json({
           code:'NotFound',
           message:'User not found'
        })
        return;
      }


      // compare password
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch){
        res.status(401).json({
            code:'Unathorized',
            message:'Invalid credentials'
        })

        return;
      }
    // Generate access token and refresh token for registered users
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Store refresh token in database
    await Token.create({ token: refreshToken, userId: user._id });
    logger.info("Refresh token created for user", {
      userId: user._id,
      token: refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      user: {
        accountNumber: user.accountNumber,
        name: user.name,
        email: user.email,
        role: user.role,
        balance: user.balance,
        isSuspended: user.isSuspended,
      },
      accessToken,
    });

    logger.info("User logged in successfully", user)
  } catch (err) {
    res.status(500).json({
        code:'ServerError',
        message: 'Internal server error',
        error: err,
    })

    logger.error('Error during user login', err)
  }
};

export default login;
