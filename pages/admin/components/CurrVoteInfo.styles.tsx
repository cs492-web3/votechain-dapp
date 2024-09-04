import { styled, Typography, Button, Paper } from "@mui/material";

export const Title = styled("div")`
  variant: h1;
  color: white;
  font-size: 25px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const WhiteInfo = styled(Typography)`
  color: white;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const BlackInfo = styled(Typography)`
  color: black;
  font-size: 15px;
`;

interface VoteStatusProps {
  disabled: boolean;
}
export const VoteStatus = styled("div")((props: VoteStatusProps) => ({
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

export const NextProgress = styled(Button)`
  border: 1px solid #1976d2;
  margin-top: 20px;
`;
export const RootStyle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
`;

export const CandidateInfo = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 10px;
  margin-top: 10px;
`;
