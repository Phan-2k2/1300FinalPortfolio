import './TitleArea.css'
import {Container, Grow, Typography} from "@mui/material";

function TitleArea (props) {


    return(
        <div id="titleAreaMain" ref={props.titleRef}>
            <Grow in={props.isVisible} timeout={1000}>
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
            </Grow>
            </div>
    )
}
export default TitleArea;