import { Button } from "@components";
import { Table } from "./components";

export default function DashPostScreen() {
  return (
    <>
      <div className="flex justify-end">
        <Button placeholder="Criar Postagem" />
      </div>

      <Table />
    </>
  );
}
