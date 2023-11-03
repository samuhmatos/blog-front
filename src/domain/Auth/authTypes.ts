import { User, UserAuthParams } from "../User";
export interface ForgotPasswordParamApi extends Omit<UserAuthParams, "name"> {
  token: string;
}

export type SignInParams = {
  email: string;
  password: string;
};

export type SignUpParams = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
