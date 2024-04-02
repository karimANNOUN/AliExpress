import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { CompteListe } from '../components/CompteListe';
import Typography from '@mui/material/Typography';
import { IconButton, InputAdornment } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { ProductAimiez } from '../components/ProductAimiez';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { CommandeCard } from './components/CommandeCard';


export const Commande = () => {



    const [active,setActive]=useState(0)

    const options = ['Commandes','Suivre'];

    const topOption = ['Tous', 'Le dernier 6 mois', 'Depuis 1 ans','Depuis 2 ans'];

    const [show,setShow]=useState(false)

   

    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const [commandes,setCommandes]=useState <any> ([])
  
    const dispatch=useDispatch()
    const navigate=useNavigate()
  
    const token = Cookies.get('token');

    const [opens, setOpens] = useState(false);

    const handleCloses = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpens(false);
    };


    useEffect(()=>{
      const getCommandeInfo = async()=>{
          try{
              const response = await fetch(`http://localhost:8000/commandeInfo`,{
                method:'GET',
                credentials:"include", 
                headers: {
                  'Content-Type': 'application/json',
                   authorization:`${token}`
                }
              });
              const data = await response.json()
              
            
             if (!data) {
                setLoading(true)
              }if (data.success == true) {
              //  dispatch(setUserInfo(data.userInfo))
                setLoading(false) 
                setCommandes(data.commande)

              }if (data.success == false) {
                setMessage(data.message)
                setOpens(true)
              }  
            } catch (error) {
              console.error('operation failed.');
            }
      }
      getCommandeInfo()
  
  },[])


  const getCommandeNonPaye = async()=>{
    setActive(1)
    try{
        const response = await fetch(`http://localhost:8000/commandenonpaye`,{
          method:'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
      
      
       if (!data) {
          setLoading(true)
        }if (data.success == true) {
          setLoading(false) 
          setCommandes(data.commandeNonPaye)
        }if (data.success == false) {
          setMessage(data.message)
          setOpens(true)
        }  
      } catch (error) {
        console.error('operation failed.');
      }
}



const getCommandeInfo = async()=>{
  setActive(0)
  try{
      const response = await fetch(`http://localhost:8000/commandeInfo`,{
        method:'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
      
    
     if (!data) {
        setLoading(true)
      }if (data.success == true) {
      //  dispatch(setUserInfo(data.userInfo))
        setLoading(false) 
        setCommandes(data.commande)

      }if (data.success == false) {
        setMessage(data.message)
        setOpens(true)
      }  
    } catch (error) {
      console.error('operation failed.');
    }
}



const getCommandeEncore = async()=>{
  setActive(2)
  try{
      const response = await fetch(`http://localhost:8000/commandeencore`,{
        method:'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
      
    
     if (!data) {
        setLoading(true)
      }if (data.success == true) {
        setLoading(false) 
        setCommandes(data.getCommandeEncore)

      }if (data.success == false) {
        setMessage(data.message)
        setOpens(true)
      }  
    } catch (error) {
      console.error('operation failed.');
    }
}


const getCommandeExpedies = async()=>{
  setActive(3)
  try{
      const response = await fetch(`http://localhost:8000/commandeexpedies`,{
        method:'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
      
    
     if (!data) {
        setLoading(true)
      }if (data.success == true) {
        setLoading(false) 
        setCommandes(data.getCommandeExpedies)

      }if (data.success == false) {
        setMessage(data.message)
        setOpens(true)
      }  
    } catch (error) {
      console.error('operation failed.');
    }
}



const getCommandeTerminees = async()=>{
  setActive(4)
  try{
      const response = await fetch(`http://localhost:8000/commandeterminees`,{
        method:'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
      
    
     if (!data) {
        setLoading(true)
      }if (data.success == true) {
        setLoading(false) 
        setCommandes(data.getCommandeTerminees)

      }if (data.success == false) {
        setMessage(data.message)
        setOpens(true)
      }  
    } catch (error) {
      console.error('operation failed.');
    }
}







  return (

    <>
    { loading == true ?  "Loading" :
           <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >

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

           <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
             <CompteListe/>
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                          <Box sx={{width:'100%',bgcolor:'Window',display:'flex',flexDirection:'column',my:2,p:1}} >
                             <Box  sx={{display:'flex',alignItems:'center',mb:2,justifyContent:'space-between'}} >
                               <Box sx={{display:'flex',alignItems:'center'}} >
                             { active === 0 ? <Button onClick={getCommandeInfo} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Tout</Button> 
                             : <Button onClick={getCommandeInfo} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Tout</Button>}
                             
                             { active === 1 ? <Button onClick={getCommandeNonPaye} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Non payées</Button> 
                             : <Button onClick={getCommandeNonPaye} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Non payées</Button>}
       
       { active === 2 ? <Button onClick={getCommandeEncore} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >En cours</Button> 
                             : <Button onClick={getCommandeEncore} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >En cours</Button>}
       
       { active === 3 ? <Button onClick={getCommandeExpedies} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Expédiées</Button> 
                             : <Button onClick={getCommandeExpedies} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Expédiées</Button>}
       
       { active === 4 ? <Button onClick={getCommandeTerminees} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Terminées</Button> 
                             : <Button onClick={getCommandeTerminees} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Terminées</Button>}
       
                             </Box>
       
                            { active ===5 ? <Button onClick={()=>setActive(5)} variant="text" sx={{color:'black',fontWeight:'800',alignItems:'center',fontSize:'10px',bgcolor:'Window',":hover":{bgcolor:'Window',color:'black',fontWeight:'800'}}} > <DeleteIcon sx={{mr:1,fontSize:'12px'}} /> Commandes supprimées</Button>
                            
                            :
                            <Button variant="text" onClick={()=>setActive(5)} sx={{color:'#212121',alignItems:'center',fontSize:'10px',bgcolor:'Window',":hover":{bgcolor:'Window',color:'black',fontWeight:'800'}}} > <DeleteIcon sx={{mr:1,fontSize:'12px'}} /> Commandes supprimées</Button>
                            }
                             </Box>
       
                             <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
       
                       <Box sx={{display:'flex',alignItems:'center'}} >
       
          <TextField
         id="Phone"
          sx={{width:'150px'}}
         placeholder="commandes or product vendeur"
         size='small'
         value="commandes"
         disabled
         />
           
               <TextField
         id="Phone"
          sx={{width:'350px'}}
         placeholder="commandes or product vendeur"
         size='small'
         InputProps={{
           endAdornment:(
               <InputAdornment sx={{bgcolor:'#f4511e',height:'100%',right:0,position:'absolute'}} position='end' >
                   <IconButton >
                   <SearchIcon sx={{color:'white'}} />
                   </IconButton>
               </InputAdornment>
           ),
           size:'small'
           
         }}
         />
       
                       </Box>
           
          
       
          <Autocomplete
             disablePortal
             id="combo-box-demo"
             size='small'
             options={topOption}
             sx={{ width: '200px' }}
             renderInput={(params) => <TextField  {...params} />}
           />
              
              
                   
                
            
                             
                             </Box>
       
                          </Box>
       
                       
       
       
               { active === 1 && <Box sx={{display:'flex',width:'100%',alignItems:'center',mb:2}} >
              
        { !show ?
       
       <IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
       
       </IconButton>
       
        :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',ml:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
            <CheckIcon sx={{fontSize:'17px',color:'white'}} />
        </IconButton>
        
        }
       
       
       { commandes.length ? <Button variant='text' sx={{color:'white',ml:1,borderRadius:'12px',fontSize:'12px',fontWeight:'300'  ,bgcolor:'#ff5722',":hover":{color:'white',bgcolor:'#ff5722'} }} >
       Payer les commandes sélectionnés
           </Button> 
       :
       
       <Button variant='text' disabled sx={{color:'white',ml:1,borderRadius:'12px',fontSize:'12px',fontWeight:'700'  ,bgcolor:'#ff5722',":hover":{color:'white',bgcolor:'#ff5722'} }} >
       Payer les commandes sélectionnés
           </Button>
       
       }
       
       
               </Box>   }
       
       
       
       
                             <Box sx={{display:'flex',flexDirection:'column',width:'100%',bgcolor:'Window',p:1,mb:2,height:'500px',overflow:'auto'}} >
                            
                              { !commandes.length ?
                                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}} >
                                <ListAltIcon sx={{fontSize:'130px',color:'#bdbdbd'}} />
       
                              <Typography sx={{color:'#bdbdbd'}}  variant='body1' gutterBottom>
                              Aucune commande S'il vous plaît <Link href="#" sx={{color:'#616161',":hover":{color:'#616161'}}} underline="none">
                              Connectez-vous
             </Link>  ou <Link sx={{color:'#616161',":hover":{color:'#616161'}}} href="#" underline="none"> Ajoutez une suggestion </Link>
                               </Typography>
                               </Box> 
                               :

                               (commandes.map( (details:any) => <Box key={details.id} sx={{width:'95%',my:1,display:'flex',flexDirection:'column',p:1,border:'solid 1px #bdbdbd',borderRadius:'6px'}} >
                                
                                <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',mb:1}} >
                                <Typography sx={{color:'#bdbdbd',fontWeight:'500'}}  variant='subtitle2' gutterBottom>
                              commande ID : <b>{details.id}</b>
                               </Typography>

                               <Typography sx={{color:'#bdbdbd',fontWeight:'500'}}  variant='subtitle2' gutterBottom>
                              Order Paiment Id ID : <b>{details.orderPaymentId}</b>
                               </Typography>

                                </Box>

                               { details.items.map( (command:any) => <CommandeCard key={command.id} command={command} />)}


                               </Box>)) 


                               }
       
                             </Box>
       
       
       
                             <ProductAimiez/>
       
       
              </Box>
           </Box>
       </div>
    }
    </>

 
  )
}

