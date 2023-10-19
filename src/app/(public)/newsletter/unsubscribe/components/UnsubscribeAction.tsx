"use client";
import { useAuth, useRemoveNewsletter } from "@domain";
import { toastUtils } from "@utils";
import { UnsubscribePageParams } from "../page";
import { Button } from "@components";

export function UnsubscribeAction({
  searchParams,
}: Pick<UnsubscribePageParams, "searchParams">) {
  const { loading, remove } = useRemoveNewsletter();
  const { user } = useAuth();

  function handleUsubscribe() {
    if (!searchParams.email || !searchParams.token) {
      return toastUtils.show({
        message: "Existem algumas credenciais faltando!",
        type: "error",
      });
    }

    if (user && user.email !== searchParams.email) {
      return toastUtils.show({
        message:
          "Você não tem autorização para desinscrever um email que não é seu!",
        type: "error",
      });
    }

    remove({
      email: searchParams.email,
      token: searchParams.token,
    });
  }
  return (
    <Button
      placeholder="Desinscrever"
      className="mt-3"
      onClick={handleUsubscribe}
      loading={loading}
    />
  );
}
