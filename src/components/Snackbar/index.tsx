import * as React from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Snackbar({ message, onOpen, onClick }: any) {

  return (
    <MuiSnackbar open={onOpen} autoHideDuration={6000} onClick={onClick}>
      <Alert severity="error">{message}</Alert>
    </MuiSnackbar>
  );
}

export default Snackbar