import { css, styled, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Title = styled(Typography)`
  variant: h1;
  align: center;
  color: white;
  font-size: 25px;
  margin: 40px;
`;

export const RootStyle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

export const StartButtonStyle = styled(Button)`
  border: 1px solid #42a5f5;
  background-color: rgba(25, 118, 210, 0.5);
  border-radius: 30px;
  padding: 15px;
  color: white;
`;
