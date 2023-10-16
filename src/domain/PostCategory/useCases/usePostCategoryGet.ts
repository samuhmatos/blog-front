"use client";import { useState } from "react";
import { Category, postCategoryService } from "..";
import { errorUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function usePostCategoryGet() {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [category, setCategory] = useState<Category | undefined>(undefined);

  function getOne(categoryId: number) {
    setLoading(true);

    postCategoryService
      .show(categoryId)
      .then((res) => {
        setCategory(res);
      })
      .catch((res: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(res);
      })
      .then(() => {
        setLoading(false);
      });
  }

  function getAll() {
    setLoading(true);

    postCategoryService
      .getAll()
      .then((res) => {
        setCategories(res);
      })
      .catch((res: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(res);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return {
    loading,
    categories,
    category,
    getOne,
    getAll,
  };
}
