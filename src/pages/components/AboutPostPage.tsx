import React, { useEffect } from "react";
import { Header } from "../../widgets";
import { useNavigate } from "react-router-dom";
import { AboutPostItem } from "../../widgets/components/aboutPostItem/AboutPostItem";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export function AboutPostPage(): JSX.Element {
  const navigete = useNavigate();
  const { posts } = useSelector((state: RootState) => state.postsSlice);

  useEffect(() => {
    !posts.length && navigete("/");
  }, []);

  return (
    <>
      <Header />
      <AboutPostItem posts={posts} />
    </>
  );
}
