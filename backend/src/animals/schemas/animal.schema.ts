import * as mongoose from "mongoose";
const { Schema } = mongoose;

export const AnimalSchema = new Schema({
    name: String,
    age: Number
}, { timestamps: true });