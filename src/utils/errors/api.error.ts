import ModuleError from "./module.error";
import { ApiErrorOptions } from "src/types";

class ApiError extends ModuleError {
  constructor(options: ApiErrorOptions) {
    super(options);
    this.status = options.status || 400;
  }
  static badRequest(message: string) {
    return new ApiError({ status: 400, message });
  }
  static internalError(message: string) {
    return new ApiError({ status: 500, message });
  }
}

export default ApiError;
