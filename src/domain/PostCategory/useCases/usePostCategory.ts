"use client";
import { useEffect, useState } from "react";
import { Category, postCategoryService } from "..";
import { errorUtils } from "@utils";
import { AxiosError } from "axios";
import { ErrorApi } from "@api";

export function usePostCategory() {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [error, setError] = useState<string[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getAll() {
    setLoading(true);
    postCategoryService
      .getAll()
      .then((res) => {
        setCategories(res);
      })
      .catch((err: AxiosError<ErrorApi>) => {
        errorUtils.setGlobalErrorMessage(err);
      })
      .then(() => {
        setLoading(true);
      });
  }

  useEffect(() => {
    getAll();
  }, []);

  return {
    categories,
    loading,
    error,
    getAll,
  };
}
