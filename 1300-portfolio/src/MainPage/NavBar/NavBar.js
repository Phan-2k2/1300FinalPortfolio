import AppBar from '@mui/material/AppBar';
import React, {useState} from "react";
import {Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';
import '../../Navbar.css'
import { animateScroll as scroll} from 'react-scroll'


function NavBar (props) {

    const [openDrawer, setOpenDrawer] = useState(false);
    function drawerToggle () {
        if(openDrawer){
            setOpenDrawer(false);
        } else {
            setOpenDrawer(true);
        }
    }

    function scrollHandler(type) {
        let offset = props.navbarRef.current.clientHeight; //accounts for navbar
        switch (type) {
            case "about" : {
                let yOffset = props.aboutRef.current.offsetTop;
                scroll.scrollTo(yOffset-offset);
                break;
            }
            case "projects" : {
                let yOffset = props.projectsRef.current.offsetTop;
                scroll.scrollTo(yOffset-offset);
                break;
            }
            case "contact" : {
                let yOffset = props.contactsRef.current.offsetTop;
                scroll.scrollTo(yOffset-offset);
                break;
            }
            default:
                break;
        }
    }

    function drawerClickHandler(type) {
        drawerToggle();
        scrollHandler(type);
    }


    return(
            <Box sx={{ display: 'flex' }}>
                <AppBar ref={props.navbarRef} component="nav" sx={{
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
                                <IconButton sx={{padding:0}} onClick={scroll.scrollToTop}>
                                    <Icon icon="icon-park-outline:koala-bear" color="white" height={40}/>
                                </IconButton>
                            }
                            CrazyKoala555
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button key="about"  onClick={() => scrollHandler("about")} sx={{ color: '#fff' }}>
                                About
                            </Button>
                            <Button key="projects"  onClick={() => scrollHandler("projects")} sx={{ color: '#fff' }}>
                                Projects
                            </Button>
                            <Button key="contact"  onClick={() => scrollHandler("contact")} sx={{ color: '#fff' }}>
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
                                    <Button key="about"  onClick={() => drawerClickHandler("about")}
                                            sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>
                                        About
                                    </Button>
                                    <Button key="projects" onClick={() => drawerClickHandler("projects")}
                                            sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>
                                        Projects
                                    </Button>
                                    <Button key="contact" onClick={() => drawerClickHandler("contact")}
                                            sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>
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