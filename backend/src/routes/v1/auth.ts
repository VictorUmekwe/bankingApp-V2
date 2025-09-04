import { Router } from "express";
import { body } from "express-validator";
import User from '../../models/user'


// controllers
import register from "../../controllers/v1/auth/register";
import login from '../../controllers/v1/auth/login'
// Middlewares
import validationError from "../../middlewares/validationError";
//  Models

const router = Router();

router.post(
  "/register",
  body('name')
    .notEmpty()
    .withMessage("Please enter your fullname")
    .isLength({ max: 60 })
    .withMessage("Name must not be more than 60 characters")
    .isString()
    .withMessage('Invalid Name')
    ,

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isLength({ max: 50 })
    .withMessage("Email must not be more than 50 characters")
    .isEmail()
    .withMessage("Invalid email address")
    .custom(async (value) => {
      const userExists = await User.exists ({email: value})

      if(userExists){
        throw new Error('User email or password is invalid')
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body('role')
  .optional()
  .isString()
  .withMessage('Role must be a string')
  .isIn(['admin', 'user'])
  .withMessage('Role must be either admin or user'),
  validationError,
  register
);

router.post("/login", login)

export default router;
