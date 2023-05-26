import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function TransactionDialog({
  open,
  result,
  handleClose,
  onClickClose,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          {"Transaction Result"}
        </DialogTitle>
        <DialogContent>
          {Object.entries(result).length != 0 ? (
            <DialogContentText id="alert-dialog-description">
              <div>{`트랜잭션 결과 : ${result.status}`}</div>
              <div>{result.message}</div>
            </DialogContentText>
          ) : (
            <DialogContentText id="alert-dialog-description">
              트랜잭션 진행 중
            </DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
