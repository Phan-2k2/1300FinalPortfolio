import './App.css';
import NavBar from "./NavBar/NavBar";
import TitleArea from "./TitlePage/TitleArea";
import AboutArea from "./AboutArea/AboutArea";
import ProjectsArea from "./ProjectsArea/ProjectsArea";
import ContactArea from "./ContactArea/ContactArea";
import FooterArea from "./FooterArea/FooterArea";
import {useEffect, useState} from "react";

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


  return (
    <div className="App">
        <NavBar/>
        <TitleArea/>
        <AboutArea/>
        <hr/>
        <ProjectsArea/>
        <hr/>
        <ContactArea/>
        <FooterArea/>
    </div>
  );
}

export default App;
