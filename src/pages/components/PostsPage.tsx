import React from "react";
import { Header, PostsList } from "../../widgets";

export function PostsPage(): JSX.Element {
  return (
    <div>
      <Header />
      <PostsList />
    </div>
  );
}
