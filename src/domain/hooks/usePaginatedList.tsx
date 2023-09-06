import { Page, PageParams } from "@api";import { useEffect, useState } from "react";

interface Params {
  page: number;
  search?: string;
}
export async function usePaginatedList<Data>(
  getList: (page: number, search?: string) => Promise<Page<Data>>,
  params: Params
) {
  try {
    return await getList(params.page, params.search);
  } catch (error) {
    console.log(error);
  }

  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<boolean | null>(null);

  // const [list, setList] = useState<Data[]>([]);

  // const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  // const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(true);
  // const [totalPage, setTotalPage] = useState<number>(1);

  // async function fetchData() {
  //   try {
  //     setError(false);
  //     set(true);
  //     const { data, meta } = await getList(params.page, params.search);
  //     setList(data);
  //     setTotalPage(meta.totalPage);

  //     if (!meta.hasNextPage) {
  //       setHasNextPage(false);
  //     }
  //     if (!meta.hasPreviousPage) {
  //       setHasPreviousPage(false);
  //     }
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // return {
  //   loading,
  //   error,
  //   list,
  //   hasNextPage,
  //   hasPreviousPage,
  //   totalPage,
  //   currentPage: params.page,
  // };
}
