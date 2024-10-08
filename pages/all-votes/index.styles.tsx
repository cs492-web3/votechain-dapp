import { styled, Typography } from "@mui/material";

export const RootStyle = styled("div")(() => ({
  marginLeft: "10px",
  marginRight: "10px",
  justifyContent: "center",
  height: "100%",
}));

export const VoteContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  margin: 10,
}));

export const ImageContainer = styled("div")(() => ({
  height: "180px",
  marginTop: 20,
  position: "relative",
}));
export const Title = styled(Typography)`
  variant: h1;
  align: center;
  color: white;
  font-size: 25px;
  text-align: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;
