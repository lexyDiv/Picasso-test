export function scrollHandler(e: React.UIEvent<HTMLDivElement>): boolean {
  const containerHeight = e.currentTarget.clientHeight;
  const scrollHeight = e.currentTarget.scrollHeight;
  const scrollTop = e.currentTarget.scrollTop;
  return scrollHeight - containerHeight - scrollTop < 100;
}
