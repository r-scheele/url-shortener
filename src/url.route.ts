import { Express } from "express";
import { root, handleRedirect, createUrl } from "./url.controller";
import validateBody from "./url.middleware";
import urlSchema from "./url.schema";

const router = (app: Express) => {
	app.get("/", root);
	app.post("/url", validateBody(urlSchema), createUrl);
	app.get("/:id", handleRedirect);
};

export default router;
