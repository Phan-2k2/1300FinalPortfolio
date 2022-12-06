import "./PersonasStoryboarding.css"
import ProjectsNavbar from "../ProjectsNavbar/ProjectsNavbar";
import TitleArea from "./TitlePagePersonas/TitleArea";
import ContentArea from "./ContentArea/ContentArea";
function PersonasStoryboarding () {


    return (
        <div id="contentArea">
            <ProjectsNavbar/>
            <TitleArea/>
            <ContentArea/>
        </div>
    )
}
export default PersonasStoryboarding;