"use client";
import { Button } from "@components";
import { changeRoute } from "nextjs-progressloader";

export function PostNavigateButton() {
  const handleOpen = () => {
    changeRoute("post.create");
  };

  return (
    <div className="flex justify-end">
      <Button placeholder="Criar Postagem" onClick={handleOpen} />
    </div>
  );
}
