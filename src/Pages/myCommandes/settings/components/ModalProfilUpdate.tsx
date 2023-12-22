import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Label } from '@mui/icons-material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
export const ModalProfilUpdate = ({open,setOpen}:any) => {

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #eeeeee',
        boxShadow: 24,
        p: 4,
        display:'flex',
        flexDirection:'column',
        borderRadius:'12px',
        background:'linear-gradient(to bottom, #e0f2f1 0%, #a7ffeb 40% , #e0f2f1 70%)'
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
         <Box sx={{display:'flex',alignItems:'center'}} >
            <label style={{fontWeight:'700'}} htmlFor='nameAdress'  > Name </label>
         <TextField
      id="nameAdress"
      sx={{ mx:2}}
      size='small'
      
        />
         <TextField
      sx={{ mx:2}}
      size='small'
      
        />
         </Box>
         <Box sx={{display:'flex',alignItems:'center',width:'100%'}} >
         <label style={{fontWeight:'700'}} htmlFor='demo-row-radio-buttons-group-label'  > Gender </label>
         <FormControl sx={{display:'flex',alignItems:'center',ml:2}} >
      <RadioGroup
         aria-labelledby="demo-row-radio-buttons-group-label"
         name="row-radio-buttons-group"
        defaultValue="female"
        row
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
         </Box>
         

         <Box sx={{display:'flex',flexDirection:'column',width:'100%',mt:3}} >
          <label style={{fontWeight:'700'}} htmlFor="name">Informations personnelles</label>

            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
        
            <TextField
      id="name"
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="Enter your Adress"
      size='small'
     
      
        />
      
      <TextField
      id="Phone"
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="Ville"
      size='small'
      
        />
      
    
            </Box>
           
          
        
           
            </Box>


            <Box sx={{display:'flex',flexDirection:'column',width:'100%',my:4}} >
          <label style={{fontWeight:'700'}} htmlFor="nameAdress">Code Postal</label>

            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
        
            <TextField
      id="nameAdress"
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="Enter Postal Code "
      size='small'
        />
      
      <TextField
      id="Phone"
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="Phone Number"
      size='small'
        />
      
    
            </Box>

          
           <Box sx={{width:'100%',px:2,mt:2,display:'flex',alignItems:'center',justifyContent:'center'}} >
           <Button  variant="contained">Update</Button>
           </Box>
          
        
           
            </Box>


        </Box>
      </Modal>
    </div>
  )
}
