import AppBar from '@mui/material/AppBar';
import React, {useState} from "react";
import {Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';
import './NavBar.css'


function NavBar (props) {

    const [openDrawer, setOpenDrawer] = useState(false);
    function drawerToggle () {
        if(openDrawer){
            setOpenDrawer(false);
        } else {
            setOpenDrawer(true);
        }
    }



    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{
                // backgroundColor: "rgba(0,0,0,0.5)"
                backgroundColor: "rgba(0,0,0,0.7)"

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
                        sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex' }, alignItems: "center" }}
                    >
                        {
                            <IconButton sx={{padding:0}}>
                                <Icon icon="icon-park-outline:koala-bear" color="white" height={40}/>
                            </IconButton>
                        }
                        CrazyKoala555
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button key="about" sx={{ color: '#fff' }}>
                            About
                        </Button>
                        <Button key="projects" sx={{ color: '#fff' }}>
                            Projects
                        </Button>
                        <Button key="contact" sx={{ color: '#fff' }}>
                            Contact
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
                        background: "rgba(0,0,0,0.7)",
                    }}
                    PaperProps={{sx: {background: "rgba(0,0,0,1)"}}}
                >
                    {
                        <div className="menuDrawer">
                            <div id={"drawerButtons"}>
                                <Button key="about" sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>
                                    About
                                </Button>
                                <Button key="projects" sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>
                                    Projects
                                </Button>
                                <Button key="contact" sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>
                                    Contact
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
    )
}
export default NavBar;