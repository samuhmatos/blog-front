import { UserAuthParams } from "../User";
export interface ForgotPasswordParamApi extends Omit<UserAuthParams, "name"> {
  token: string;
}
