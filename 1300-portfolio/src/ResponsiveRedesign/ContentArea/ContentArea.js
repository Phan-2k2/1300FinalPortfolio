import {Button, Container, Grow, Typography} from "@mui/material";
import './ContentArea.css'
import Lightbox from "../../Lightbox";
import {useRef, useState} from "react";
import {useIsVisible} from "../../MainPage/MainPage";
import {Slide} from "react-slideshow-image";
import {animateScroll as scroll} from "react-scroll";
import {NavLink} from "react-router-dom";

function ContentArea () {

    const [sketchLB, setSketchLB] = useState(false);
    const [DlofiLB, setDlofiLB] = useState(false);
    const [PlofiLB, setPlofiLB] = useState(false);
    const [TlofiLB, setTlofiLB] = useState(false);
    const [guideLB, setGuideLB] = useState(false);

    // const [PHifiLB, setPHifiLB] = useState(false);
    // const [THifiLB, setTHifiLB] = useState(false);
    const [redesign, setRedesign] = useState(false);

    const introRef = useRef();
    const introVisible = useIsVisible(introRef);
    const analysisRef = useRef();
    const analysisVisible = useIsVisible(analysisRef);
    const mockupIntroRef = useRef();
    const mockupIntroRefVisible = useIsVisible(mockupIntroRef);
    const lofiGalleryRef = useRef();
    const lofiGalleryVisible = useIsVisible(lofiGalleryRef);
    const guideRef = useRef();
    const guideVisible = useIsVisible(guideRef);
    const hifiRef = useRef();
    const hifiVisible = useIsVisible(hifiRef);
    const hifi2Ref = useRef();
    const hifi2Visible = useIsVisible(hifi2Ref);
    const finalRef = useRef();
    const finalVisible = useIsVisible(finalRef);
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
                        <p>In this project, I:</p>
                        <ul>
                            <li>Study and Analyze an existing, but outdated website.</li>
                            <li>Generate a low-fidelity and high-fidelity mockups of an improved and more responsive
                                version of the website.
                            </li>
                            <li>Using HTML/CSS/JS, bring the mockups to life!</li>
                            <li>Test the updated website across multiple device types to ensure responsiveness, ensuring
                                key improvements compared to the old website.
                            </li>
                        </ul>
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{}}
                    >
                        <b>Website to be redesigned: Brown University Taekwondo Team</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        Last updated in 2012, this website serves as a place for those interested to find more information about Brown University Taekwondo.
                        <div style={{textAlign: "center"}}>
                            <Button onClick={() => {window.open("https://students.brown.edu/Tae_Kwon_Do/")}} size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1}}>Visit the Page</Button>
                        </div>
                    </Typography>
                <div style={{textAlign: "center"}} onClick={() => setSketchLB(true)}>
                    <img id="oldSiteImage" src={require('../Images/btkd-capture.jpeg')}
                         alt="Old and Outdated Website"/>
                </div>
                <Lightbox isOpen={sketchLB} setOpen={setSketchLB} srcImage={require('../Images/btkd-capture.jpeg')}/>
            </div>
            </Grow>
            <Grow in={analysisVisible} timeout={500}>
                <div id="analysisSection" ref={analysisRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{}}
                    >
                        <b>Usability Problems</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        <p>
                            There were a few issues I ran into while exploring this website, prompting a redesign. They
                            were:
                        </p>
                        <ul>
                            <li>The website does not scale well on wider screens, there's a lot of surrounding
                                whitespace.
                            </li>
                            <li>On mobile devices, buttons are quite hard to reach and can be a bit small sometimes
                                (notably navigation bar).
                            </li>
                            <li>The "About Us" section, something that I'd consider fairly important, is put off to the
                                side, out of the view of the user.
                            </li>
                            <li>The "TKD" logo in the upper right, intuitively should take you back to the homepage, but
                                doesn't.
                            </li>
                            <li>Certain logos and clickable portions look blurry on higher-resolution screens.</li>
                            <li>The announcements section of the page gets cut off arbitrarily at the bottom of the
                                page, different announcements are not well defined.
                            </li>
                            <li>All of the headers aren't actually text, they're actually images, so on larger screens,
                                the look blurry.
                            </li>
                        </ul>
                    </Typography>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{}}
                    >
                        <b>Accessibility Analysis</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        <p >
                            When throwing the website through WebAIM WAVE to detect possible accessibility problems,
                            here was a general summary of the site:
                        </p>
                        <ul>
                            <li>Many images missing "alt" text.</li>
                            <li>Multiple empty links for site.</li>
                            <li>Navbar contains low-contrast content.</li>
                            <li>Images with titles but no text.</li>
                            <li>Existence of videos and images.</li>
                        </ul>
                        <p >
                            There a number of issues detected when running the WAVE analysis, most of which make sense.
                            The standout ones are that a number of images are missing significant amounts of “alt” text,
                            which allows screen readers to be more effective at their job. The lack of alt-text on the
                            images on the site makes it difficult for those more visually-impaired, which is
                            understandable
                            why that would be a problem. WAVE also picked up on a bunch of empty links, which I find
                            useful,
                            as those are things that could definitely be cleaned up. One thing that WAVE picked up on
                            was the
                            lack of contrast in the navigation bar. Personally, I don’t believe that the contrast is
                            poor at all.
                        </p>
                    </Typography>
                </div>
            </Grow>
                <div id="mockupSection">
                    <Grow in={mockupIntroRefVisible} timeout={500}>
                        <div ref={mockupIntroRef} id="mockupIntro">
                            <Typography
                            variant="h2"
                            component="div"
                            sx={{}}
                            >
                                <b>Visual Redesign</b>
                            </Typography>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{}}
                            >
                                <b>Low-Fidelity Wireframe</b>
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{p:2}}
                            >
                                <p >
                                    Beginning with a low-fidelity wireframe, I turn to Balsamiq. I generated wireframes for 3
                                    different types of devices,
                                    namely desktop browser use, phone use, and vertical tablet use. Since this page is
                                    scrollable, I the right wireframes
                                    for each respective devices is a "scrolled down" version. Note: mobile versions will show
                                    one announcement, but will normally
                                    show 3 (1 used for illustrative purposes).
                                    <br/><br/>
                                    All wireframes more or less share the same improvements. The greatest difference exists
                                    between the scaling
                                    between devices, the content is improved across the board, as the same assets are used.
                                </p>
                            </Typography>
                        </div>
                    </Grow>

                    <Grow in={lofiGalleryVisible} timeout={1000}>
                        <div id="lofiGalleries" ref={lofiGalleryRef}>
                            <div style={{textAlign: "center"}} onClick={() => setPlofiLB(true)}>
                                <img className="lofiImages" src={require('../Images/lofiWireframes/Phone-annotated.png')}
                                     alt="Phone wireframe."/>
                            </div>
                            <Lightbox isOpen={PlofiLB} setOpen={setPlofiLB} srcImage={require('../Images/lofiWireframes/Phone-annotated.png')}/>
                            <div style={{textAlign: "center"}} onClick={() => setDlofiLB(true)}>
                                <img className="lofiImages" src={require('../Images/lofiWireframes/Desktop-annotated.png')}
                                     alt="Desktop wireframe."/>
                            </div>
                            <Lightbox isOpen={DlofiLB} setOpen={setDlofiLB} srcImage={require('../Images/lofiWireframes/Desktop-annotated.png')}/>
                            <div style={{textAlign: "center"}} onClick={() => setTlofiLB(true)}>
                                <img className="lofiImages" src={require('../Images/lofiWireframes/Tablet-annotated.png')}
                                     alt="Tablet Wireframe."/>
                            </div>
                            <Lightbox isOpen={TlofiLB} setOpen={setTlofiLB} srcImage={require('../Images/lofiWireframes/Tablet-annotated.png')}/>
                        </div>
                    </Grow>
                    <Grow in={guideVisible} timeout={500}>
                        <div ref={guideRef}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{pt:2}}
                            >
                                <b>Visual Design Guide</b>
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{p:2}}
                            >
                                <p >After finishing the low-fidelity wireframes in Balsamiq, I generated a style
                                    guide for the website. It contains:</p>
                                <ul>
                                    <li>Buttons, with their respective hover changes.</li>
                                    <li>A color palate, surrounding the red/neutral color aesthetic employed by the original
                                        website.
                                    </li>
                                    <li>Text sizing and fonts, using the font Sui Generis as well as a sans-serif font.</li>
                                    <li>The icons being used for the site.</li>
                                    <li>The navigation menu/systems being used for the site.</li>
                                </ul>
                                <p >It's extremely helpful for keeping a consistent style across all aspects of the site,
                                    creating a more cohesive theme.</p>
                            </Typography>
                            <div style={{textAlign: "center"}} onClick={() => setGuideLB(true)}>
                                <img id="colorStyleGuide" src={require('../Images/hifiPrototypes/styleGuide.png')}
                                     alt="Style Guide"/>
                            </div>
                            <Lightbox isOpen={guideLB} setOpen={setGuideLB} srcImage={require('../Images/hifiPrototypes/styleGuide.png')}/>

                        </div>
                    </Grow>
                    <Grow in={hifiVisible} timeout={500}>
                        <div ref={hifiRef}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{pt:2}}
                            >
                                <b>High-Fidelity Prototypes</b>
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{p:2}}
                            >
                                <p>
                                    After creating a general idea of what I wanted in the form of wireframes, and then designing
                                    a consistent style guide, I moved to Figma to create a high fidelity prototype. The prototypes
                                    all take the same elements and follow style guidelines. Elements are reshuffled around and resize
                                    as per necessary when different formats are required.
                                </p>
                            </Typography>

                            <Typography
                                variant="h5"
                                component="div"
                                sx={{pt:2}}
                            >
                                <b>Desktop Prototypes</b>
                            </Typography>
                            <Slide cssClass="slides" autoplay={false}>
                                <div className="each-slide">
                                    <img className="slideImageW" src={require("../Images/hifiPrototypes/desktop/1.png")} alt="sample" />
                                    <span></span>
                                </div>
                                <div className="each-slide">
                                    <img className="slideImageW" src={require("../Images/hifiPrototypes/desktop/2.png")} alt="sample" />
                                    <span></span>
                                </div>
                                <div className="each-slide">
                                    <img className="slideImageW" src={require("../Images/hifiPrototypes/desktop/3.png")} alt="sample" />
                                    <span></span>
                                </div>
                            </Slide>
                        </div>
                    </Grow>
                    <Grow in={hifi2Visible} timeout={500}>
                        <div ref={hifi2Ref}>
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{pt:2}}
                            >
                                <b>Phone Prototypes</b>
                            </Typography>
                            <div style={{textAlign: "center"}}>
                                <img id="phoneHifi" src={require('../Images/hifiPrototypes/phone/consolidatedPhoneHifi.jpg')}
                                     alt="Phone Hi fi prototypes"/>
                            </div>
                            {/*<Lightbox isOpen={PHifiLB} setOpen={setPHifiLB} srcImage={require('../Images/hifiPrototypes/phone/consolidatedPhoneHifi.jpg')}/>*/}
                            <Typography
                                variant="h5"
                                component="div"
                                sx={{pt:2}}
                            >
                                <b>Tablet Prototypes</b>
                            </Typography>
                            <div style={{textAlign: "center"}}>
                                <img id="tabletHifi" src={require('../Images/hifiPrototypes/tablet/consolidatedTabletHifi.jpg')}
                                     alt="Tablet Hi fi prototypes"/>
                            </div>
                            {/*<Lightbox isOpen={THifiLB} setOpen={setTHifiLB} srcImage={require('../Images/hifiPrototypes/tablet/consolidatedTabletHifi.jpg')}/>*/}
                        </div>
                    </Grow>
                </div>
            <Grow in={finalVisible} timeout={500}>
                <div ref={finalRef}>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{pt:2}}
                    >
                        <b>Doing it in code!</b>
                    </Typography>
                    <Typography
                        variant="body1"
                        component="div"
                        sx={{p:2}}
                    >
                        Once I finished mocking up everything, I went ahead and began designing the static site. Various flex boxes, as well as a menu that resized
                        based on the width of the window, I was able to create a more responsive and modernized site. It addresses the issues related to announcements,
                        useful links, as well as non-image headers. It uses the calendar plugin effectively, and makes it much easier for mobile users to
                        access the site more efficiently.
                    </Typography>
                    <div style={{textAlign: "center"}}>
                        <Button onClick={() => {window.open("https://crazykoala555.github.io/Responsive-Redesign/")}} size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1}}>Visit the Page</Button>
                        <Button onClick={() => {window.open("https://github.com/crazykoala555/Responsive-Redesign/")}} size="large" sx={{ color: '#fff', background: "#156cc0", '&:hover' :  {background: "#fff", color: "#000"}, m:1}}>Visit the Github Repository</Button>
                    </div>
                    <div style={{textAlign: "center"}} onClick={() => {setRedesign(true)}}>
                        <img id="finalUpdate" src={require('../Images/updated-site.jpeg')}
                             alt="Final redesigned site."/>
                    </div>
                    <Lightbox isOpen={redesign} setOpen={setRedesign} srcImage={require('../Images/updated-site.jpeg')}/>
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
                        All in all, I was fairly successful in creating a better site. Here are the more notable improvements:
                        <ul>
                            <li>Better responsiveness with different screen formats.</li>
                            <li>Items scale to fill up screen to full effect.</li>
                            <li>Announcements are seperated from one another and rearrange themselves when formats change.</li>
                            <li>More cohesive color schemes used.</li>
                            <li>Easier to access and more mobile-friendly buttons.</li>
                            <li>Navigation bar collapses on mobile devices and makes site overall easier to read and navigate.</li>
                        </ul>
                        With these improvements, I was able to create an overall improved website, incorporating responsive elements.
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