import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'


function Navbar(){
    return(<>
      <Box sx={{ flexGrow: 1,border:"1px solid red",height:"75px" }}>
      <AppBar position="static" sx={{height:"75px",display:"flex",justifyContent:"center",background:"radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%);"}}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
           <MenuIcon sx={{fontSize:"35px",color:"black"}}/>
          </IconButton>
          <Typography variant="h6" color="black" component="div" sx={{fontSize:"25px",fontWeight:"500"}}>
            Cart
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>);
}

export default Navbar;