import {Button, Container, Grow, Typography} from "@mui/material";
import './ContentArea.css'
import Lightbox from "../../Lightbox";
import {useRef, useState} from "react";
import {useIsVisible} from "../../MainPage/MainPage";
import {NavLink} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll"

function ContentArea () {

    const [sketchLB, setSketchLB] = useState(false);
    const [EM1, setEM1] = useState(false);
    const [EM2, setEM2] = useState(false);

    const [SB1, setSB1] = useState(false);
    const [SB2, setSB2] = useState(false);
    const [SB3, setSB3] = useState(false);
    const [SB4, setSB4] = useState(false);
    const [SB5, setSB5] = useState(false);
    const [SB6, setSB6] = useState(false);
    const [SB7, setSB7] = useState(false);
    const [SB8, setSB8] = useState(false);

    const introRef = useRef();
    const introVisible = useIsVisible(introRef);
    const indObsRef = useRef();
    const indObsRefVis = useIsVisible(indObsRef);
    const indObsRef2 = useRef();
    const indObsRef2Vis = useIsVisible(indObsRef2);
    const EMRef = useRef();
    const EMVisible = useIsVisible(EMRef);
    const SBRef = useRef();
    const SBVisible = useIsVisible(SBRef);
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
                        This project takes a view at a public-facing interface. Through observation of the interface use by other users,
                        as well as interviews, I was able to generate a set of personas and a storyboard for the given interface.
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{p:2}}
                    >
                        <b>Interface: Stove Top and Oven Controls</b>
                    </Typography>
                    <div style={{textAlign: "center"}} onClick={() => setSketchLB(true)}>
                        <img id="interfaceIllustration" src={require('../Images/interface-sketch.png')}
                             alt="Interface used: Stove Top and Oven Controls"/>
                    </div>
                    <Lightbox isOpen={sketchLB} setOpen={setSketchLB} srcImage={require('../Images/interface-sketch.png')}/>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        My chosen interface is the control system for an oven and stove top appliance. There are three main
                        components to the interface illustrated above. The four knobs surround the center, for controlling
                        the stove top burners. The center console relates to controlling the oven, as well as time-related
                        functions. The center digitizer displays time, as well as any time and oven-related information,
                        like temperature and timer. Each button, if applicable, is grouped with other buttons based on function.
                        The interface in general tries to provide a set of controls to control the main functions of the appliance,
                        that being cooking in the oven or using the stovetops.
                    </Typography>
            </div>
            </Grow>

            <div id="researchObservationsContainer">
                <Grow in={indObsRefVis} timeout={500}>
                    <div className="indObservation" ref={indObsRef}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{p:2}}
                        >
                            <b>Research Observations and Interview Summaries</b>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            During the research process, I was able to observe and interview three
                            different users which used the interface. Between each user there were definitely similarities
                            and differences in processes as each one used the kitchen appliance. Here are my observations:
                        </Typography>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{p:2}}
                        >
                            <b>General Observations</b>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            <b>Common patterns for oven use:</b>
                            <ul>
                                <li>Press "On Button"</li>
                                <li>Select type of use (Broil/Bake)</li>
                                <li>Once temperature appears on digital display, use +/- buttons to control desired
                                    temperature.
                                </li>
                                <li>If timer is needed:
                                    <ul>
                                        <li>Press "time" button, set timer using up/down buttons.</li>
                                    </ul>
                                </li>
                                <li>Cook!</li>
                                <li>Press off button when done.</li>
                            </ul>
                            <b>Common patterns for stove top use:</b>
                            <ul>
                                <li>Determine which stove top to use first, find respective knob.</li>
                                <li>Push in corresponding knob, twist to "LO" direction to start.</li>
                                <li>Ensure "Burner On" light is lit.</li>
                                <li>Cook!</li>
                                <li>Turn knob to off position when done, ensure "Burner On" light turns off.</li>
                            </ul>
                            <p>Most users seemed fairly confident when using the stove top interface, but when
                                tasked with operating the oven, showed a bit of confusion to which button corresponded to what,
                                and
                                in what exact order things needed to be pressed. One common thing is that each user only ever
                                used one
                                of the functions of the appliance at a time, either the oven or the stove top, not both.
                                Notably, user 1, when using the
                                stove, first tried to turn the knob to "HI" first, compared to user 3, who turned the knob to
                                "LO" first. Users 2
                                and 3, when setting the timer for cook time, both overshot their expected time and had to use
                                the "-" button
                                in order to return to their desired cook time. What I found interesting was that those who used
                                the stove top
                                burners didn't get confused about needing to push knob in, there are no indicators saying that
                                is needed. Most
                                likely known from previous experience.
                            </p>
                            <p>During interviews, I had four main questions for each user:</p>
                            <ol id="questionList">
                                <li>What item first draws your attention when looking at the system controls?</li>
                                <li>What would you do to turn on the front left stove-top burner?</li>
                                <li>What would you do to turn on the oven?</li>
                                <li>Is there anything that you find frustrating or nice about this interface?</li>
                            </ol>
                            <p>Here is a compiled list of answers to these questions:</p>
                        </Typography>
                    </div>
                </Grow>
                <Grow in={indObsRef2Vis} timeout={500}>
                    <div id="individualObsContainer" ref={indObsRef2}>
                        <div className="indObservation">
                            <Typography
                                variant="h4"
                                component="div"
                                sx={{p:2}}
                            >
                                <b>Interview Question Observations:</b>
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{p:2}}
                            >
                                <ul>
                                    <li>
                                        Users note the simplistic nature of the stove controls, but also acknowledge the more complicated
                                        stove controls. Users note uncertainty about some oven settings and timer controls.
                                    </li>
                                    <li>
                                        Users note the first thing noticed is generally the digital display, which lights up and draws the
                                        most attention, as well as providing useful information.
                                    </li>
                                    <li>
                                        Some users note how the interface is in general a bit slow, and that if in a rush, can overshoot
                                        input of temperatures/times, needing to go back and fix it.
                                    </li>
                                    <li>
                                        Users note helpfulness of burner diagrams and settings indicator lights as tools to assist use of
                                        appliance.
                                    </li>
                                    <li>
                                        Interestingly, one user even noted the oven controls to be too complicated, and instead using the
                                        simpler, nearby toaster oven instead.
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </div>
                </Grow>
            </div>
            <Grow in={EMVisible} timeout={500}>
            <div id="empathyMapSection" ref={EMRef}>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{p:2}}
                >
                    <b>Generating Empathy Maps from Observations and Interviews</b>
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{p:2}}
                >
                    After observations and interviews with a set of users, I generated a set of empathy maps for two varying types of personas.
                    Each persona provides a different set of attributes based on the types of users that may use this interface. I noticed two types of
                    people who may use this appliance: those who are cooking just to eat, and would rather be doing something else, and those
                    who enjoy the process of cooking more, and will spend more time doing it. See the empathy maps below:
                </Typography>

                <div id="mapContainer">
                    <div className="individualEmpathyMap">

                        <div style={{textAlign: "center"}} onClick={() => setEM1(true)}>
                            <img className="mapImage" src={require("../Images/Empathy-Map-1.png")}
                                 alt="Empathy map for those who are busy."/>
                        </div>
                        <Lightbox isOpen={EM1} setOpen={setEM1} srcImage={require("../Images/Empathy-Map-1.png")}/>
                        <div className="mapCaption">
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{p:2}}
                            >
                                    &emsp; User 1 is a person who is not super interested in the process of cooking, and kind of just wants the
                                    food to be done as quickly as possible. <br/>
                                    &emsp; By trying to speed through everything so that they are able to go onto the next task, user 1 pays a bit
                                    less attention to instructions, and prioritizes speed over everything else. They regularly overshoot numbers
                                    when trying to dial in settings, and have to go back to fix it. They are fairly impatient and don't want to
                                    spend time looking up how to use the appliance, sometimes making mistakes and pressing the wrong buttons, getting
                                    frustrated with the appliance. <br/>
                                    &emsp; This persona is very similar to those who don't really enjoy cooking, and simply do it because they need sustenance.
                                    They, therefore want to cook for the shortest time possible, taking shortcuts, making mistakes, and being impatient.
                                    In observations, you can see how this user appears, noting how some stuff is too complex, and would rather use the
                                    simpler toaster oven instead. There are also notes of how users typically thing the interface is too slow when inputting information.
                                </Typography>
                        </div>
                        <hr/>
                    </div>
                    <div className="individualEmpathyMap">
                        <div style={{textAlign: "center"}} onClick={() => setEM2(true)}>
                            <img className="mapImage" src={require("../Images/Empathy-Map-2.png")}
                                 alt="Empathy map for those who are busy."/>
                        </div>
                        <Lightbox isOpen={EM2} setOpen={setEM2} srcImage={require("../Images/Empathy-Map-2.png")}/>
                        <div className="mapCaption">
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{p:2}}
                            >
                                    &emsp; User 2 is a person who enjoys the process of cooking, and notably, takes their time when operating
                                    the appliance interface. <br/>
                                    &emsp; By taking their time with everything and enjoying the process of cooking, user 2 pays more attention
                                    to the appliance controls, and refers to their phone if they get confused. Ah, the wonders of the internet!
                                    While the controls seem a bit confusing when operating the oven, and they don't really understand how the other
                                    timer functions work, they stick with what they know and remain calm. <br/>
                                    &emsp; This persona is very similar to those who do enjoy cooking, as those who enjoy are more likely to take their time
                                    and enjoy the process, remaining calm and extremely patient while their food cooks. By remaining calm, they're able
                                    to take their time working with the inputs of the system, and even if confusing, turning to the internet to correctly
                                    using the appliance.
                                </Typography>

                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            </Grow>
            <Grow in={SBVisible} timeout={500}>
            <div id="storyboardSection" ref={SBRef}>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{p:2}}
                >
                    <b>Generating a Storyboard from a Persona</b>
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{p:2}}
                >
                    Using persona 1, the "Busy Bee", I generated a general interaction that the user might have with the interface.
                    details the story of a person who is under a time crunch, and wants to cook something as quickly as possible. It details
                    how he messes around with the interface in a haphazard manner in the name of speed, all to make a bowl of overcooked ramen.
                    </Typography>
                <Container sx={{
                    display: {xs: "block", sm: "flex"},
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    alignItems: "stretch",
                }}>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB1(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/1.png")}
                                 alt="First storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB1} setOpen={setSB1} srcImage={require("../Images/storyboard/1.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Our protagonist, Jeff, arrives home after a long day, needing simply some nutrition so
                            he can go to soccer practice at 4:10p.m.
                        </Typography>
                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB2(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/2.png")}
                                 alt="Second storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB2} setOpen={setSB2} srcImage={require("../Images/storyboard/2.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Jeff forages quickly through the cabinet in the kitchen to find ramen, something extremely
                            easy and quick to cook, which he takes out to eat.
                        </Typography>
                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB3(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/3_2.png")}
                                 alt="Third storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB3} setOpen={setSB3} srcImage={require("../Images/storyboard/3_2.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Jeff prepares the ramen, noting the time he has remaining before he has to leave for
                            soccer practice.
                        </Typography>
                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB4(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/4.png")}
                                 alt="Fourth storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB4} setOpen={setSB4} srcImage={require("../Images/storyboard/4.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Wanting to save as much time as possible, Jeff turns on the stove to maximum, pressing in
                            the corresponding knob for the burner he wants to use, and turns it anticlockwise to the maximum temperature.
                            He checks his phone in the meantime to check the cooking instructions.
                        </Typography>

                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB5(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/5.png")}
                                 alt="Fifth storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB5} setOpen={setSB5} srcImage={require("../Images/storyboard/5.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Once the water begins boiling, Jeff inserts his ramen and seasoning in. In a hope to speed up
                            the cooking process, he keeps the water boiling at maximum temperature.
                        </Typography>
                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB6(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/6.png")}
                                 alt="Sixth storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB6} setOpen={setSB6} srcImage={require("../Images/storyboard/6.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Jeff hurriedly inputs the time into the timer, overshooting the time
                            by a little, and having to backtrack 2 minutes. Unsure whether or not the timer is working, he decides to
                            press the time button again to see if it'll confirm the number. Luckily, it does.
                        </Typography>

                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB7(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/7.png")}
                                 alt="Seventh storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB7} setOpen={setSB7} srcImage={require("../Images/storyboard/7.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Once the timer runs out, the appliance beeps, signifying the finish of the ramen. In a speedy manner, Jeff
                            turns off the stove. Once the burner light is off, he removes the pot from the stove, noting how he still
                            has time left to eat on the digital display, a helpful feature.
                        </Typography>
                    </div>
                    <div className="individualStoryPanel">
                        <div style={{textAlign: "center"}} onClick={() => setSB8(true)}>
                            <img className="storyPanelImg" src={require("../Images/storyboard/8.png")}
                                 alt="Eighth storyboard panel"/>
                        </div>
                        <Lightbox isOpen={SB8} setOpen={setSB8} srcImage={require("../Images/storyboard/8.png")}/>
                        <Typography
                            variant="body1"
                            component="div"
                            sx={{p:2}}
                        >
                            Having kept the water boiling, the noodles are quite a bit overcooked and very hot,
                            but Jeff enjoys his noodles anyway. Use of kitchen appliance accomplished!
                        </Typography>
                    </div>
                </Container>
            </div>
            </Grow>
            <Grow in={conclusionVisible} timeout={500}>
                <div className="Conclusion" ref={conclusionRef}>
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
                        All done! From this project, I was able to select an interface, observe users, and generate useful tools
                        which represent different types of users. These tools can help me come to a better understanding overall
                        of how the interface is used, and how it can be improved to better cater to the users observed during the
                        project. Understanding your users is crucial to understanding how you can better tailor a product to a user's
                        needs. These empathy maps and storyboards help me understand truly what the user is thinking, and what I
                        can do to make the frustrations and grievances disappear.
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