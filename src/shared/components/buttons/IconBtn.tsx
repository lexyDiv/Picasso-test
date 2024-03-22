import { Button } from "@mui/material";

import React from "react";

function IconBtn({
  callBack,
  value,
}: {
  callBack: () => void;
  value: string;
}): JSX.Element {
  return (
    <Button
      size="small"
      color="inherit"
      sx={{
        marginLeft: "10%",
        backgroundColor: "rgb(0, 0, 255, 0.2)",
      }}
      onClick={callBack}
    >
      {value}
    </Button>
  );
}

export default IconBtn;
