"use client";
import { useEffect, useState } from "react";
import { postReactionService } from "..";
import { ReactionType } from "@types";
import { AxiosError } from "axios";
import { toastUtils } from "@utils";

export function useReaction(postId: number) {
  const [reaction, setReaction] = useState<ReactionType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getReaction() {
    postReactionService
      .getReaction(postId)
      .then((response) => {
        setReaction(response.type);
      })
      .catch((error) => {
        setReaction(null);
      });
  }

  async function addReaction(e: ReactionType) {
    postReactionService
      .addReaction({ postId, type: e })
      .then((res) => {
        setReaction(res.type);
      })
      .catch((err: AxiosError) => {
        setReaction(null);

        if (err.response!.status === 401) {
          toastUtils.show({
            message: "Para poder reagir, é necessário estar logado!",
            type: "error",
          });
        }
      });
  }

  async function deleteReaction(postId: number) {
    setLoading(true);

    postReactionService
      .deleteReaction(postId)
      .then(() => {
        setReaction(null);
      })
      .catch((err: AxiosError) => {
        if (err.response!.status === 401) {
          toastUtils.show({
            message: "Para retirar a reação, é necessário estar logado!",
            type: "error",
          });
        }
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getReaction();
  }, [postId]);

  return {
    reaction,
    loading,
    addReaction,
    setReaction,
    deleteReaction,
  };
}
