import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloseIcon from '@mui/icons-material/Close';
import { CompteListe } from '../components/CompteListe';
import { ProductAimiez } from '../components/ProductAimiez';
import {  IconButton, InputLabel } from '@mui/material';
import Cookies from 'js-cookie';
import { CollumnTableReview } from './components/CollumnTableReview';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const FeedBack = () => {

    const options = ['Tous', 'Encore' , 'En attente du retour des article(s)' ,'Finalisé'];

    const [show,setShow]=useState(false)

    const [active,setActive]=useState(0)
    const [input,setInput]=useState(Number)

    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const [commandes,setCommandes]=useState <any> ([])
    const [isError,setIsError]=useState(Boolean)
  
   
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
        const response = await fetch(`http://localhost:8000/commandeInforeviews`,{
          method:'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
        });
        const data = await response.json()


        
      
       if (!data) {
          setLoading(true)
        }if (data.success == true) {
          setLoading(false) 
          setCommandes(data.getCommandeReviews)

        }if (data.success == false) {
          setMessage(data.message)
          setOpens(true)
        }  
      } catch (error) {
        console.error('operation failed.');
      }
}

getCommandeInfo()

},[input])
      

const filtercommande = () =>{
  if (input == null ) {
    return  null
  } if (input !== null ) {
    return setCommandes(commandes.filter((command:any)=> command.commandeId == input ))
  }
} 
    
  




const [newCom,setNewCom]=useState(false)   


  const filterReview = (comnd:any)=>{
    if (active == 0  ) {
      return comnd.product.review.length == 0 
    }if (active == 1  ) {
      return comnd.product.review.length !== 0 
  
    }
  }




  useEffect(()=>{
 
   if (active == 0) {
    setNewCom(true) 
   }if (active == 1) {
    setNewCom(false)
   }
   
  },[active])


  return (    
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
      <Snackbar open={opens} autoHideDuration={3000} onClose={handleCloses}>
        <Alert
          onClose={handleCloses}
          severity={ isError == true ? "error" : 'success' }
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                   <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,p:1}} >
                   <Typography sx={{color:'black',textAlign:'left'}}  variant='h6' gutterBottom>
                   Gérer les avis
                        </Typography>

                        
 
                    

                   </Box>


                  { !show && <Box sx={{width:'100%',display:'flex',flexDirection:'column',mb:2,p:1,bgcolor:'Window',border:'2px solid #fff176',borderRadius:'8px'}} >

                    <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >

                    
                   <Typography sx={{color:'black',textAlign:'left',display:'flex',alignItems:'center'}}  variant='subtitle2' gutterBottom>
                     <LightbulbIcon sx={{mr:1,color:'#f4511e'}} /> Conseils
                        </Typography>

                     <IconButton onClick={()=>setShow(true)} >
                        <CloseIcon sx={{fontSize:'20px'}} />
                     </IconButton>

                        </Box>  

                        <Typography sx={{color:'black',textAlign:'left',display:'flex',alignItems:'center',ml:2}}  variant='subtitle2' gutterBottom>
                        1. Vous pouvez laisser un avis aux acheteurs dans un délai de 30 jours dans la section « Commandes en attente de mon commentaire ».
                        </Typography>

                        <Typography sx={{color:'black',textAlign:'left',display:'flex',alignItems:'center',ml:2}}  variant='subtitle2' gutterBottom>
                        2. Les avis seront publiés lorsque vous et le vendeur aurez laissé un avis, ou à la fin de la période de 30 jours.
                        </Typography>
 
                    

                   </Box> }

                





                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',p:1,mb:2}} >
                     <Box sx={{display:'flex',alignItems:'center',bgcolor:'#eeeeee',width:'100%',borderBottom:'2px solid #bdbdbd'}} >
                         
                      { active === 0 ? <Button onClick={()=>(setActive(0),setShow(false))} variant='outlined' sx={{color:'white',bgcolor:'#9e9e9e',border:'1px solid #9e9e9e',alignItems:'center',":hover":{color:'white',bgcolor:'#9e9e9e'}}} >
                      Commandes en attente de mon avis ({commandes.filter((comnd:any)=> comnd.product.review.length == 0 ).length == 0 ? "0" : commandes.filter((comnd:any)=> comnd.product.review.length == 0 ).length })
                        </Button> :
                        <Button onClick={()=>(setActive(0),setShow(false))}  variant='outlined' sx={{color:'black',bgcolor:'Window',border:'1px solid #9e9e9e',alignItems:'center',":hover":{color:'black',bgcolor:'Window',border:'1px solid #9e9e9e'}}} >
                        Commandes en attente de mon avis ({commandes.filter((comnd:any)=> comnd.product.review.length == 0 ).length == 0 ? "0" : commandes.filter((comnd:any)=> comnd.product.review.length == 0 ).length })
                       </Button>
                        }

                      { active === 1 ?   <Button onClick={()=>(setActive(1),setShow(false))}  variant='outlined' sx={{color:'white',bgcolor:'#9e9e9e',border:'1px solid #9e9e9e',alignItems:'center',":hover":{color:'white',bgcolor:'#9e9e9e'}}}  >
                      Vos évaluations
                        </Button> :
                         <Button onClick={()=>(setActive(1),setShow(false))}  variant='outlined' sx={{color:'black',bgcolor:'Window',border:'1px solid #9e9e9e',alignItems:'center',":hover":{color:'black',bgcolor:'Window',border:'1px solid #9e9e9e'}}} >
                         Vos évaluations
                         </Button>}


                     </Box>
                       
                       <Box sx={{display:'flex',alignItems:'center',py:2,bgcolor:'Window'}} >
                         
                       <InputLabel sx={{mx:1}} htmlFor="Phone">
       N de commandes :
      </InputLabel>

                       <TextField
                      id="Phone"
                      sx={{width:'200px',mr:1}}
                      placeholder="Commandes Number"
                      size='small'
                      onChange={(e:any)=>setInput(e.target.value)}
  
                       />

