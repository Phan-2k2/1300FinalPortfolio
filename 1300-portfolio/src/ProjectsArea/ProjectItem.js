import './ProjectsArea.css'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
function ProjectItem (props) {
    return(
        <div className="projectCard">
            <Card sx={{ minWidth: 350, height: "100%", background: "rgba(45, 42, 46, 1)"}}>
                <CardMedia
                    component="img"
                    height="300"
                    image={props.thumbnail}
                    alt={props.name}
                />
                <CardContent>
                    <div className="titleContent">
                        <Typography gutterBottom variant="h5" component="div" sx={{color: "white"}}>
                            {props.name}
                        </Typography>
                    </div>
                    <Typography variant="h6" color="text.secondary" sx={{color: "white"}}>
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" onClick={props.goToProject} sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>Read More</Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default ProjectItem;