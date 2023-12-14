import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
export const VoirInfoCard = ({showCard,setShowCard,setShow}:any) => {
    const handleClose = () => setShowCard(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
        border: "2px solid #e0e0e0 ",
        borderRadius:'10px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        p: 1,
      };

  return (
    <div>
         <Modal
        open={showCard}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
        <IconButton onClick={handleClose} sx={{position:'absolute',top:'2%',right:'2%'}} >
                <CloseIcon sx={{fontSize:'22px'}} />
            </IconButton>

            <Typography sx={{textAlign:'center',fontWeight:'600',mt:1}} variant='body1' >
            Moyens de paiement
          </Typography>
          <Typography sx={{textAlign:'center',display:'flex',alignItems:'center',fontWeight:'600px',color:'#00c853',mb:2}} variant='caption' >
          <GppGoodOutlinedIcon sx={{fontSize:'14px'}} /> Vos informations de paiement sont sécurisés par nos soins.
          </Typography>

          <Box sx={{border:'2px solid #e0e0e0',width:'95%',borderRadius:'8px',display:'flex',alignItems:'center',mb:2,p:1}} >
          <IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',borderColor:'#e91e63'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>
        
        <Box sx={{display:'flex',flexDirection:'column'}} >
        <Button onClick={()=>setShow(true)} variant='text' sx={{color:'black',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
 <PaymentIcon sx={{fontSize:'16px',mr:1}} />  Ajouter une carte
</Button> 
<Box sx={{display:'flex',alignItems:'center',ml:2}} >
   <img src='https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png' style={{height:'20px',width:'30px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png' style={{height:'20px',width:'30px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png' style={{height:'20px',width:'30px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png' style={{height:'20px',width:'30px'}} />
</Box>
        </Box>

            </Box>        

        </Box>
        </Modal>
    </div>
  )
}
