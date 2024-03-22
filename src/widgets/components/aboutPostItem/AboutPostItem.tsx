import React from "react";
import { useParams } from "react-router-dom";
import { PostType } from "../../lib/types/PostType";

export function AboutPostItem({ posts }: { posts: PostType[] }): JSX.Element {
  const { id } = useParams();
  const post = posts.find((el) => el.id === Number(id));

  const lockalStyle = {
    margin: 40,
  };

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "rgb(255, 255, 255, 0.8)",
        margin: 30,
        padding: 30,
        borderRadius: 30,
      }}
    >
      {post && (
        <>
          <h1 style={lockalStyle}>{post.title}</h1>
          <hr style={lockalStyle} />
          <h3 style={lockalStyle}>{post.body}</h3>
        </>
      )}
    </div>
  );
}
