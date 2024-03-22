import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { PostType } from "../../widgets/lib/types/PostType";
import { useGoToAboutPost } from "../../widgets/lib/hooks/useGoToAboutPost";
import IconBtn from "../../shared/components/buttons/IconBtn";

export function PostItem({
  post,
  listBox,
}: {
  post: PostType;
  listBox: RefObject<HTMLDivElement>;
}): JSX.Element {
  const goToabutPostCallBack = useGoToAboutPost({ id: post.id, listBox });
  const bodyRef = useRef<HTMLDivElement>(null);
  const [showAboutBtn, setShowAboutBtn] = useState<boolean>(false);

  const resize = () => {
    setShowAboutBtn(
      Boolean(
        bodyRef.current &&
          bodyRef.current.scrollWidth > bodyRef.current.clientWidth
      )
    );
  };

  useEffect(() => {
    if (bodyRef.current) {
      setShowAboutBtn(
        bodyRef.current.scrollWidth > bodyRef.current.clientWidth
      );
      window.addEventListener("resize", resize);
    }
    return () => window.removeEventListener("resize", resize);
  }, [bodyRef.current]);

  return (
    <Card sx={{ maxWidth: 1000, margin: 1 }}>
      <CardContent>
        <Typography sx={{ color: "blue" }}>{post.id}</Typography>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          ref={bodyRef}
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        {showAboutBtn && (
          <IconBtn callBack={goToabutPostCallBack} value="about" />
        )}
      </CardActions>
    </Card>
  );
}
