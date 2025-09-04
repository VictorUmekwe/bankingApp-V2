import { logger } from "../../../lib/winston";
import config from "../../../config";

// Models
import User from "../../../models/user";
// Types
import { Request, Response } from "express";
import { IUser } from "../../../models/user";
import { generateAccountNum } from "../../../utils";
import { generateAccessToken, generateRefreshToken } from "../../../lib/jwt";
import Token from "../../../models/token";

type UserData = Pick<IUser, "name" | "email" | "password" | 'role'>;

const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, role } = req.body as UserData;
  
  if(role === 'admin' && !config.WHITELIST_ADMINS_EMAIL.includes(email)){
    res.status(403).json({
      code: 'AuthorizationError',
      message: 'You cannot register as an admin'
    })

    logger.warn(`User with email ${email} tried to register as an admin but is not in the whitelist`);
    return;
  }

 

  try {
    const accountNumber: string = generateAccountNum();

    const newUser = await User.create({
      accountNumber,
      name,
      email,
      password,
    });

    // Generate access token and refresh token for new user
    const accessToken = generateAccessToken(newUser._id);
    const refreshToken = generateRefreshToken(newUser._id);

    // store refreshToken in database
    await Token.create({ token: refreshToken, userId: newUser._id });
    logger.info("Refresh token created", {
      userId: newUser._id,
      token: refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(201).json({
      user: {
        accountNumber: newUser.accountNumber,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        balance: newUser.balance,
        isSuspended: newUser.isSuspended,
      },
      accessToken,
    });
    logger.info("User registered successfully", {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    });
  } catch (err) {
    res.status(500).json({
      code: "ServerError",
      message: "Internal server error",
      error: err,
    });
    logger.error("Error during user registration", err);
  }
};
export default register;
