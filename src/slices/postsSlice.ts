import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostsStateType } from "../widgets/lib/types/PostsStateType";
import { getPosts } from "../widgets/api/getPosts";
import { MutableRefObject } from "react";

const initialState: PostsStateType = {
  posts: [],
  err: undefined,
  scrollLevel: 0,
  page: 1,
  max: 0,
  maxCount: 0,
};

export const getPostsThunk = createAsyncThunk(
  "get_posts",
  (prop: {
    limit: number;
    page: number;
    loadingPosts: MutableRefObject<boolean>;
  }) => getPosts(prop)
);

const postsSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    updateScrollLevel: (state, action) => {
      state.scrollLevel = action.payload;
    },
    updatePageNumber: (state) => {
      state.page = state.page + 1;
    },
    setMaxCount: (state, action) => {
      state.maxCount = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      state.posts = [...state.posts, ...action.payload.data];
      state.maxCount = action.payload.maxCount;
    });
    builder.addCase(getPostsThunk.rejected, (state, action) => {
      state.err = action.error.message;
    });
  },
});

export const { updateScrollLevel, updatePageNumber, setMaxCount } =
  postsSlice.actions;

export default postsSlice.reducer;
