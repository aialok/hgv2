import { ApplicationError } from "./applicationError";
/*
 * This class detects internal server errors and sends those errors to the superclass ApplicationError.
 */

export class InternalServerError extends ApplicationError {
  constructor(
    message = "Internal Server Error!",
    code: string | null = null,
    param: string | null = null,
    metaData: Record<any, any> = {},
  ) {
    const errorJson = [{ message, code, param, metaData }];
    super(errorJson, 500, message);
  }
}
