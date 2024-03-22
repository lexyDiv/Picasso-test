import { MutableRefObject } from "react";

export function windowResiser({
  setWindowSize,
  setScrollBar,
  listBox,
}: {
  setWindowSize: (value: number) => void;
  setScrollBar: (value: boolean) => void;
  listBox: MutableRefObject<HTMLDivElement | null>;
}): void {
  setWindowSize(window.innerHeight);
  const show =
    listBox.current &&
    listBox.current.clientHeight < listBox.current.scrollHeight;
  setScrollBar(Boolean(show));
}
