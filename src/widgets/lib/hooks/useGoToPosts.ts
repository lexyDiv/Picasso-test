import { useNavigate } from "react-router-dom";

export function useGoToPosts() {
  const navigate = useNavigate();
  return () => {
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
}
