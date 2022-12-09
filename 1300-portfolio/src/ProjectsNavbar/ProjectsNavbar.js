import AppBar from '@mui/material/AppBar';
import React, {useState} from "react";
import {Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';
import '../Navbar.css'
import {animateScroll as scroll} from 'react-scroll'
import {NavLink} from "react-router-dom";
import {Transition} from "react-transition-group";


function ProjectsNavbar (props) {

    const defaultStyle = {
        transition: `background-color 300ms ease-in-out`,
        backgroundColor: "rgba(35,35,38,0)",
        boxShadow: "none"
    };

    const transitionStyles = {
        entering: {backgroundColor: "rgba(35,35,38,0)"},
        entered: {backgroundColor: "rgba(35,35,38,1)"},
        exiting: {backgroundColor: "rgba(35,35,38,1)"},
        exited: {backgroundColor: "rgba(35,35,38,0)"},
    };

    const [openDrawer, setOpenDrawer] = useState(false);
    function drawerToggle () {
        if(openDrawer){
            setOpenDrawer(false);
        } else {
            setOpenDrawer(true);
        }
    }

    return(

        <Transition in={!props.isVisibleTitle} timeout={0}>
            {(state) => (
                <Box sx={{ display: 'flex' }}>
                    <AppBar ref={props.navbarRef} component="nav" sx={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={drawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Icon icon="material-symbols:menu" color="white" />
                    </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex' }, alignItems: "center", color: "white" }}
                        >
                            {
                                <NavLink to={"/1300FinalPortfolio"} style={{textDecoration: 'none'}}>
                                    <IconButton sx={{padding:0}}>
                                        <Icon icon="icon-park-outline:koala-bear" color="white" height={40}/>
                                    </IconButton>
                                </NavLink>
                            }
                            CrazyKoala555
                        </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button key="home" sx={{ color: '#fff'}} onClick={scroll.scrollToTop}>
                                Scroll To Top
                            </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={openDrawer}
                    onClose={drawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                        background: "rgba(35,35,38,0.7)",
                    }}
                    PaperProps={{sx: {background: "rgba(35,35,38,1)"}}}
                >
                    {
                        <div className="menuDrawer">
                            <div id={"drawerButtons"}>
                                    <Button key="home" onClick={scroll.scrollToTop}
                                            sx={{ color: '#fff', background: "rgba(0,0,0,0)", '&:hover' :  {background: "#000", color: "#fff"}}}>
                                        Scroll To Top
                                    </Button>
                            </div>
                            <div id="drawerCopyright">
                                <Typography variant="body2" sx={{pb:2
                                }}>
                                    &copy; CrazyKoala555 2022
                                </Typography>
                            </div>
                        </div>
                    }
                </Drawer>
            </Box>
        </Box>
            )}
        </Transition>
    )
}
export default ProjectsNavbar;