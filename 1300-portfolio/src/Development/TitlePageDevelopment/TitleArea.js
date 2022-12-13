import './TitleArea.css'
import {Container, Grow, Typography} from "@mui/material";

function TitleArea (props) {

    return(
        <div id="titleAreaDev" ref={props.titleRef}>
            <Grow in={props.isVisibleTitle} timeout={1000}>
                <Container sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    textAlign: "center",
                    overflowWrap: "anywhere"
                }}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{p:2}}
                        color={"white"}
                    > <b>Development</b>
                        {
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{p:2}}
                            >
                                Creating a responsive web application.
                            </Typography>
                        }
                    </Typography>
                </Container>
            </Grow>
            </div>
    )
}
export default TitleArea;