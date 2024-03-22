import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Logo from "../../../shared/components/icons/components/Logo";
import IconBtn from "../../../shared/components/buttons/IconBtn";
import { useGoToPosts } from "../../lib/hooks/useGoToPosts";

export function Header(): JSX.Element {
  const { id } = useParams();

  const goBackBtnCallBack = useGoToPosts();

  return (
    <>
      <AppBar
        position="static"
        sx={{
          height: "70px",
        }}
      >
        <Toolbar>
          <Logo />
          <Typography
            align="inherit"
            variant="h5"
            sx={{
              margin: 1,
            }}
          >
            bast fake posts
          </Typography>

          {id && <IconBtn callBack={goBackBtnCallBack} value="go back" />}
        </Toolbar>
      </AppBar>
    </>
  );
}
