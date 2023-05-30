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

export const VoteTitle = styled("Typography")(() => ({
  variant: "h1",
  align: "center",
  color: "white",
  fontSize: 30,
  margin: 20,
}));

export const RootStyle = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
}));
