"use client";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { api } from "@api";
import { UserHeader } from "../../components/UserProfile/components/UserHeader";
import { userService } from "../../domain/User/userService";

export default function CategoryScreen() {
  console.log(process.env.BASE_URL);
  async function test() {
    try {
      await userService.CSRF_token();
    } catch (error) {
      console.log(error);
    }
  }

  test();

  const notify = () => {
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return <div className="my-20"></div>;
}
