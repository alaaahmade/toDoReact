/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from './Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function ModalForm({ open, setOpen, TaskE }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            edit Task:
            {' '}
            {TaskE.name}
          </Typography>
          <Input type="Edit" TaskE={TaskE} />
        </Box>
      </Modal>
    </div>
  );
}
