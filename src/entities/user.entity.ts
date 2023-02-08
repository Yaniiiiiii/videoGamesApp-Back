import { model, Schema, Types } from 'mongoose';

export type ProtoUser = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    carts: Array<Types.ObjectId>;
};

export type User = {
    name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    carts: Array<Types.ObjectId>;
    id: Types.ObjectId;
};

export const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    carts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Game',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject._id;
        delete returnedObject.password;
    },
});

export const UserModel = model<User>('User', userSchema, 'users');
