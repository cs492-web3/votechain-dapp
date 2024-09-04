import { styled, Typography, Button, TextField } from "@mui/material";

export const Contract = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #42a5f5",
  color: "white",
  padding: 20,
  margin: 10,
  borderRadius: 20,
}));

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
  border: 1px solid;
  border-radius: 30px;
  padding: 5px;
  color: white;
  width: 200px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
