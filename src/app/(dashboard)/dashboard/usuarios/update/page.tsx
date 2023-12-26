import { PageParams } from "@types";
import { UpdateUserScreen } from "../components/Screens/UpdateUserScreen";

export default function UpdateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  return <UpdateUserScreen userId={id} />;
}
