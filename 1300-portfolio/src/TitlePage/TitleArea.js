import './TitleArea.css'
import {Container, Typography} from "@mui/material";
function TitleArea (props) {
    return(
        <div id="titleArea">
            <Container sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                color: "white",
                textAlign: "center",
                pr: {xs : 0, sm : 2}
            }}>
                <Typography
                    variant="h3"
                    component="div"
                    sx={{p:2}}
                > Hey! <br/> I'm CrazyKoala555.
                    {
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{p:2}}
                        > I do graphical wizardry.
                        </Typography>
                    }
                </Typography>
            </Container>
            </div>
    )
}
export default TitleArea;