<Button variant='contained' onClick={filtercommande} sx={{color:'white',bgcolor:'#fbc02d',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#fbc02d'} }} >
        Rechercher
    </Button>



    
 

                       </Box>

                       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',bgcolor:'Window',mb:2,overflow:'auto',maxHeight:'500px'}} >
                                 <Box sx={{display:'flex',alignItems:'center',width:'95%',bgcolor:'#eeeeee',p:1}} >
                                    <Box sx={{width:'33%'}} >
                                    <Typography sx={{color:'black',textAlign:'left'}}  variant='body1' gutterBottom>
                                    Détails de la commande
                                   </Typography>
                                    </Box>
                                    <Box sx={{width:'33%'}} >
                                    <Typography sx={{color:'black',textAlign:'left'}}  variant='body1' gutterBottom>
                                     Avis
                                   </Typography>
 
                                    </Box>
                                   
                                    <Box sx={{width:'33%'}} >
                                    <Typography sx={{color:'black',textAlign:'left'}}  variant='body1' gutterBottom>
                                     Action
                                   </Typography>
 
                                    </Box>

                                 </Box>

                                 <Box sx={{display:'flex',flexDirection:'column',width:'95%',bgcolor:'Window',p:1}} >

         { loading == true ? "Loading"
         
      :  commandes.filter(filterReview).map( (command:any) => <CollumnTableReview key={command.id} command={command} setIsError={setIsError} setMessage={setMessage} setOpens={setOpens} setCommandes={setCommandes} newCom={newCom} /> )}
                                      
                                      
                                    

                                 </Box>
                                
                                  
                                  { !commandes.filter(filterReview).length ? <Box sx={{width:'100%',alignItems:'center'}} >
                                  <Typography sx={{color:'black',textAlign:'left',ml:2}}  variant='subtitle2' gutterBottom>
                                  Aucune commande en attente d'avis </Typography>
                                  </Box> : "" }


                       </Box>
                       


                    
                      </Box>

                      

                      <ProductAimiez/>


       </Box>
    </Box>
</div>
    

  )
}
