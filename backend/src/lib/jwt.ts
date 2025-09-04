import jwt from 'jsonwebtoken'
import config from '../config/index'


// Types 
import {Types} from 'mongoose'




export const generateAccessToken = (userId: Types.ObjectId):string => {
    return jwt.sign({userId}, config.JWT_SECRET, {
        expiresIn: config.ACCESS_TOKEN_EXPIRY,
        subject: 'accessApi',
    })
}

export const generateRefreshToken = (userId: Types.ObjectId):string => {
    return jwt.sign({userId}, config.JWT_REFRESH_SECRET, {
        expiresIn: config.REFRESH_TOKEN_EXPIRY,
        subject: 'refreshToken',
    })
}
