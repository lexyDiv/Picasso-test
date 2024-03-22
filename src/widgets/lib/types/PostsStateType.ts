import { PostType } from "./PostType";

export type PostsStateType = {
  posts: PostType[];
  scrollLevel: number;
  page: number;
  max: number;
  err: string | undefined;
  maxCount: number;
};
