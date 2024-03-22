import React from "react";
import logoItem from "../assets/postIcon.png";

function Logo(): JSX.Element {
  return (
    <img
      style={{
        height: "95%",
      }}
      src={logoItem}
      alt="logo"
    />
  );
}

export default Logo;
