"use client";
import { AxiosError } from "axios";
import { useState } from "react";
import { ErrorApi } from "@api";

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: AxiosError<ErrorApi>) => void;
  // errorMessage?: string;
}

export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [data, setData] = useState<TData | null>(null);

  async function mutate(variables: TVariables, callbackFn?: () => void) {
    setLoading(true);
    mutationFn(variables)
      .then((response) => {
        setData(response);

        if (options?.onSuccess) {
          options.onSuccess(response);
        }

        callbackFn && callbackFn();
      })
      .catch((error: AxiosError<ErrorApi>) => {
        if (options?.onError) {
          options.onError(error);
        }
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    mutate,
    loading,
    error,
    data,
  };
}
