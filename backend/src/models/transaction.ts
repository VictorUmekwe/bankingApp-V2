import { Types, Schema, model } from "mongoose";

export type TransactionType = "debit" | "credit" | "transfer";

export interface ITransaction {
  sender?: Types.ObjectId;
  receipient?: Types.ObjectId;
  amount: number;
  type: TransactionType;
  description?: string;
  reference: string;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
  updatedAt: Date;
}


const transactionSchema = new Schema<ITransaction>({
    sender:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },

    receipient: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,

    },

    amount: {
       type: Number,
       required: true,
       min: [0, "Amount must be greater than or equal to 0"],
    },

    type: {
        type:String,
        emum:['debit', 'credit', 'transfer'],
        required: true,
    },

    description:{
        type: String,
        maxLength:[200, "Description must not be more than 200 characters."],
    },

    reference:{
        type: String,
        required: true,
        unique: true,
    },

    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'completed'
    },


}, {timestamps:true})

const User = model<ITransaction>('User', transactionSchema)

export default User;