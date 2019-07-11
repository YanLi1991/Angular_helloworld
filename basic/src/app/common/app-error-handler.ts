import { ErrorHandler } from "@angular/core";

// global error handler
export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert("An unexpected error occurred.");
    console.log(error);
  }
}
