import { css, styled, Typography, Button, TextField } from "@mui/material";

export const Contract = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #42a5f5",
  color: "white",
  padding: 20,
  margin: 10,
  borderRadius: 20,
  height: "120px",
}));

export const VotedContract = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid grey",
  color: "grey",
  padding: 20,
  margin: 10,
  borderRadius: 20,
  height: "120px",
}));

export const Info = styled(Typography)`
  color: white;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const VoteStatus = styled("div")((props) => ({
  borderWidth: 1,
  borderRadius: 20,
  borderColor: props.disabled ? "grey" : "#1976d2",
  color: props.disabled ? "grey" : "#1976d2",
}));

export const VoteStatusWrapper = styled("div")`
  border: 1px solid grey;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const VoteStatusContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const WhiteInfo = styled(Typography)`
  color: white;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
