import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

/**
 * validates request object with given schema
 * @param {AnyZodObject} schema - schema object to validate
 */
const validateResourceSchema =
  (schema: AnyZodObject) =>
  (req: Request, _res: Response, next: NextFunction) => {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    next();
  };

export default { validateResourceSchema };
