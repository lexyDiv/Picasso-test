import axios from "axios";
import { PostType } from "../lib/types/PostType";
import { MutableRefObject } from "react";

export async function getPosts({
  page,
  limit,
  loadingPosts,
}: {
  page: number;
  limit: number;
  loadingPosts: MutableRefObject<boolean>;
}): Promise<{ data: PostType[]; maxCount: number }> {
  return axios
    .get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
    .then((res) => {
      return {
        data: res.data,
        maxCount: Number(res.headers["x-total-count"]),
      };
    })
    .catch((err) => err)
    .finally(() => {
      loadingPosts.current = false;
    });
}
