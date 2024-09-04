import { css, Button, Typography, styled } from "@mui/material";

export const RootStyle = styled("div")(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Info = styled("div")(() => ({
  color: "white",
  width: "100%",
  margin: 5,
}));

export const BlueInfo = styled("div")(() => ({
  color: "#cce8f4",
  width: "100%",
  marginTop: 20,
  textAlign: "center",
  fontSize: "22px",
}));

export const Title = styled("div")(() => ({
  color: "white",
  fontSize: "30px",
  marginTop: "30px",
}));
