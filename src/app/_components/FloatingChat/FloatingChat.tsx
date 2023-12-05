// Produced by Duong Trung Nguyen

'use client'

import { Fab, IconButton, InputAdornment, Menu, MenuItem, Stack, TextField, Tooltip, Typography } from "@mui/material";
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const FloatingChat = () => {
  const [ isDisplay, setIsDisplay ] = useState(false);

  const handleOpen = () => {
    setIsDisplay(true);
  }

  const handleClose = () => {
    setIsDisplay(false);
  }

  return (
    <div className="position-fixed rounded" style={{bottom: "30px", right: "30px"}}>
        {
          isDisplay ? 
          <Stack sx={{width: "350px", height: "600px", background: "#fff", transition: "1s", boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px 0px", justifyContent: "space-between"}}>
            <Stack direction="row" className="p-2 justify-content-between align-items-center" sx={{background: "var(--primary-yellow)"}}>
              <Typography variant="h6" className="text-light">
                <b>Hỗ trợ</b>
              </Typography>
              <IconButton onClick={() => handleClose()}>
                <CloseIcon sx={{color: "#fff"}}/>
              </IconButton>
            </Stack>
            <Stack className="h-100">

            </Stack>

            <form className="d-flex flex-row p-2">
              <div className="input-group">
                <TextField placeholder="Input here"
                  InputProps={{
                    endAdornment: 
                    <InputAdornment position="start">
                      <IconButton className="position-absolute" onClick={() => handleClose()} sx={{right: "5px", bottom: "5px"}}>
                        <SendIcon fontSize="medium"/>
                      </IconButton> 
                    </InputAdornment>,
                  }}/>
              </div>
            </form>
          </Stack>
          :
          <Tooltip title="chat" placement="left">
              <Fab color="secondary" aria-label="add" onClick={() => handleOpen()}>
                  <ChatRoundedIcon />
              </Fab>
          </Tooltip>
        }
    </div>
  );
};
export default FloatingChat;