"use client";
import { Page, api } from "@api";
import { PostWithDetails, postService, userService } from "@domain";
import { BASE_URL } from "@config";
import { getCookie, getCookies } from "cookies-next";
import { Button } from "@components";

async function fetchData(
  page: number,
  search: string | undefined
): Promise<Page<PostWithDetails>> {
  const response = await postService.getFeed({ page, search });
  console.log(response);
  return response;
}

export default function CategoryScreen() {
  function handle() {
    fetchData(1, "provident");
  }

  return (
    <div className="my-20">
      <button type="button" className="bg-red-500 p-5" onClick={handle}>
        Teste
      </button>

      <Button placeholder="Outline" outline paleteColor="danger" />
      <Button placeholder="Normal" paleteColor="danger" />

      <Button placeholder="Outline" outline paleteColor="warning" />
      <Button placeholder="Normal" paleteColor="warning" />

      <Button placeholder="Outline" outline />
      <Button placeholder="Normal" />
    </div>
  );
}
