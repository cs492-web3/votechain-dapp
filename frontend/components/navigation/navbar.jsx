import * as React from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          padding: 2,
          paddingLeft: 4,
          paddingRight: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          sx={{ color: "white", fontSize: 20 }}
          onClick={() => router.push({ pathname: "/votechain-dapp/" })}
        >
          VoteChain
        </Button>
        <ConnectButton></ConnectButton>
      </AppBar>
    </Box>
  );
}
