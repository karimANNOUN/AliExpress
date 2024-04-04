import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { styled } from '@mui/material/styles'; 
import { IconButton, LinearProgress } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:400,
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  p: 2,
  display:'flex',
  flexDirection:'column',
  alignItems:'center'

};


export const ReviewEvaluation = ({setOpen,open}:any) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

      const [manyImages, setManyImages] = useState<FileList | null | [] | any >(null);
      const [uploadProgress, setUploadProgress] = useState(0);
      const [hiden,setHiden]=useState(false)
      const [reviewImages, setReviewImages] = useState<string | null | any  >(null);
      const [all,setAll]=useState <[] | any > (null)

      const handleManyImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       
      };

    const handleClose = () => setOpen(false);

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>

    <Typography sx={{color:'black',textAlign:'left',fontWeight:'700',mb:1}}  variant='subtitle2' gutterBottom>
        Rating Your Commande
    </Typography>


    <Rating sx={{mb:2}} name="half-rating" defaultValue={2.5} precision={0.5} />

    <Typography sx={{color:'black',textAlign:'left',fontWeight:'700',mb:1}}  variant='subtitle2' gutterBottom>
        Comment for Your Commande
    </Typography>

    <TextField
                      id="comment"
                      sx={{width:'100%',mb:2}}
                      label='Comment'
                      size="medium"
  
                       />

<Typography sx={{color:'black',textAlign:'left',fontWeight:'700',mb:1}}  variant='subtitle2' gutterBottom>
        Images for your Commande
    </Typography>


    { hiden == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd'}}} >
 <InsertPhotoOutlinedIcon/>
 <Typography variant='caption' sx={{mt:1}} >  
 Upload
</Typography>
<VisuallyHiddenInput id='otherimages' onChange={handleManyImageChange} type="file" name='colorImage5' multiple />
</Button> : "" }




      
    </Box>
  </Modal>
  )
}
