import React, { useState } from 'react'
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
import Cookies from 'js-cookie';
import { setUserInfo } from '../../../../storeRedux/CartSlice';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingButton } from '@mui/lab';

export const ModalProfilUpdate = ({open,setOpen}:any) => {

  const [opens, setOpens] = useState(false);
  
  const handleCloses = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpens(false);
  };

    const handleClose = () => setOpen(false);

    const token = Cookies.get('token');

    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')


    const [wilaya,setWilaya]=useState('')
    const [country,setCountry]=useState('')
    const [commune,setCommune]=useState('')
    const [name,setName]=useState('')
    const [gender,setGender]=useState('')
    const [adress,setAdress]=useState('')
    const [postalCode,setPostalCode]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')

    const dispatch=useDispatch()

    const handelUpdateProfileInfo=async()=>{
      try{
      const response = await fetch(`http://localhost:8000/updatelocation`,{
        method:'PUT',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        },
        body: JSON.stringify({ wilaya,country,commune,name,gender,adress,postalCode,phoneNumber }),
       
      });
      const data = await response.json()
      if (!data) {
        setLoading(true)
      }if (data.success == true) {
        dispatch(setUserInfo(data.userInfo))
        setLoading(false) 
        setOpen(false)
      }if (data.success == false) {
        setMessage(data.message)
        setOpens(true)
      }  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }


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
      onChange={e=>setName(e.target.value)}
      
        />
         <Snackbar open={opens} autoHideDuration={3000} onClose={handleCloses}>
        <Alert
          onClose={handleCloses}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>

         <label style={{fontWeight:'700'}} htmlFor='wilaya'  > Wilaya </label>
         <TextField
          id="wilaya"
      sx={{ mx:2}}
      size='small'
      onChange={e=>setWilaya(e.target.value)}
        />


<label style={{fontWeight:'700'}} htmlFor='country'  > country </label>
         <TextField
          id="country"
      sx={{ mx:2}}
      size='small'
      onChange={e=>setCountry(e.target.value)}
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
        <FormControlLabel value="female" onChange={(e:any)=>setGender(e.target.value)} control={<Radio />} label="Female" />
        <FormControlLabel value="male" onChange={(e:any)=>setGender(e.target.value)} control={<Radio />} label="Male" />
        <FormControlLabel value="other" onChange={(e:any)=>setGender(e.target.value)} control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
         </Box>
         

         <Box sx={{display:'flex',flexDirection:'column',width:'100%',mt:3}} >
          <label style={{fontWeight:'700'}} htmlFor="name">Informations personnelles</label>

            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}} >
        
            <TextField
      id="name"
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="Enter your home Adress"
      size='small'
      onChange={e=>setAdress(e.target.value)}
        />
      
      <TextField
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="commune"
      size='small'
      onChange={e=>setCommune(e.target.value)}
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
      type='number'
      onChange={e=>setPostalCode(e.target.value)}
        />
      
      <TextField
      id="Phone"
      sx={{ width: '47%' ,mt:1,height:'50px' }}
      placeholder="Phone Number"
      size='small'
      type='tel'
      onChange={e=>setPhoneNumber(e.target.value)}
        />
      
    
            </Box>

          
           <Box sx={{width:'100%',px:2,mt:2,display:'flex',alignItems:'center',justifyContent:'center'}} >
           <LoadingButton
          color="secondary"
          onClick={handelUpdateProfileInfo}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Update</span>
        </LoadingButton>
           </Box>
          
        
           
            </Box>


        </Box>
      </Modal>
    </div>
  )
}
