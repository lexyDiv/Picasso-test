import { RefObject } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { updateScrollLevel } from "../../../slices/postsSlice";

export function useGoToAboutPost({
  id,
  listBox,
}: {
  id: number;
  listBox: RefObject<HTMLDivElement>;
}): () => void {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return () => {
    const scrollLevel = listBox.current?.scrollTop;
    scrollLevel && dispatch(updateScrollLevel(scrollLevel));
    navigate(`/${id}`);
  };
}
