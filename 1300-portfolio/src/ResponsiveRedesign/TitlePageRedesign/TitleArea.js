import './TitleArea.css'
import {Container, Grow, Typography} from "@mui/material";

function TitleArea (props) {

    return(
        <div id="titleAreaRedesign" ref={props.titleRef}>
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
                        color={"black"}
                    > <b>Responsive Redesign</b>
                        {
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{p:2}}
                            >Redesigning an outdated website.
                            </Typography>
                        }
                    </Typography>
                </Container>
            </Grow>
            </div>
    )
}
export default TitleArea;