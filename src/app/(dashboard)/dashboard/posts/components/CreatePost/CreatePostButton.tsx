"use client";
import { Button } from "@components";
import { useRouter } from "next/navigation";
import { linkUtils } from "@utils";

export function CreatePostButton() {
  const router = useRouter();

  const handleOpen = () => {
    router.push(linkUtils.linkDashboard("posts/create"));
  };

  return (
    <div className="flex justify-end">
      <Button placeholder="Criar Postagem" onClick={handleOpen} />
    </div>
  );
}
