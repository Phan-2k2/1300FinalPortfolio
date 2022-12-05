import {Box, Modal} from "@mui/material";

function Lightbox(props){

    const handleClose = () => props.setOpen(false);



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: "80vh",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const imgStyle = {
        height: "100%"
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