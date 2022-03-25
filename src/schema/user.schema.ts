import { object, TypeOf } from "zod";
import validators from "@utils/helpers/validators";
const { requiredString, email, phoneNumber } = validators;

export const createUserSchema = object({
  body: object(
    {
      firstName: requiredString("First Name"),
      lastName: requiredString("Last Name"),
      email,
      phoneNumber,
      password: requiredString("Password", 8),
    },
    { required_error: "Body is required" }
  ),
});

export type createUserInput = TypeOf<typeof createUserSchema>["body"];
