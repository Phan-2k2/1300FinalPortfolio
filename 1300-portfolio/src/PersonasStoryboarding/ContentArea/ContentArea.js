import {Container, Typography} from "@mui/material";
import './ContentArea.css'
import Lightbox from "../../Lightbox";
import {useState} from "react";

function ContentArea () {

    const [sketchLB, setSketchLB] = useState(false);

    return(
        <Container id="content" sx={{
            color: "white",
            width: "90vw",
        }}>
            <div id="intro">
                <Typography
                    variant="h4"
                    component="div"
                    sx={{p:2}}
                >
                    <b>Synopsis</b>
                </Typography>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{p:2}}
                >
                    This project takes a view at a public-facing interface. Through observation of the interface use by other users,
                    as well as interviews I am able to generate a set of personas and a storyboard for the given interface.
                </Typography>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{p:2}}
                >
                    <b>Interface: Stove Top and Oven Controls</b>
                </Typography>
                <div style={{textAlign: "center"}} onClick={() => setSketchLB(true)}>
                    <img id="interfaceIllustration" src={require('../Images/interface-sketch.png')}
                         alt="Interface used: Stove Top and Oven Controls"/>
                </div>
                <Lightbox isOpen={sketchLB} setOpen={setSketchLB} srcImage={require('../Images/interface-sketch.png')}/>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{p:2}}
                >
                    My chosen interface is the control system for an oven and stove top appliance. There are three main
                    components to the interface illustrated above. The four knobs surround the center, for controlling
                    the stove top burners. The center console relates to controlling the oven, as well as time-related
                    functions. The center digitizer displays time, as well as any time and oven-related information,
                    like temperature and timer. Each button, if applicable, is grouped with other buttons based on function.
                    The interface in general tries to provide a set of controls to control the main functions of the appliance,
                    that being cooking in the oven or using the stovetops.
                </Typography>
            </div>

        </Container>
    )
}
export default ContentArea;