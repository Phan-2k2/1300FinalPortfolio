import './Development.css'
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar";
import TitleArea from "./TitlePageDevelopment/TitleArea";
import ContentArea from "./ContentArea/ContentArea";
import {useRef} from "react";
import {useIsVisible} from "../MainPage/MainPage";
function Development () {
    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);
    return (

        <div>
            <ProjectsNavbar isVisibleTitle={isVisibleTitle}/>
            <TitleArea titleRef={titleRef} isVisibleTitle={isVisibleTitle}/>
            <ContentArea/>
        </div>
    )
}
export default Development;