import {Button, Container, Grow, Typography} from "@mui/material";
import './ContentArea.css'
import Lightbox from "../../Lightbox";
import {useRef, useState} from "react";
import {useIsVisible} from "../../MainPage/MainPage";
import {NavLink} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll"

function ContentArea () {

    const [mainPageLB, setMainPageLB] = useState(false);

    const introRef = useRef();
    const introVisible = useIsVisible(introRef);
    const featuresRef = useRef();
    const featuresVisible = useIsVisible(featuresRef);
    const worksRef = useRef();
    const worksVisible = useIsVisible(worksRef);
    const organizationRef = useRef();
    const organizationVisible = useIsVisible(organizationRef);
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
                            sx={{p:2}}
                        >
                            <b>Synopsis</b>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            The purpose of this project was to gain a better understanding of how to create a responsive, constantly
                            updating site based in React. It contains an aggregator, as well as a filtering and sorting system of sorts.
                            Creating a site that is able to update based on state changes can be extremely helpful, it means that constant
                            pings to a backend for computation aren't necessary for simple tasks, and can be done in the frontend. Almost every
                            modern site uses some form of states in order to keep interactions quick and efficient, which only increases the
                            importance of learning how to do it myself.
                        </Typography>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{p:2}}
                        >
                            <b>The Site: The Game Zone</b>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            For this project, I created the game zone.
                            It contains three main sections: The filter and sort section, the list section, and the cart section.
                            This application is designed for users to view games, and purchase them.
                            The user is able to view a summary of the store in the center screen.
                            The user is able to add items to their cart, and estimate the cost of purchasing games at a given price.
                        </Typography>
                    <div style={{textAlign: "center"}}>
                        <Button onClick={() => {window.open("https://crazykoala555.github.io/development/")}} size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1 }}>Visit the Page</Button>
                        <Button onClick={() => {window.open("https://github.com/crazykoala555/development")}} size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1}}>Visit Github Repository</Button>
                    </div>
                    <div style={{textAlign: "center"}} onClick={() => setMainPageLB(true)}>
                        <img id="mainPageImg" src={require('../Images/mainpage.png')}
                             alt="The Game Zone Screenshot"/>
                    </div>
                    <Lightbox isOpen={mainPageLB} setOpen={setMainPageLB} srcImage={require('../Images/mainpage.png')}/>
                </div>
            </Grow>

            <Grow in={featuresVisible} timeout={500}>
                <div ref={featuresRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{p:2}}
                    >
                        <b>Features/Functionality:</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        This webapp has the following functionality:
                        <ul>
                            <li>A center store area, containing all games which can be added to the cart.</li>
                            <li>A filter area, which contains parameters that affect how items in the store are displayed.</li>
                            <ul>
                                <li>Users are able to filter by genre of game and platforms supported.</li>
                                <li>Users are able to sort games by price or alphabetically.</li>
                                <li>Users are able to reset all filters quickly through buttons.</li>
                            </ul>
                            <li>A cart area, where you can add and remove items to see how much items will cost for purchase.</li>
                        </ul>
                    </Typography>
                </div>
            </Grow>

            <Grow in={organizationVisible} timeout={500}>
                <div ref={organizationRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{p:2}}
                    >
                        <b>Organization:</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        My project is organized in the following way:
                        <ul>
                            <li>App.js</li>
                            <ul><li>Is the main container, organizes all of the 3 sections, holds their respective states.</li></ul>
                            <li>FilterArea.js</li>
                            <ul><li>Contains all of the buttons and dropdowns related to filtering and sorting of shop.
                                These buttons change states, and when detected by the cart, trigger a filtering and sorting operation housed in ItemArea.js.</li></ul>
                            <li>CartArea.js</li>
                            <ul><li>Contains all of the items added to the cart. Uses Cart Items, another component with the purpose of containing the item in the
                                cart and its quantity.</li></ul>
                            <li>ItemArea.js</li>
                            <ul><li>Contains all of the store items. Uses Store Items, which use Platform Items. Store Items are cards that display information, including
                                Platform Items, which display the platforms supported by a given game.</li></ul>
                        </ul>
                    </Typography>
                </div>
            </Grow>
            <Grow in={worksVisible} timeout={500}>
                <div ref={worksRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{p:2}}
                    >
                        <b>How it works:</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        I'm able to accomplish functionality through React's use of states, props, and more.
                        The user's cart, filter selections, sorting selection, and store visibility all have their own
                        stored state. Whenever the user presses a button in any of the sections, the respective state is changed.
                        For example, when a filter box is unchecked, the state of checked boxes is changed, which triggers a function
                        to filter out items in the store, change the store's state, and update it visually in the application.
                        Every user action fires a function which leads to a state change.
                    </Typography>
                </div>
            </Grow>

            <Grow in={conclusionVisible} timeout={500}>
                <div ref={conclusionRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{p:2}}
                    >
                        <b>Conclusion</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                       Using React, I was able to explore the use of states and understand how exactly to create a webapp
                        that, using frontend computation, would perform a set of tasks adequately. With this knowledge, I was able
                        to capture user input, cause state updates, and update information accordingly in other sections of the site.
                        Linking each section through a series of props and states allowed me to keep everything synchronized and come to
                        a better understanding of the concepts of a whole.
                    </Typography>
                    <div className="projectNavButtons">
                        <Button onClick={() => {scroll.scrollToTop()}} size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1}}>Scroll To Top</Button>
                        <NavLink to={"/1300FinalPortfolio"} style={{textDecoration: 'none'}}>
                            <Button size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1}}>Return Home</Button>
                        </NavLink>
                    </div>
                </div>
            </Grow>
        </Container>
    )
}
export default ContentArea;