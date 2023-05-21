import * as React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          padding: 2,
		  paddingLeft:4,
		  paddingRight:4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          VoteChain
        </Typography>
        <ConnectButton></ConnectButton>
      </AppBar>
    </Box>
  );
}
