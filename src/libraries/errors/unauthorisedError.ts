import { ApplicationError } from "./applicationError";
/**
 * This class detects unauthorized errors and sends those errors to the superclass ApplicationError.
 */
export class UnauthorizedError extends ApplicationError {
  constructor(
    message = "UnauthorizedError",
    code: string | null = null,
    param: string | null = null,
    metaData: Record<any, any> = {},
  ) {
    const errorJson = [
      {
        message,
        code,
        param,
        metaData,
      },
    ];
    super(errorJson, 403, message);
  }
}
