import styled from "@emotion/styled";
import { css, Button, Typography, outlinedInputClasses } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Title = styled(Typography)(() => ({
  variant: "h1",
  align: "center",
  color: "white",
  fontSize: 25,
  margin: 20,
}));

export const RootStyle = styled("div")(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const CandidateContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "space-between",
  flexWrap: 'wrap'
}));

export const VoteButton = styled(Button)(() => ({
  margin: 30,
  border: "2px solid",
  borderRadius: 50,
  width: 300,
  height: 50,
}));
