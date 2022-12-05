import AppBar from '@mui/material/AppBar';
import React from "react";
import {Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';
import './NavBar.css'
import {animateScroll as scroll} from 'react-scroll'
import {NavLink} from "react-router-dom";


function NavBar (props) {

    return(
            <Box sx={{ display: 'flex' }}>
                <AppBar ref={props.navbarRef} component="nav" sx={{
                    backgroundColor: "rgba(0,0,0,0.7)"
                }}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex' }, alignItems: "center" }}
                        >
                            {
                                <IconButton sx={{padding:0}} onClick={scroll.scrollToTop}>
                                    <Icon icon="icon-park-outline:koala-bear" color="white" height={40}/>
                                </IconButton>
                            }
                            CrazyKoala555
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <NavLink to={"/1300FinalPortfolio"}>
                                <Button key="about" sx={{ color: '#fff' }}>
                                    Return to Home
                                </Button>
                            </NavLink>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
    )
}
export default NavBar;