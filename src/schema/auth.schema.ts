import { object } from "zod";
import validators from "@utils/helpers/validators";
const { requiredString, email } = validators;

export const loginSchema = object({
  body: object(
    {
      email,
      password: requiredString("Password", 8),
    },
    { required_error: "Body is required" }
  ),
});
