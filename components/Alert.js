"use client";

import React, { useEffect } from "react";
import { Alert, AlertTitle, Snackbar, Stack } from "@mui/material";
import { useAlert } from "@/context/AlerterContext";

const Alerter = () => {
  const { alert, hideAlert } = useAlert();

  useEffect(() => {
    if (alert) {
      // You can customize the alert duration, position, etc.
      setTimeout(() => {
        hideAlert();
      }, 5000);
    }
  }, [alert, hideAlert]);
  const handleClose = () => {
    hideAlert();
  };

  return (
    <Stack>
      <Snackbar
        open={!!alert}
        autoHideDuration={6000}
        onClose={hideAlert}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {/* <AlertUI severity={alert?.type} sx={{ width: "100%" }}>
        <strong>{alert?.title}</strong> - {alert?.message}
    </AlertUI> */}
        <Alert
          onClose={handleClose}
          severity={alert?.type}
          sx={{ width: "100%" }}
        >
          <AlertTitle>{alert?.title}</AlertTitle>
          {/* <strong>{alert?.title}</strong> - */}
          {alert?.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Alerter;
