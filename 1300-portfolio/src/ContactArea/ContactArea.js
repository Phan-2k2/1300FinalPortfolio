import {Fade, Typography} from "@mui/material";
import './ContactArea.css'
function ContactArea (props) {
    return (
        <div id="contactArea">
            <Fade in={true} timeout={1000}>
                <div id="contactAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>Contact Me!</b>
                    </Typography>
                </div>
            </Fade>
        </div>
    )
}
export default ContactArea;