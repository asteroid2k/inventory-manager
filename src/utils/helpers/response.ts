import { Response } from "express";

/**
 * Provides helper methods for sending responses
 */
class ResponseHelper {
  /**
   * Send successful response
   * @param res - response object
   * @param options - extra options for response
   */
  static async sendSuccessResponse(res: Response, options: ResponseOptions) {
    const { message, status = 200, data } = options;
    res.status(status).json({ success: true, message, data });
  }

  /**
   * Send bad response
   * @param res - response object
   * @param options - extra options for response
   */
  static async sendBadResponse(res: Response, options: ResponseOptions) {
    const { message, status = 400 } = options;
    res.status(status).json({ success: false, message });
  }
}

interface ResponseOptions {
  message: string;
  status?: number;
  data?: Record<string, unknown>;
}

export default ResponseHelper;
