import {Schema, model} from 'mongoose';
import bcrypt from 'bcryptjs'


export interface IUser{
    name: string;
    accountNumber: number;
    email: string;
    password: string;
    role: 'admin' | 'user';
    currency: string;
    balance: number;
    isSuspended: boolean;

}

const userSchema = new Schema<IUser> ({

    name: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: Number,
        required: [true, 'Account number is required'],
        unique: [true, 'Account number must be unique']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        maxLength:[50, 'Email cannot be more than 50 characters'],
        unique: [true, 'Email must be unique']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        select: false, // do not return password field by default
        minLength: [6, 'Password must be at least 6 characters'],
        maxLength: [30, 'Password cannot be more than 30 characters']
    }, 
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }, 
    currency:{
        type: String,
        default: 'EUR'

    },
    balance: {
        type: Number,
        default: 0
    },

    isSuspended: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


userSchema.pre('save', async function(next){
    if(!this.isModified('password'))return next()

        const salt = await bcrypt.genSalt(10)

        this.password = await bcrypt.hash(this.password, salt)
        next()
})

const User = model<IUser>('User', userSchema);
export default User;