import {Container, Fade, List, ListItem, Typography} from "@mui/material";
import './AboutArea.css'
import {useEffect, useRef, useState} from "react";
import {Icon} from "@iconify/react";

//fade in stuff: https://www.webtips.dev/webtips/react-hooks/element-in-viewport
//https://bobbyhadz.com/blog/react-check-if-element-in-viewport#:~:text=To%20check%20if%20an%20element,if%20the%20element%20is%20intersecting.
function AboutArea (props) {

    return(
        <div id="aboutArea">
            <Fade in={true} timeout={1000}>
                <div id="aboutAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>About Me</b>
                    </Typography>
                    <div id="aboutInfo">
                        <Typography variant="body2" sx={{maxWidth:{xs : "100%", sm : "50%"}}} id="aboutWords">
                            Hey! I'm CrazyKoala555. I'm from the Great State of West Virginia, and currently
                            go to Brown University. I'm concentrating in Computer Science, where I hope to have
                            an illustrious career as a UI designer. I really do love frontend work. When I'm not
                            designing awesome interfaces, you can find me playing video games, or practicing saxophone.
                            My favorite video games include:
                            <ul>
                                <li>Assetto Corsa</li>
                                <li>Valorant</li>
                                <li>Apex Legends</li>
                                <li>Minecraft</li>
                            </ul>
                            I've spent a fair amount of time doing photography, and it's been a fun hobby for me. I really
                            love shooting photos, and making people look awesome! Anyway, you can find my portfolio below.
                            Click on any of the projects to learn more. Thanks for visiting!
                        </Typography>
                        <Container sx={{display:{xs:"none", sm:"block"}, textAlign: "center"}}>
                            <Icon icon="icon-park-outline:koala-bear" color="white" id="koalaIcon"/>
                        </Container>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default AboutArea;