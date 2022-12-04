import {Typography} from "@mui/material";

const footerStyle = {
    "height" : "10vh",
    "display" : "flex",
    "justify-content": "center",
    "align-items": "center",
    "background-color" : "rgba(45, 42, 46, 1)"
}
function FooterArea () {
    return (
        <div id="footer" style={footerStyle}>
            <Typography variant="body2" sx={{color: "white", textAlign: "center"}}>
                &copy; 2022 CrazyKoala555 Portfolio, a UI/UX Project
            </Typography>
        </div>
    )
}
export default FooterArea;