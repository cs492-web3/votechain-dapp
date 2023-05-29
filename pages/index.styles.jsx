import styled from "@emotion/styled";
import { css } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Title = styled("Typography")(() => ({
  variant: "h1",
  align: "center",
  color: "white",
  fontSize: 25,
  margin: 20,
}));

export const RootStyle = styled("div")(() => ({
  height: "80vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
