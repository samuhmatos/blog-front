import { ErrorApi } from "@api";
function getErrorMessages(apiResponse: ErrorApi): string[] {
  const errorMessages: string[] = [];

  for (const fieldErrors of Object.values(apiResponse.errors)) {
    errorMessages.push(...fieldErrors);
  }

  return errorMessages;
}

export const errorUtils = {
  getErrorMessages,
};
