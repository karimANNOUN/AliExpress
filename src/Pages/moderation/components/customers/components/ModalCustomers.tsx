import { useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Cookies from 'js-cookie';
import Chip from '@mui/material/Chip'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Button from '@mui/material/Button';
import { ProfilCustomerInfo } from './ProfilCustomerInfo';
import { TableReviews } from './tableReviewsCustomers/TableReviews';


type ThemeColor =  'success' 


interface StatusObj {
    [key: string]: {
      color: ThemeColor
    }
  }

export const ModalCustomers = ({opens,setOpens,customer}:any) => {

    const statusObj: StatusObj = {
        "simple": { color: 'success' }
      }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width:'80%',
        height:'80%',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        p:1,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      };


      const handleClose = () => {
        setOpens(false)
    };

  return (
    <div> 

    <Modal
    open={opens}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >

    <Box sx={style}>
    <IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'-2%',right:'-1%'}} > 
    <CloseIcon sx={{fontSize:'15px',color:'white'}} /> 
    </IconButton>

    <Box sx={{overflowY:'auto',width:'95%',bgcolor:'Window',borderRadius:'8px',display:'flex',flexDirection:'column',alignItems:'flex-start',p:2}} >

   


<Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',mb:4}} >
   <Box sx={{display:'flex',alignItems:'center'}} >
    <img 
    alt='kilou' 
    src={customer.imageProfle == null ? "https://almparts.co.za/wp-content/uploads/2021/12/no-image-available-icon.jpg" : customer.imageProfle } 
    style={{height:'80px',width:'80px',borderRadius:'8px' }} 
    />
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',ml:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',fontFamily:'monospace'}} variant="h6" gutterBottom>
{customer.name}
</Typography>
<Typography sx={{fontWeight:'200',textAlign:'left',fontFamily:'monospace',color:'#9e9e9e'}} variant="subtitle2" gutterBottom>
Wilaya: {customer.state}
</Typography>
    </Box>

   </Box>


   <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left',fontFamily:'monospace'}} variant="body2" gutterBottom>
    Status
    </Typography>
        <Chip
                  label="Buyer"
                  color={statusObj[customer.role].color}
                  sx={{
                    height: 35,
                    fontSize: '0.75rem',
                    textTransform: 'capitalize',
                    '& .MuiChip-label': { fontWeight: 700 }
                  }}
                />
        </Box>

   </Box>


   <Typography sx={{fontWeight:'600',textAlign:'left',fontFamily:'monospace',color:'#9c27b0'}} variant="h5" gutterBottom>
    Profil Customer Info
    </Typography>

    
     <ProfilCustomerInfo customer={customer} />

     
   <Typography sx={{fontWeight:'600',textAlign:'left',fontFamily:'monospace',color:'#9c27b0'}} variant="h5" gutterBottom>
    Reviews Customers
    </Typography  >

    
    <TableReviews customer={customer} />

   </Box>

    
        </Box>

        </Modal>
        </div>
  )
}
