import {Box, Modal} from "@mui/material";
import {useState} from "react";

function Lightbox(props){

    const handleClose = () => props.setOpen(false);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    function resize () {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    window.addEventListener('resize', resize)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const imgStyle = {
        width: (height > width) ? "80vw" : "auto",
        height: (width > height) ? "80vh" : "auto",
    }

    return(
        <div>
            <Modal
                open={props.isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img src={props.srcImage} style={imgStyle}
                         alt="Interface used: Stove Top and Oven Controls"/>
                </Box>
            </Modal>
        </div>
    )
}
export default Lightbox;