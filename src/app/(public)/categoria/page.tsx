"use client";
import { api } from "@api";
import { userService } from "@domain";
import { BASE_URL } from "@config";
import { getCookie, getCookies } from "cookies-next";

async function test() {
  try {
    console.log(process.env.BASE_URL);
    const response = await userService.CSRF_token();
  } catch (error) {
    console.log(error);
  }
}
export default function CategoryScreen() {
  function handle() {
    test();
  }

  function storage() {
    const teste = getCookies();
    console.log(teste);
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     test();
  //   }, 5000);
  // }, []);

  return (
    <div className="my-20">
      <button type="button" className="bg-red-500 p-5" onClick={handle}>
        Teste
      </button>

      <button type="button" className="bg-red-500 p-5" onClick={storage}>
        Storage
      </button>
    </div>
  );
}
