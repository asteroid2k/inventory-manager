import ModuleError from "./module.error";
import { ApiErrorOptions } from "./types";

class ApiError extends ModuleError {
  constructor(options: ApiErrorOptions) {
    super(options);
  }
  static badRequest(message: string) {
    return new ApiError({ status: 400, message });
  }
  static internalError(message: string) {
    return new ApiError({ status: 500, message });
  }
}

export default ApiError;
