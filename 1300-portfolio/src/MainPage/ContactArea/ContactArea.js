import {Alert, Button, Grow, Snackbar, Typography} from "@mui/material";
import './ContactArea.css'
import {useState} from "react";
import {Icon} from "@iconify/react";

function ContactArea (props) {

    const [snackbarStatus, setSnackbarStatus] = useState(false);

    function snackBarOpen(){
        setSnackbarStatus(true);
    }
    function snackBarClose(){
        setSnackbarStatus(false);
    }

    const iconSize = 50;



    return (
        <div id="contactArea" ref={props.contactsRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="contactAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Contact Me!</b>
                    </Typography>
                    <Typography variant="subtitle1" sx={{}}>
                        Thanks for visiting my portfolio! You can find me on anywhere linked below.
                        Click an icon to be directed to a page, or fill out the form to send me an email!
                    </Typography>

                    <div id="form">
                        <form id="emailForm">
                            <Typography variant="h6" sx={{}}>
                                <b>Email Me:</b>
                            </Typography>
                            <input type="text" placeholder="Email Address" id="formEmail"/>
                            <textarea placeholder="Message" id="formMessage"/>
                            <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                                <Icon  icon="material-symbols:send" fontSize={iconSize}/>
                            </Button>
                        </form>

                    </div>
                    <div id="mediaButtons">
                        <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon icon="mdi:instagram" fontSize={iconSize}/>
                        </Button>
                        <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon icon="mdi:linkedin" fontSize={iconSize}/>
                        </Button>
                        <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon icon="mdi:twitter" fontSize={iconSize}/>
                        </Button>
                        <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon icon="ic:baseline-facebook" fontSize={iconSize}/>
                        </Button>
                        <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon icon="ic:baseline-discord" fontSize={iconSize}/>
                        </Button>
                        <Button variant="contained" onClick={snackBarOpen} sx={{background: "rgb(45, 42, 46, 0)", boxShadow: "none"}}>
                            <Icon  icon="mdi:github" fontSize={iconSize}/>
                        </Button>
                    </div>
                    <Snackbar open={snackbarStatus} autoHideDuration={6000} onClose={snackBarClose}>
                        <Alert onClose={snackBarClose} severity="info" sx={{ width: '100%' }}>
                            Currently unlinked. Thanks for trying, though!
                        </Alert>
                    </Snackbar>
                </div>
            </Grow>
        </div>
    )
}
export default ContactArea;