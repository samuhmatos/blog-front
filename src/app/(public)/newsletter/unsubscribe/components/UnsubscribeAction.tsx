"use client";
import { useRemoveNewsletter } from "@domain";
import { toastUtils } from "@utils";
import { Button } from "@components";
import { useAuth } from "@auth";

import { UnsubscribePageParams } from "../page";

export function UnsubscribeAction({
  searchParams,
}: Pick<UnsubscribePageParams, "searchParams">) {
  const { loading, mutate: remove } = useRemoveNewsletter();
  const { session } = useAuth();

  function handleUsubscribe() {
    if (!searchParams.email || !searchParams.token) {
      return toastUtils.show({
        message: "Existem algumas credenciais faltando!",
        type: "error",
      });
    }

    if (session?.user && session.user.email !== searchParams.email) {
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
