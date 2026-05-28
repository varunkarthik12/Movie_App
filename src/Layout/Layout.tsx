import { Box } from '@mui/material';
import React, { type ReactNode } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';

interface layoutProps{
    children : ReactNode;
}


const Layout = ({children} : layoutProps) => {
  return (
    <Box sx ={
        {
            backgroundColor : "#10141F",
            display : "flex",
            FlexDirection  : {
                xs  : "column",
                lg : "row"
            },
            color : "white",
            padding : 3,
            gap : 3,
            overflowY  : "hidden",
            height : "100vh"
        }}>
        <Sidebar />
        
        <Box
            sx = {
                {
                    width : "100%",
                    overflowY : "scroll"

                }
            }>{children}</Box>
            
    </Box>
  )
}

export default Layout