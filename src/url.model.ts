import mongoose, { Document, Schema } from "mongoose";

// used to create an instance of nanoid
import { customAlphabet } from "nanoid";

// we want to createthe id from the alphabets and also 6 characters long
const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0987654321", 5);

export interface UrlInterface extends Document {
	urlId: string;
	destination: string;
}

const urlSchema = new mongoose.Schema({
	urlId: {
		type: String,
		unique: true,
		default: () => nanoid(),
		required: true,
	},
	destination: {
		type: String,
		required: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});

export const Url = mongoose.model<UrlInterface>("Url", urlSchema);
