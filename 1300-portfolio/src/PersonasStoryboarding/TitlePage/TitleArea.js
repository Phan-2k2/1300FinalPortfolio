import './TitleArea.css'
import {Container, Grow, Typography} from "@mui/material";

function TitleArea (props) {


    return(
        <div id="titleArea" ref={props.titleRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <Container sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                }}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{p:2}}
                        color={"black"}
                    > Personas and Storyboarding
                        {
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{p:2}}
                            > Understanding interfaces and their users.
                            </Typography>
                        }
                    </Typography>
                </Container>
            </Grow>
            </div>
    )
}
export default TitleArea;