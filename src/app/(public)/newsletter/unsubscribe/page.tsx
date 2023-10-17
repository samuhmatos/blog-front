"use client";
import { Button } from "@components";
import { PageParams } from "@types";
import { Newsletter, useAuth, useRemoveNewsletter } from "@domain";
import { toastUtils } from "@utils";

export default function UnsubscribeNewsletter({
  searchParams,
}: PageParams<Pick<Newsletter, "email" | "token">>) {
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
    <div className="h-[470px] flex items-center justify-center">
      <div className="p-4 w-3/4 max-w-4xl text-primary-800">
        <div className="text-center text-3xl font-semibold mb-4">
          <h2>Essa não! 🥺</h2>
        </div>
        <div className="p-4 border-t border-t-primary-800">
          <h3 className="text-xl font-semibold">
            Você tem certeza que quer dizer adeus?
          </h3>
          <h5 className="mt-2 text-gray-500">
            Estamos tristes em ver você indo, mas se realmente deseja
            desinscrever de nossa newsletter, por favor, clique no botão a baixo
          </h5>
          <Button
            placeholder="Desinscrever"
            className="mt-3"
            onClick={handleUsubscribe}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
