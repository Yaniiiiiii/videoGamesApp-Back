import { model, Schema, Types } from 'mongoose';

export type ProtoGame = {
    title: string;
    description: string;
    brand: string;
    price: number;
    isSold: boolean;
    format: string;
    media: string;
};

export type Game = {
    title: string;
    description: string;
    brand: string;
    price: number;
    isSold: boolean;
    format: string;
    media: string;
    id: Types.ObjectId;
};

export const gameSchema = new Schema<Game>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    isSold: {
        type: Boolean,
        required: true,
    },
    format: {
        type: String,
        required: true,
    },
    media: {
        type: String,
        required: true,
    },
});

gameSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject._id;
        delete returnedObject.password;
    },
});

export const GameModel = model<Game>('game', gameSchema, 'games');
