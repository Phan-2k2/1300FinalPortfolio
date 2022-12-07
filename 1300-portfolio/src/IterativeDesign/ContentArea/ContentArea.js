import {Button, Container, Grow, Typography} from "@mui/material";
import './ContentArea.css'
import {useRef, useState} from "react";
import {useIsVisible} from "../../MainPage/MainPage";
import {animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";
import Lightbox from "../../Lightbox";

function ContentArea () {

    const introRef = useRef();
    const introVisible = useIsVisible(introRef);
    const p1Ref = useRef();
    const p1Visible = useIsVisible(p1Ref);
    const p1_2Ref = useRef();
    const p1_2Visible = useIsVisible(p1_2Ref);
    const p1imageRef = useRef();
    const p1imageVisible = useIsVisible(p1imageRef);
    const p1_2imageRef = useRef();
    const p1_2imageVisible = useIsVisible(p1_2imageRef);
    const hifiRef = useRef();
    const hifiVisible = useIsVisible(hifiRef);
    const hifi2Ref = useRef();
    const hifi2Visible = useIsVisible(hifi2Ref);
    const hifi3Ref = useRef();
    const hifi3Visible = useIsVisible(hifi3Ref);
    const hifi4Ref = useRef();
    const hifi4Visible = useIsVisible(hifi4Ref);
    const testingRef = useRef();
    const testingVisible = useIsVisible(testingRef);
    const videoRef = useRef();
    const videosVisible = useIsVisible(videoRef);
    const analysisRef = useRef();
    const analysisVisible = useIsVisible(analysisRef);
    const conclusionRef = useRef();
    const conclusionVisible = useIsVisible(conclusionRef);

    const [sketch1, setSketch1] = useState(false);
    const [sketch2, setSketch2] = useState(false);
    const [sketch3, setSketch3] = useState(false);
    const [sketch4, setSketch4] = useState(false);
    const [lofi, setLofi] = useState(false);
    const [hifi, setHifi] = useState(false);
    const [updatedhifi, setUpdatedHifi] = useState(false);

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
                            For this assignment, I was part of a group which created an interactive design for an emerging start up.
                            We choose to create an interface design for the startup Food Court. Food Court is an
                            African start up who is essentially creating a version of SnackPass for Africa in order
                            to make quality food more accessible throughout the country. There are many unique problems
                            in the African on-demand/food delivery market and Food Court is working to create a seamless
                            solution. More information can be found <a href={"https://getfoodcourt.com/"} rel={"noreferrer"} target={"_blank"}>here</a>.
                        </Typography>
                </div>
            </Grow>
            <Grow in={p1Visible} timeout={500}>
                <div ref={p1Ref}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Part 1: Sketching and Wireframing</b>
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Pre-Design Thinking</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        For this interface, we have decided to create a mobile app. Because of the on-demand nature of the app,
                        we feel that a mobile app will provide the most flexibility and convenience to the users.
                        The target audience for this app will be the adult population who have a mobile device; specifically targeting young adults.
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Sketching</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        Each member of my group and I each created our own
                        sketches with ideas on how we would design the Food Court Application.
                    </Typography>
                </div>
            </Grow>
            <Grow in={p1imageVisible} timeout={500}>
                <div ref={p1imageRef}>
                    <div style={{textAlign: "center"}} onClick={() => setSketch1(true)}>
                        <img className="sketches" src={require('../Images/sketches/sketch1.jpg')}
                             alt="Sketch 1"/>
                    </div>
                    <Lightbox isOpen={sketch1} setOpen={setSketch1} srcImage={require('../Images/sketches/sketch1.jpg')}/>
                    <div style={{textAlign: "center"}} onClick={() => setSketch2(true)}>
                        <img className="sketches" src={require('../Images/sketches/sketch2.jpg')}
                             alt="Sketch 2"/>
                    </div>
                </div>
            </Grow>
            <Grow in={p1_2imageVisible} timeout={500}>
                <div ref={p1_2imageRef}>
                    <Lightbox isOpen={sketch2} setOpen={setSketch2} srcImage={require('../Images/sketches/sketch2.jpg')}/>
                    <div style={{textAlign: "center"}} onClick={() => setSketch3(true)}>
                        <img className="sketches" src={require('../Images/sketches/sketch3.png')}
                             alt="Sketch 3"/>
                    </div>
                    <Lightbox isOpen={sketch3} setOpen={setSketch3} srcImage={require('../Images/sketches/sketch3.png')}/>
                    <div style={{textAlign: "center"}} onClick={() => setSketch4(true)}>
                        <img className="sketches" src={require('../Images/sketches/sketch4.PNG')}
                             alt="Sketch 4"/>
                    </div>
                    <Lightbox isOpen={sketch4} setOpen={setSketch4} srcImage={require('../Images/sketches/sketch4.PNG')}/>
                </div>
            </Grow>
            <Grow in={p1_2Visible} timeout={500}>
                <div ref={p1_2Ref}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Combining Ideas into a Wireframe</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        After sketching, we came together as a group to discuss which features and pages
                        were most important to have in out final wireframe. Most of our sketches had similar
                        ideas, all including some kind of search page, a home page and a restaurant page.
                        Our final high fidelity wireframe had 5 total pages; a login page, a home page, a search page, a restaurant page and a checkout page. Below is an image of our final sketches.
                    </Typography>
                    <div style={{textAlign: "center"}} onClick={() => setLofi(true)}>
                        <img className="lofiFC" src={require('../Images/low_fidelity/lofiFC.jpg')}
                             alt="Consolidated Wireframe"/>
                    </div>
                    <Lightbox isOpen={lofi} setOpen={setLofi} srcImage={require('../Images/low_fidelity/lofiFC.jpg')}/>
                </div>
            </Grow>

            <Grow in={hifiVisible} timeout={500}>
                <div ref={hifiRef}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Part 2: Mockups</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        After consolidating most of our features into one cohesive wireframe, we took to Figma to create a
                        high fidelity prototype. We used our sketches to make a real, interactive design.
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Interactive High Fidelity Mockup</b>
                    </Typography>
                    <div style={{textAlign: "center"}} onClick={() => setHifi(true)}>
                        <img className="hifiFC" src={require('../Images/high_fidelity/hifiFC.jpg')}
                             alt="Hifi Prototype"/>
                    </div>
                    <Lightbox isOpen={hifi} setOpen={setHifi} srcImage={require('../Images/high_fidelity/hifiFC.jpg')}/>
                </div>
            </Grow>
            <Grow in={hifi2Visible} timeout={500}>
                <div ref={hifi2Ref} id={"hifi2"}>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        The user flow of our interface is shown in the video below.
                    </Typography>
                    <video width="300" height="500" controls>
                        <source src={require('../Images/high_fidelity/high_fidelity_walkthrough.mov')}/>
                                Your browser does not support the video tag.
                    </video>
                </div>
            </Grow>
            <Grow in={hifi3Visible} timeout={500}>
                <div ref={hifi3Ref}>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Mockup Feedback</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        We presented our mockup to a group of potential users to help us gain a better understanding and listen
                        to some helpful user feedback. Here's what we learned:
                        <ul>
                            <li>
                                SEARCH BAR on Search page: there was no easy way to navigate out of the search screen
                                without clicking on a restaurant first. This caused some confusion and frustration for users.
                            </li>
                            <li>
                                HOURS on Restaurant page: on the restaurant page, someone noted that the hours section
                                was not as clear as they wanted it to be. They suggested to add an "open" & "closed" banner
                                to more clearly indicate to the user if the restaurant is open or closed.
                            </li>
                            <li>
                                HOURS on Search page: Several users were confused by the "hours" placeholder on the search
                                page in out design. They were expecting to see the actual store hours or be able to click
                                on hours to have them show up.
                            </li>
                            <li>
                                REVIEWS on Restaurant page: we have review ratings for each restaurant in our designs,
                                but several users mentioned that they would have liked to see the number of reviews for
                                each restaurant to help them determine the accuracy of the rating.
                            </li>
                            <li>
                                NOTES section on Cart page: overall we got great reviews on the cart; one user mentioned
                                that the contrast of the "notes" text could be improved to increase readability.
                            </li>
                            <li>
                                DELETE on Cart page: there is a red delete button in the cart that allows users to take
                                an item out of the cart. Some users felt that the red button with "delete" text wasn't
                                clear and that a trash can icon would be more clear to the user.
                            </li>
                        </ul>
                    </Typography>
                </div>
            </Grow>
            <Grow in={hifi4Visible} timeout={500}>
                <div ref={hifi4Ref}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{pt:2}}
                        >
                            <b>Final Design Iteration</b>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            After the critique session, we made a few small changes to our design. The changes include
                            changing the delete button in the cart to a trash icon, setting the notes text to black,
                            adding a navigation footer to the search page, replacing the hours placeholder text with an
                            open/closed indicator and adding the number of reviews next to the star rating on the
                            restaurant page. These changes were small, but will make a big difference in terms of usability.
                        </Typography>
                    <div style={{textAlign: "center"}} onClick={() => setUpdatedHifi(true)}>
                        <img className="updatedhifiFC" src={require('../Images/updated_high_fidelity/updatedHifiFC.jpg')}
                             alt="Updated Hi fi prototype"/>
                    </div>
                    <Lightbox isOpen={updatedhifi} setOpen={setUpdatedHifi} srcImage={require('../Images/updated_high_fidelity/updatedHifiFC.jpg')}/>
                </div>
            </Grow>
            <Grow in={testingVisible} timeout={500}>
                <div ref={testingRef}>
                    <Typography
                        variant="h3"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Part 3: User Testing</b>
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>The Premise:</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        In order to test the flow of the app, we decided to have each user order chicken tacos from
                        Deddeh's Kitchen. This way, the users are mimicking a possible scenario that occurs when using
                        the app on a regular basis. When users first open the app, they will encounter the login screen.
                        Once they login, they'll be led to the home screen where they can navigate to the Deddeh's Kitchen page.
                        From here, they'll be able to order the chicken tacos and proceed to the checkout.
                    </Typography>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>User Testing Recordings:</b>
                    </Typography>
                </div>
            </Grow>
            <Grow in={videosVisible} timeout={500}>
                <div ref={videoRef} id="testingVideos">

                    <video width="300" height="500" controls>
                        <source src={require('../Images/user_testing/user_testing_1.mp4')}/>
                        Your browser does not support the video tag.
                    </video>
                    <video width="300" height="500" controls>
                        <source src={require('../Images/user_testing/user_testing_2.mp4')}/>
                        Your browser does not support the video tag.
                    </video>
                    <video width="300" height="500" controls>
                        <source src={require('../Images/user_testing/user_testing_3.mp4')}/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Grow>
            <Grow in={analysisVisible} timeout={500}>
                <div ref={analysisRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Analysis Of Results</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        Users were tasked with navigating through the application, finding a specific restaurant,
                        adding food to the cart, and checking out. All users were successfully able to access Deddeh’s
                        kitchen from the main screen, with relative ease and understanding. One user notes the logical
                        layout of the application. It was surprising that some users found difficulty finding a way to
                        checkout (need to open cart). Users otherwise had little to no issues completing the tasks.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Main Summary</b>
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Other Notes</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        On the main screen, users pressed the open indicator to access the next page. The initial
                        purpose of the 'open' box was to indicate whether the restaurant was currently open or closed.
                        While the box is still functionally doing its job, this was not its intended purpose.
                        One user struggled to find out what to do after the item was in the cart.
                        Another user noted the confusion surrounding the navigation bar. They mentioned that putting
                        the navigation bar at the top of the page rather than the bottom would be more intuitive and
                        recommended that we use icons rather then the word for each navigation button.
                        Another user noted the that having a few highlighted reviews on the details page rather than
                        having to open another window to read all the reviews would be helpful.
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Potential Interface Changes</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        <ul>
                            <li>
                                Add a label to indicate that the open/close indicator is a status indicator, not a button.
                            </li>
                            <li>
                                Add an animation that shows that if the user wants to checkout, they press the cart button in the bottom right.
                            </li>
                            <li>
                                Change the navigation bar to icons, and make it a fixed position over everything. It can
                                remain at the button, but keeping it fixed helps visibility. We believe that moving it to
                                the top could clutter content.
                            </li>
                            <li>
                                Add some “top” reviews to the restaurant details page, to help users decide on restaurants.
                            </li>
                        </ul>
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
                        Throughout this project, we went through multiple iterations of our prototypes. We learned through user
                        feedback what was most effective and worked best when it came to our system, and improved upon them. We learned the value
                        of user feedback, how to most effectively get it, and how we can improve.
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