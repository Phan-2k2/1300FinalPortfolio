import './TitleArea.css'
import {Container, Grow, Typography} from "@mui/material";
import {useRef} from "react";
import {useIsVisible} from "../../MainPage/MainPage";

function TitleArea (props) {

    return(
        <div id="titleAreaIterative" ref={props.titleRef}>
            <Grow in={props.isVisible} timeout={1000}>
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
                        color={"black"}
                    > <b>Iterative Design</b>
                        {
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{p:2}}
                            >
                                Gathering user feedback and improving an app.
                            </Typography>
                        }
                    </Typography>
                </Container>
            </Grow>
            </div>
    )
}
export default TitleArea;