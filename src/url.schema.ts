import { object, string } from "yup";

const urlSchema = object({
	destination: string().required("Destination is required"),
});
export default urlSchema;
