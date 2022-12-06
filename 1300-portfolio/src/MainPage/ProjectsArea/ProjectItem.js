import './ProjectsArea.css'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useState} from "react";
function ProjectItem (props) {

    const [width, setWidth] = useState(window.innerWidth);

    function resize () {
        setWidth(window.innerWidth);
    }

    window.addEventListener('resize', resize)

    return(
        <div className="projectCard">
            <Card sx={{ minWidth: {xs : 0.8*width, sm : 350}, height: "100%", background: "rgba(45, 42, 46, 1)"}}>
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
                    <NavLink to={props.link} style={{textDecoration: 'none'}}>
                        <Button size="medium" sx={{ color: '#fff', background: "#000", '&:hover' :  {background: "#fff", color: "#000"}}}>Read More</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </div>
    )
}
export default ProjectItem;