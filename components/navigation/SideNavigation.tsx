import * as React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { useRouter } from "next/router";

const SideNavigation = ({ open, onClose }: any) => {
  const router = useRouter();
  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.8)",
          color: "#e3f2fd",
          border: "1px solid rgba(255,255,255,0.3)",
        },
      }}
    >
      <Box sx={{ border: "olive" }}>
        <List sx={{ marginTop: 10 }}>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
          <ListItem>
            <ListItemButton
              sx={{ paddingLeft: 10 }}
              onClick={() => router.push({ pathname: "/admin" })}
            >
              Admin
            </ListItemButton>
          </ListItem>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
          <ListItem>
            <ListItemButton
              sx={{ paddingLeft: 10 }}
              onClick={() => router.push({ pathname: "/nft-gallery" })}
            >
              NFT Gallery
            </ListItemButton>
          </ListItem>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
          <ListItem>
            <ListItemButton
              sx={{ paddingLeft: 10 }}
              onClick={() => router.push({ pathname: "/all-votes" })}
            >
              See Votes
            </ListItemButton>
          </ListItem>
          <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
        </List>
      </Box>
    </Drawer>
  );
};

export default SideNavigation;
