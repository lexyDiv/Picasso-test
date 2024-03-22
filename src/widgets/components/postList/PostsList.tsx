import React, { useEffect, useRef, useState } from "react";
import { windowResiser } from "../../helpers/windowResiser";
import classes from "./PostList.module.css";
import { RootState, useAppDispatch } from "../../../store/store";
import { getPostsThunk } from "../../../slices/postsSlice";
import { useSelector } from "react-redux";
import { PostItem } from "../../../entities/components/PostItem";
import { updatePostList } from "../../api/updatePostsList";

export function PostsList(): JSX.Element {
  const [windowSize, setWindowSize] = useState<number>(window.innerHeight);
  const [scrollBar, setScrollBar] = useState<boolean>();
  const listBox = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { posts, scrollLevel, page, maxCount } = useSelector(
    (state: RootState) => state.postsSlice
  );
  const loadingPosts = useRef<boolean>(false);

  const resizeCallBack = () => {
    windowResiser({ setWindowSize, setScrollBar, listBox });
  };

  useEffect(() => {
    listBox.current && scrollLevel
      ? (listBox.current.scrollTop = scrollLevel)
      : false;
    !posts.length && dispatch(getPostsThunk({ limit: 10, page, loadingPosts }));
    window.addEventListener("resize", resizeCallBack);
    return () => window.removeEventListener("resize", resizeCallBack);
  }, []);

  useEffect(() => {
    windowResiser({ setWindowSize, setScrollBar, listBox });
  }, [posts]);

  const leftPosts: boolean = maxCount - posts.length > 0;

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        height: `${windowSize - 70}px`,
        width: "100%",
        position: "absolute",
      }}
    >
      <div
        onScroll={(e) => {
          leftPosts &&
            updatePostList({
              e,
              dispatch,
              limit: 10,
              page,
              loadingPosts,
            });
        }}
        ref={listBox}
        className={classes.postsList}
        style={{
          overflowY: `${scrollBar ? "scroll" : "hidden"}`,
        }}
      >
        {posts.map((post) => (
          <PostItem key={post.id} post={post} listBox={listBox} />
        ))}
      </div>
    </div>
  );
}
