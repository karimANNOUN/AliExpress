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
import Cookies from 'js-cookie';
import axios from 'axios';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  p: 2,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  overflow:'auto',
  maxHeight:450,
  postion:'relative'
};


export const ReviewEvaluation = ({setOpen,open,setMessage,setOpens,command,setCommandes,setIsError}:any) => {

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

      const Token = Cookies.get('token');

      const [comment,setComment]=useState('')
      const [rating,setRating]=useState<number | null>(Number)
      const [manyImages, setManyImages] = useState<File[]>([]);
      const [uploadProgress, setUploadProgress] = useState(0);

      const [reviewImages, setReviewImages] = useState<string | null | any  >(null);
      const [all,setAll]=useState <[] | any > ([])
      const [loading,setLoading]=useState(false)

      const handleManyImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      
   const file =e.target.files?.[0] 

  
    if (file) {
      const reader = new FileReader();

      setManyImages([...manyImages,file])

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress(progress)
          setAll([...all,e.target.result as string])
        }
      };

      
      reader.readAsDataURL( file);
    }

      };

    const handleClose = () => setOpen(false);



    const handelReviewInformation= async ()=>{

      try{
        setLoading(true)
        const formData : any = new FormData();
      
        formData.append('manyImages', manyImages);
        formData.append('commentaire', comment);
        formData.append('rating', rating);
        formData.append('command', JSON.stringify(command));
  
  
      if (!manyImages || manyImages.length === 0) {
        console.error('No images selected.');
        return;
      }
  
  
        for (let i = 0; i < manyImages.length; i++) {
          formData.append('manyImages', manyImages[i]);
        }
        
  
          axios.post(`http://localhost:8000/addreviews`,formData, {
            withCredentials:true,
            headers:{authorization:`${Token}`},
          }) 
          .then(res=>{
            if (res.data.success == false) {
              setMessage(res.data.message)
              setIsError(true)
              setOpens(true)
            }if (res.data.success == true) {
              setIsError(false)
              setMessage(res.data.message)
              setOpens(true)
              setCommandes(res.data.getCommandeReviews)
              setLoading(false)
              handleClose()
            }
          } )
          .catch(err=>console.log(err)) 
           
             
        }catch(error){
          console.log(error)
        }
  
  
     }







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


    <Rating
  name="simple-controlled"
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
/>

    <Typography sx={{color:'black',textAlign:'left',fontWeight:'700',mb:1}}  variant='subtitle2' gutterBottom>
        Comment for Your Commande
    </Typography>

    <TextField
                      id="comment"
                      sx={{width:'100%',mb:2}}
                      label='Comment'
                      size="medium"
                      onChange={(e:any)=>setComment(e.target.value)}
                       />

<Typography sx={{color:'black',textAlign:'left',fontWeight:'700',mb:1}}  variant='subtitle2' gutterBottom>
        Images for your Commande
    </Typography>


     <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd'}}} >
 <InsertPhotoOutlinedIcon/>
 <Typography variant='caption' sx={{mt:1}} >  
 Upload
</Typography>
<VisuallyHiddenInput id='otherimages' onChange={handleManyImageChange} type="file" name='colorImage5' multiple />
</Button> 

{ all.length == 0 ? "" : <Box sx={{width:'70%',display:'flex',alignItems:'center',flexWrap:'wrap',p:1,my:1,borderRadius:'6px',border:'1px dashed #bdbdbd'}} >
 { all.map((val:any,index:any)=><Box key={index} sx={{borderRadius:'8px',mr:2,position:'relative'}} >
 <img src={val} style={{height:'50px',width:'50px'}} />
   <IconButton onClick={()=>(all.splice(index,1))} sx={{position:'absolute',":hover":{bgcolor:'#eeeeee'}, top:'2%',right:'1%'}} >
      <CloseOutlined sx={{fontSize:'5px'}} /> 
   </IconButton>
 </Box>)}  
</Box>}

{ loading == true ? 
 <Button onClick={handelReviewInformation} disabled sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Confirm</Button>
:
<Button onClick={handelReviewInformation} sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Confirm</Button>

}


<IconButton onClick={handleClose} sx={{position:'absolute',":hover":{bgcolor:'#eeeeee'}, top:'2%',right:'1%'}} >
      <CloseOutlined sx={{fontSize:'15px'}} /> 
   </IconButton>
      
    </Box>
  </Modal>
  )
}
