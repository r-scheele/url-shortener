import { AnyObjectSchema } from "yup";
import { Request, Response, NextFunction } from "express";

const validateBody =
	(schema: AnyObjectSchema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validate({
				body: req.body,
				query: req.query,
				params: req.params,
			});
			next();
		} catch (err) {
			return res.sendStatus(400);
		}
	};

export default validateBody;
