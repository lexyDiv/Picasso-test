import { MutableRefObject } from "react";
import { getPostsThunk, updatePageNumber } from "../../slices/postsSlice";
import { AppDispatch } from "../../store/store";
import { scrollHandler } from "../helpers/scrollHendler";

export function updatePostList({
  dispatch,
  limit,
  page,
  e,
  loadingPosts,
}: {
  dispatch: AppDispatch;
  limit: number;
  page: number;
  e: React.UIEvent<HTMLDivElement>;
  loadingPosts: MutableRefObject<boolean>;
}): void {
  if (!loadingPosts.current && scrollHandler(e)) {
    loadingPosts.current = true;
    dispatch(updatePageNumber());
    page += 1;
    dispatch(getPostsThunk({ limit, page, loadingPosts }));
  }
}
