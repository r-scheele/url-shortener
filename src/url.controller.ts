import { Request, Response } from "express";
import { Url, UrlInterface } from "./url.model";
import { Analytics, AnalyticsInterface } from "./analytics.model";

export const root = (req: Request, res: Response) => {
	res.json({
		message: "Hello world!",
	});
};

export const createUrl = async (req: Request, res: Response) => {
	const { destination } = req.body;
	const newUrl: UrlInterface = await Url.create({ destination });
	return res.json(newUrl);
};

export const handleRedirect = async (req: Request, res: Response) => {
	let urlId = req.params.id;

	const url: UrlInterface = await Url.findOne({ urlId }).lean();
	if (!url) return res.status(404);

	Analytics.create({ urlId: url._id });
	return res.redirect(url.destination);
};
