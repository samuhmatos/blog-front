import { Metadata } from "next";
import { redirect } from "next/navigation";

import { PageParams } from "@types";
import { Newsletter } from "@domain";
import { UnsubscribeAction } from "./components/UnsubscribeAction";
import { RedirectType } from "next/dist/client/components/redirect";

export const metadata: Metadata = {
  title: "Desisncrever da Newsletter",
  robots: {
    index: false,
  },
};

export type UnsubscribePageParams = PageParams<
  Pick<Newsletter, "email" | "token">
>;

export default function UnsubscribeNewsletterPage({
  searchParams,
}: UnsubscribePageParams) {
  if (!searchParams.email || !searchParams.token) {
    redirect("/", RedirectType.replace);
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
            Estamos tristes em ver você indo, mas se realmente deseja não fazer
            mais parte de nossa newsletter, por favor, clique no botão a baixo
          </h5>

          <UnsubscribeAction searchParams={searchParams} />
        </div>
      </div>
    </div>
  );
}
