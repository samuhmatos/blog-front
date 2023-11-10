"use client";

import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Page } from "@api";

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalMeta: number;
  totalPage: number;
  error: unknown;
}
export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: () => Promise<Page<Data>>
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);
  const [totalMeta, setTotalMeta] = useState<number>(0);

  const query = useQuery({
    queryKey,
    queryFn: () => getList(),
    keepPreviousData: true,
    staleTime: 300000, // 5 minutes
  });

  useEffect(() => {
    if (query.data) {
      setList(query.data.data);
      setTotalMeta(query.data.meta.total);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    hasNextPage: !!query.data?.meta.hasNextPage,
    hasPreviousPage: !!query.data?.meta.hasPreviousPage,
    totalPage: list.length,
    totalMeta,
    error: query.error,
  };
}
