import { toast } from "react-toastify";
interface Props {
  message: string;
  type: "success" | "error" | "warning" | "default" | "info";
  theme?: "light" | "dark" | "colored";
  position?: "top-center" | "top-right" | "top-left";
}
function show({
  message,
  type,
  theme = "light",
  position = "top-right",
}: Props) {
  toast(message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
    type,
  });
}

export const toastUtils = {
  show,
};
