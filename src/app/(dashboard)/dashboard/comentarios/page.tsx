import { Metadata } from "next";
import { CommentReportsTable } from "./components/Table/CommentReportsTable";

export const metadata: Metadata = {
  title: "Comentários",
  robots: {
    index: false,
  },
};

export default function CommentDashboardScreen() {
  return (
    <>
      <h1 className="text-center">Reports dos comentários</h1>

      <div className="mt-3">
        <CommentReportsTable />
      </div>
    </>
  );
}
