import './App.css';
import NavBar from "./NavBar/NavBar";
import TitleArea from "./TitlePage/TitleArea";
import AboutArea from "./AboutArea/AboutArea";
import ProjectsArea from "./ProjectsArea/ProjectsArea";
import ContactArea from "./ContactArea/ContactArea";
import FooterArea from "./FooterArea/FooterArea";
import {useEffect, useRef, useState} from "react";

//https://dev.to/jmalvarez/check-if-an-element-is-visible-with-react-hooks-27h8
export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        );
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);
    return isIntersecting;
}

function App() {
    const navbarRef = useRef();
    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);
    const aboutRef = useRef();
    const isVisibleAbout = useIsVisible(aboutRef);
    const projectsRef = useRef();
    const isVisibleProj = useIsVisible(projectsRef);
    const contactsRef = useRef();
    const isVisibleContacts = useIsVisible(contactsRef);

  return (
    <div className="App">
        <NavBar aboutRef={aboutRef} projectsRef={projectsRef} contactsRef={contactsRef} navbarRef={navbarRef}/>
        <TitleArea titleRef={titleRef} isVisible={isVisibleTitle}/>
        <AboutArea aboutRef={aboutRef} isVisible={isVisibleAbout}/>
        <hr/>
        <ProjectsArea projectsRef={projectsRef} isVisible={isVisibleProj}/>
        <hr/>
        <ContactArea contactsRef={contactsRef} isVisible={isVisibleContacts}/>
        <FooterArea/>
    </div>
  );
}

export default App;
