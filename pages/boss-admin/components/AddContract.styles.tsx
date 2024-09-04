import { styled, Typography, Button, TextField } from "@mui/material";

export const RootStyle = styled("div")(() => ({
  marginTop: 40,
  marginLeft: "10px",
  marginRight: "10px",
  height: "100%",
}));

export const CardContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const CandidateContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
}));

export const Candidate = styled("div")(() => ({
  border: "1px solid #fbc02d",
  backgroundColor: "rgba(251, 192, 45, 0.3)",
  color: "white",
  padding: 10,
  margin: 10,
  borderRadius: 20,
}));

export const InputContainer = styled("div")(() => ({
  marginTop: 20,
}));

export const InputTextField = styled(TextField)`
  margin-right: 20px;
  & label.Mui-focused {
    color: #1976d2;
  }
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: #1976d2;
    }
  }
`;

export const Title = styled(Typography)`
  variant: h1;
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Info = styled(Typography)`
  color: white;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RegisterButton = styled(Button)`
  border: 1px solid #42a5f5;
  background-color: rgba(25, 118, 210, 0);
  border-radius: 30px;
  padding: 15px;
  color: white;
`;
