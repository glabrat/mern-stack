import { Document } from "mongoose";

export interface Animal extends Document {
    readonly name: string;
    readonly age: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}