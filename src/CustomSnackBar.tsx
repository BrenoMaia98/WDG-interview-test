import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export interface CustomSnackBarProps {
  open: boolean;
  autoHideDuration?: number;
  handleClose(): void;
  message: string;
  status: 'success' | 'error' | 'warning' | 'info' | 'success';
}

const CustomSnackBar: React.FC<CustomSnackBarProps> = ({
  open,
  autoHideDuration = 6000,
  handleClose,
  message,
  status,
}) => {
  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity={status}>
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default CustomSnackBar;
