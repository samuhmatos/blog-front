"use client";
import { Page, PagePaginationParams } from "@api";
import { useEffect, useState } from "react";

export function usePaginatedList<Data>(
  getList: (params: PagePaginationParams) => Promise<Page<Data>>,
  params: PagePaginationParams
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<Data[]>([]);

  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(true);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(params.page || 1);
  const [total, setTotal] = useState<number>(0);

  async function fetchData() {
    try {
      setLoading(true);

      const { data, meta } = await getList(params);

      setList(data);
      setTotalPage(meta.totalPage);
      setCurrentPage(meta.currentPage);
      setTotal(meta.total);

      if (!meta.hasNextPage) {
        setHasNextPage(false);
      }
      if (!meta.hasPreviousPage) {
        setHasPreviousPage(false);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    list,
    hasNextPage,
    hasPreviousPage,
    totalPage,
    currentPage,
    total,
    refetch: fetchData,
  };
}
