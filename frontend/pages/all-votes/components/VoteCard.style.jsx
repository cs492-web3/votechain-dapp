import styled from "@emotion/styled";
import { css, Typography, Button, TextField } from "@mui/material";

export const Contract = styled(Button)(() => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #42a5f5",
  color: "white",
  padding: 20,
  margin: 10,
  borderRadius: 20,
}));

export const Info = styled(Typography)`
  color: white;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
