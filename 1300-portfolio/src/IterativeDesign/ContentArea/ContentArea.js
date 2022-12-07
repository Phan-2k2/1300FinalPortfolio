import {Button, Container, Grow, Typography} from "@mui/material";
import './ContentArea.css'
import Lightbox from "../../Lightbox";
import {useRef, useState} from "react";
import {useIsVisible} from "../../MainPage/MainPage";
import {Slide} from "react-slideshow-image";
import {animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";

function ContentArea () {

    const introRef = useRef();
    const introVisible = useIsVisible(introRef);

    const conclusionRef = useRef();
    const conclusionVisible = useIsVisible(conclusionRef);

    return(
        <Container id="content"
                   maxWidth='lg'
                   sx={{
                       color: "white"
                   }}>
            <Grow in={introVisible} timeout={500}>
            <div id="intro" ref={introRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Synopsis</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        For this assignment, our group created an interactive design for an emerging start up.
                        We choose to create an interface design for the startup Food Court. Food Court is an
                        African start up who is essentially creating a version of SnackPass for Africa in order
                        to make quality food more accessible throughout the country. There are many unique problems
                        in the African on-demand/food delivery market and Food Court is working to create a seamless
                        solution. Click the image below to check them out!
                    </Typography>
            </div>
            </Grow>
            <Grow in={conclusionVisible} timeout={500}>
                <div ref={conclusionRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Conclusion</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        Blah Blah Blah
                    </Typography>
                    <div className="projectNavButtons">
                        <Button onClick={() => {scroll.scrollToTop()}} size="large" sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>Scroll To Top</Button>
                        <NavLink to={"/1300FinalPortfolio"} style={{textDecoration: 'none'}}>
                            <Button size="large" sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>Return Home</Button>
                        </NavLink>
                    </div>
                </div>
            </Grow>
        </Container>
    )
}
export default ContentArea;