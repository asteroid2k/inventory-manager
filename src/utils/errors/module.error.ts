import { ModuleErrorOptions } from "src/types";

class ModuleError extends Error {
  name: string;
  message: string;
  status: number;
  errors: string[];
  constructor(options: ModuleErrorOptions) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.message = options.message || "MODULE_ERROR";
    this.status = options.status || 500;
    this.errors = options.errors || [];
  }
}

export default ModuleError;
