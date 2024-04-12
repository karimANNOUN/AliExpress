import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import { ModifierLocation } from './ModifierLocation';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { AjouterLocation } from './AjouterLocation ';
import { useSelector } from 'react-redux';

export const BoxLocation = ({setOpen,open}:any) => {

    const handleClose = () => setOpen(false);

  

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedValue(event.target.value);
    };


    const [close, setClose] = React.useState(false);
    const handleOpen = () => setClose(true);

    const [addLocation, setAddLocation] = React.useState(false);
    const handleAddLocation = () => setAddLocation(true);


       const saveLocation : {id:number}[] =[{id:1}]


       const userInfo=useSelector((state:any)=>state.app.userInfo)

  
  


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <IconButton onClick={handleClose} sx={{position:'absolute',top:'2%',right:'2%'}} >
                <CloseIcon sx={{fontSize:'22px'}} />
            </IconButton>
           
          <Typography sx={{textAlign:'center',fontWeight:'600px',mb:2}} variant="h6" >
          Adresse de livraison
          </Typography>
          <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',width:'100%',height:'100%'}} >
          {  userInfo.locationUser == null ? 
          <img alt='location' src='https://img.freepik.com/premium-photo/online-shopping-concept-e-commerce-shipping-delivery-home-carton-paper-box-floor-blank-wall-empty-space-icon-pin-location-3d-rendering_20693-860.jpg' style={{width:'100%',height:'65%'}} />
          :  <Box sx={{display:'flex',alignItems:'center',width:'100%',border:'2px solid #e0e0e0' ,borderRadius:'8px',py:2}} >
            <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
        sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
      />

 



  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',width:'100%'}} >
            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
                <Box sx={{display:'flex',alignItems:'center'}} >
            <Typography sx={{fontWeight:'300',textAlign:'left',mr:2}} variant='body1' gutterBottom>
            {userInfo.name}
        </Typography>
        <Typography sx={{fontWeight:'100',color:'#bdbdbd',textAlign:'left'}} variant='body1' gutterBottom>
        +{userInfo.locationUser.phoneNumber}
        </Typography>
        </Box>
        
        <Button onClick={handleOpen} variant='text' sx={{color:'#03a9f4',bgcolor:'Window',fontSize:'12px',fontWeight:'100' ,":hover":{color:'#03a9f4',bgcolor:'Window'} }} >
        Modifier
    </Button>

              </Box>

              <Box sx={{display:'flex',alignItems:'center'}} >

        <Typography sx={{fontWeight:'100',color:'#bdbdbd',textAlign:'left'}} variant='body1' gutterBottom>
        {userInfo.locationUser.rueAdress}
        </Typography>
              </Box>
              <Box sx={{display:'flex',alignItems:'center'}} >

<Typography sx={{fontWeight:'100',color:'#bdbdbd',textAlign:'left'}} variant='body1' gutterBottom>
{userInfo.locationUser.commune}, {userInfo.state}, {userInfo.locationUser.country}, {userInfo.locationUser.postalCode}
</Typography>
      </Box>

          </Box>

       

 




            </Box>  }



            { userInfo.locationUser == null ?  <Button onClick={handleAddLocation} variant='contained' sx={{color:'white',width:'90%',borderRadius:'12px',my:2,bgcolor:'#e53935',fontSize:'12px',fontWeight:'100' ,":hover":{color:'white',bgcolor:'#e53935'} }} >
        Ajouter une nouvelle adress
    </Button> : "" }


          </Box>

          <ModifierLocation close={close} setClose={setClose}  />
          <AjouterLocation addLocation={addLocation} setAddLocation={setAddLocation}  />
         
        </Box>

      

      </Modal>




    </div>
  )
}
