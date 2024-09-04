import { css, styled, Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

export const Title = styled(Typography)`
  variant: h1;
  align: center;
  color: white;
  font-size: 25px;
  text-align: center;
  width: 100%;
  margin-bottom: 40px;
`;

export const Info = styled(Typography)`
  align: left;
  color: white;
  font-size: 20px;
  margin: 20px;
`;

export const RootStyle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
  padding: 30px;
`;

export const StartButtonStyle = styled(Button)`
  border: 1px solid #42a5f5;
  background-color: rgba(25, 118, 210, 0.5);
  border-radius: 30px;
  padding: 15px;
  color: white;
`;
