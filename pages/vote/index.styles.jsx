import styled from "@emotion/styled";
import { css, Button, Typography, } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Title = styled(Typography)(() => ({
  variant: "h2",
  align: "center",
  color: "#cce8f4",
  fontSize: 25,
  margin: 20,
}));

export const Description = styled(Typography)(() => ({
  variant: "h1",
  align: "center",
  color: "white",
  fontSize: 25,
  marginBottom: 20,
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  flexWrap: "wrap",
  width: "70%",
}));

export const Candidate = styled("div")((props) => ({
  width: "100%",
  color: "white",
  border: "1px solid ",
  margin: 10,
  textAlign: "center",
  padding: 30,
  borderRadius: 30,
  backgroundColor: props.selected ? "rgba(255, 255, 255, 0.2)" :"rgba(25, 118, 210, 0)",
}));

export const VoteButton = styled(Button)(() => ({
  margin: 30,
  border: "2px solid",
  borderRadius: 50,
  width: 300,
  height: 50,
}));
