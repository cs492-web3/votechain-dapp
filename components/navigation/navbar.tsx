import React, { useState } from "react";
import { AppBar, Box, Button, Typography, IconButton } from "@mui/material";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import SideNavigation from "./SideNavigation";

export default function Navbar() {
  const router = useRouter();
  const [sideOpen, setSideOpen] = useState(false);
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
        <div>
          <IconButton color="primary" onClick={() => setSideOpen(!sideOpen)}>
            <MenuIcon />
          </IconButton>
          <Button
            sx={{ color: "white", fontSize: 20 }}
            onClick={() => router.push({ pathname: "/" })}
          >
            VoteChain
          </Button>
        </div>
        <div>
          <ConnectButton></ConnectButton>
        </div>
      </AppBar>

      <SideNavigation open={sideOpen} onClose={() => setSideOpen(false)} />
    </Box>
  );
}
