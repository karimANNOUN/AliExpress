import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import PaymentIcon from '@mui/icons-material/Payment';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Divider } from '@mui/material';


export const AddCardInfo = ({setShow,show}:any) => {

    const handleClose = () => setShow(false);
     
    const [fullName, setFullName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvcNumber, setCvcNumber] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleFullNameChange = (event:any) => {
        setFullName(event.target.value);
      };
    
      const handleCardNumberChange = (event:any) => {
        setCardNumber(event.target.value);
      };

      const handleCvcNumberChange = (event:any) => {
        setCvcNumber(event.target.value);
      };

      const handleYearChange = (event:any) => {
        setYear(event.target.value);
      };

      const handleMonthChange = (event:any) => {
        setMonth(event.target.value);
      };


      const isFullNameValid = fullName.trim() !== '';
    const isCardNumberValid = cardNumber.trim() !== '';
    const isCvcValid = cvcNumber.trim() !== '';
    const isYearValid = cvcNumber.trim() !== '';
    const isMonthValid = cvcNumber.trim() !== '';
    

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



      
      const mounth = [
        { code: '01' , label: 'janvier' },
        { code: '02' , label: 'febrery' },
        { code: '03' , label: 'March' },
        { code: '04' , label: 'April' },
        { code: '05' , label: 'Mai' },
        { code: '06' , label: 'Juin' },
        { code: '07' , label: 'July' },
        { code: '08' , label: 'Augest' },
        { code: '09' , label: 'September' },
        { code: '10' , label: 'October' },
        { code: '11', label: 'November' },
        { code: '12' , label: 'December' },
    ]



    const years = [
        { code: '2023'  },
        { code: '2024' },
        { code: '2025'  },
        { code: '2026'  },
        { code: '2027' },
        { code: '2028'  },
        { code: '2029' },
        { code: '2030' },
        { code: '2031'  },
        { code: '2032' },
        { code: '2033' },
        { code: '2034'  },
    ]









  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton onClick={handleClose} sx={{position:'absolute',top:'2%',left:'2%'}} >
                <ArrowBackIcon sx={{fontSize:'22px'}} />
            </IconButton>

            <Typography sx={{textAlign:'center',fontWeight:'600',mt:1}} variant='body1' >
            Fournir de plus amples informations
          </Typography>
          <Typography sx={{textAlign:'center',display:'flex',alignItems:'center',fontWeight:'600px',color:'#00c853'}} variant='caption' >
          <GppGoodOutlinedIcon sx={{fontSize:'14px'}} /> Vos informations de paiement sont sécurisés par nos soins.
          </Typography>
      
       <Box sx={{display:'flex',alignItems:'center',borderRadius:'8px',bgcolor:'#ffebee',width:'95%',p:2,my:2}} >
     
       <Typography sx={{display:'flex',alignItems:'center',fontWeight:'600',mr:1}} variant='body1' >
       <PaymentIcon sx={{fontSize:'16px',mr:1}} />  Ajouter une carte
          </Typography>

          <Box sx={{display:'flex',alignItems:'center'}} >
   <img src='https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png' style={{height:'20px',width:'30px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png' style={{height:'20px',width:'30px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png' style={{height:'20px',width:'30px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png' style={{height:'20px',width:'30px'}} />
</Box>

       </Box>

       <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
        
        <TextField
  id="name"
  sx={{ width: '45%' ,mt:1,height:'50px' }}
  placeholder="Enter your card name"
  
  value={fullName}
    onChange={handleFullNameChange}
    required
    error={!isFullNameValid}
    helperText={isFullNameValid ? '' : 'Full Name is required'}
  
    />
  
  <TextField
  id="Phone"
  sx={{ width: '45%' ,mt:1,height:'50px' }}
  placeholder="add your card number"
  value={cardNumber}
    onChange={handleCardNumberChange}
    required
    error={!isCardNumberValid}
    helperText={isCardNumberValid ? '' : 'Card Number is required'}
    />
  

        </Box>


     
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',mt:4}} >
        
   
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'45%'}} >
      
      
      <Autocomplete
      id="month-select-demo"
      sx={{ width: '45%' ,height:'50px' }}
      options={mounth}
      autoHighlight
      getOptionLabel={(option) => option.code}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label} ({option.code}) 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="month"
  
    required
    
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />

<Autocomplete
      id="years-select-demo"
      sx={{ width: '45%' ,height:'50px' }}
      options={years}
      autoHighlight
      getOptionLabel={(option) => option.code}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.code}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder=" year"
 
    required
   
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />



      </Box>



  
  <TextField
  id="Phone"
  sx={{ width: '45%' ,mt:1,height:'50px' }}
  placeholder="add your cvc number"
  value={cvcNumber}
    onChange={handleCvcNumberChange}
    required
    error={!isCvcValid}
    helperText={isCvcValid ? '' : 'Cvc Number is required'}
    />
  

        </Box>

   <Box sx={{display:'flex',alignItems:'center',width:'100%'}} >
   <Typography sx={{textAlign:'left',display:'flex',alignItems:'center',fontWeight:'600px',color:'#9e9e9e',mt:4}} variant='caption' >
          <ErrorOutlineIcon sx={{fontSize:'16px'}} /> Votre commande sera traitée en USD.
          </Typography>
   </Box>
       

       <Divider sx={{my:4,width:'100%'}} />

       <Button variant='contained' sx={{color:'white',width:'70%',bgcolor:'#d32f2f',borderRadius:'12px',mb:4 ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
        Ajouter une card
    </Button>

        </Box>
        </Modal>

    </div>
  )
}