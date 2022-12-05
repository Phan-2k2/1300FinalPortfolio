import {Fade, Typography} from "@mui/material";
import './ProjectsArea.css'
import ProjectItem from "./ProjectItem";
import {useRef} from "react";
import {useIsVisible} from "../App";

const projectData =
    [
    {
        "name": "Personas and Storyboarding",
        "description": "Understanding interfaces and their users.",
        "thumbnail": "ProjectThumbnails/storyboarding-blurred.jpg",
        "link":""
    },
    {
        "name": "Responsive Redesign",
        "description": "Redesigning an old website to be more responsive.",
        "thumbnail": "ProjectThumbnails/redesign.jpg",
        "link":""
    },
    {
        "name": "Iterative Design",
        "description": "Designing and redesigning something new with the help of user feedback.",
        "thumbnail": "ProjectThumbnails/iterative2.jpg",
        "link":""
    },
    {
        "name": "Development",
        "description": "Creating a site using React and making use of states.",
        "thumbnail": "ProjectThumbnails/development.jpeg",
        "link":""
    }
]

projectData.forEach((item) => {
    item.thumbnail = process.env.PUBLIC_URL + "/" + item.thumbnail;
});

function ProjectsArea (props) {
    const projectsRef = useRef();
    const isVisible = useIsVisible(projectsRef);

    return (
        <div id="projectsArea" ref={projectsRef}>
            <Fade in={isVisible} timeout={1000}>
                <div id="projectsAreaContent">
                    <Typography variant="h3" sx={{}}>
                        <b>My Projects</b>
                    </Typography>
                    <div id="projects">
                        {projectData.map((project, index) => (
                            <ProjectItem key={project.name}
                                         name={project.name} description={project.description}
                                         thumbnail={project.thumbnail} goToProject={() => console.log(project.name)}
                            />
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    )
}
export default ProjectsArea;