import mongoose, { Document } from "mongoose";
import { UrlInterface } from "./url.model";

export interface AnalyticsInterface extends Document {
	url: UrlInterface;
}

const AnalyticsSchema = new mongoose.Schema(
	{
		urlId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Url",
			required: true,
		},
	},
	{ timestamps: true }
);

export const Analytics = mongoose.model<AnalyticsInterface>(
	"Analytics",
	AnalyticsSchema
);
