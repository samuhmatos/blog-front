import { PageParams } from "@types";
import { UpdateUserScreen } from "../../components/Screens/UpdateUserScreen";

export default function CreateUserPage({
  searchParams: { id },
}: PageParams<{ id: number }>) {
  return <UpdateUserScreen userId={id} modal />;
}
