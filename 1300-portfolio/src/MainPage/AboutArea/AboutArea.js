import {Container, Grow, Typography} from "@mui/material";
import './AboutArea.css'
// import {Icon} from "@iconify/react";
// import profilePhoto from "../../Images/ADP06474.jpg"
import apLogo from "../../Images/apLogo-cropped.svg";
import React from "react";

function AboutArea (props) {

    const defaultStyleSVG = {
        height: "20rem",
    };

    return(
        <div id="aboutArea" ref={props.aboutRef}>
            <Grow in={props.isVisible} timeout={1000}>
                <div id="aboutAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>About Me</b>
                    </Typography>
                    <div id="aboutInfo">
                        <Typography variant="subtitle1" sx={{maxWidth:{xs : "100%", sm : "50%"}}} id="aboutWords">
                            Hey! I'm Austin Phan. I'm from the Great State of New Hampshire, and currently
                            go to Brown University. I'm currently concentrating in Computer Science.
                            When I'm not programming, you can find me playing video games or practicing Taekwondo.
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
                            {/*<Icon icon="icon-park-outline:koala-bear" color="white" id="koalaIcon"/>*/}
                            <img className="svgLogo" src={apLogo} alt={"hello!"} style={defaultStyleSVG}/>
                            {/*<img id="profilePhoto" src={profilePhoto} alt={"Austin's Photo"}/>*/}
                        </Container>
                    </div>
                </div>
            </Grow>
        </div>
    )
}
export default AboutArea;