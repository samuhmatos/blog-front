"use client";import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function CategoryScreen() {
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
