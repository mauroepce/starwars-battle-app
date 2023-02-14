import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from "./WarningModal.module.css"

export default function WarningModal({toggle}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  return (
    <div>
     
      <Modal
       
        open={toggle}
        onClose={toggle}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={style.box}>
            <Typography className={style.header} variant="h6" component="h2">
            <i className="fa-solid fa-circle-info fa-2x"></i>
            </Typography>
            <Typography className={style.content}  >
            This character has already been chosen.
            </Typography>
            <button className={style.button} onClick={toggle}>Ok</button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}