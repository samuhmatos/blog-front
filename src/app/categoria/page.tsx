"use client";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { api } from "@api";

export default function CategoryScreen() {
  async function test() {
    const res = await api.get(`category/filter/popular`);
    console.log({ res });
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

  return (
    <div className="my-20">
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}
