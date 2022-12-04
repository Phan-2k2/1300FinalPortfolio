import {Fade, Typography} from "@mui/material";
import './ProjectsArea.css'
import ProjectItem from "./ProjectItem";

const projectData =
    [
    {
        "name": "Personas and Storyboarding",
        "description": "Understanding interfaces and their users.",
        "thumbnail": "ProjectThumbnails/banana.jpg",
        "link":""
    },
    {
        "name": "Responsive Redesign",
        "description": "Redesigning an old website to be more responsive.",
        "thumbnail": "ProjectThumbnails/banana.jpg",
        "link":""
    },
    {
        "name": "Iterative Design",
        "description": "Designing and redesigning something new with the help of user feedback.",
        "thumbnail": "ProjectThumbnails/banana.jpg",
        "link":""
    },
    {
        "name": "Development",
        "description": "Creating a site using React and making use of states.",
        "thumbnail": "ProjectThumbnails/banana.jpg",
        "link":""
    }
]

projectData.forEach((item) => {
    item.thumbnail = process.env.PUBLIC_URL + "/" + item.thumbnail;
});
function ProjectsArea (props) {
    return (
        <div id="projectsArea">
            <Fade in={true} timeout={1000}>
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