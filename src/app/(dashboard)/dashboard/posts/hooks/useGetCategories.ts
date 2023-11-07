"use client";

import { usePostCategoryGet } from "@domain";
import { useEffect } from "react";

export function useGetCategories() {
  const { categories: categoryData, getAll } = usePostCategoryGet();

  useEffect(() => {
    getAll();
  }, []);

  const categories = categoryData?.map((value) => value.id.toString()) || [];

  return {
    categories,
    categoryData,
  };
}
