import { api } from "@api";import { ForgotPasswordParamApi } from "./authTypes";

async function forgotPassword(email: string): Promise<{ status: string }> {
  const response = await api.post("forgot-password", {
    email,
  });

  return response.data;
}

async function passwordReset(
  params: ForgotPasswordParamApi
): Promise<{ status: string }> {
  const response = await api.post<{ status: string }>("reset-password", {
    ...params,
  });

  return response.data;
}

// TODO: VALIDAR SE EMAIL ESTA VERIFICADO PARA TER ACESSO A ALGUMAS FUNÇÕES

export const authApi = {
  forgotPassword,
  passwordReset,
};
