import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NFTDialog from "./NFTDialog";
export default function TransactionDialog({
  open,
  result,
  handleClose,
  onClickClose,
  NFTCA,
  tokenId,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          {"Transaction Result"}
        </DialogTitle>
        <DialogContent>
          {Object.entries(result).length != 0 ? (
            <DialogContentText id="alert-dialog-description">
              <div>{`Transaction Result : ${result.status}`}</div>
              <div>{result.message}</div>
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description">
              Transaction ongoing
            </DialogContentText>
          )}

          {result.status == "success" && NFTCA && tokenId && (
            <NFTDialog NFTCA={NFTCA} tokenId={tokenId} />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={onClickClose}>CLOSE</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
