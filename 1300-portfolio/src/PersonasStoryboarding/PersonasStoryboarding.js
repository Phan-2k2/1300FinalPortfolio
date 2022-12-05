import "./PersonasStoryboarding.css"
import NavBar from "./NavBar/NavBar";
import TitleArea from "./TitlePage/TitleArea";
import {useRef} from "react";
import {useIsVisible} from "../MainPage/MainPage";
import ContentArea from "./ContentArea/ContentArea";
function PersonasStoryboarding () {
    const titleRef = useRef();
    const isVisibleTitle = useIsVisible(titleRef);

    return (
        <div id="contentArea">
            <NavBar/>
            <TitleArea titleRef={titleRef} isVisible={isVisibleTitle}/>
            <ContentArea/>
        </div>
    )
}
export default PersonasStoryboarding;