import AppBar from '@mui/material/AppBar';
import React from "react";
import {Box, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import { Icon } from '@iconify/react';


function NavBar (props) {

    function menuToggle () {
        console.log("hello!")
    }

    return(
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" sx={{
                backgroundColor: "rgba(0,0,0,1)"
            }}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={menuToggle}
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
            {/*<Box component="nav">*/}
            {/*    <Drawer*/}
            {/*        container={container}*/}
            {/*        variant="temporary"*/}
            {/*        open={mobileOpen}*/}
            {/*        onClose={handleDrawerToggle}*/}
            {/*        ModalProps={{*/}
            {/*            keepMounted: true, // Better open performance on mobile.*/}
            {/*        }}*/}
            {/*        sx={{*/}
            {/*            display: { xs: 'block', sm: 'none' },*/}
            {/*            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {drawer}*/}
            {/*    </Drawer>*/}
            {/*</Box>*/}
        </Box>
    )
}
export default NavBar;