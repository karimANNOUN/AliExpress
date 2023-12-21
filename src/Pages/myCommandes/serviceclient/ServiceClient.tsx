import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputAdornment } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export const ServiceClient = () => {

  const sujet=[{id:1,panel:'panel1'},
               {id:2,panel:'panel2'},
               {id:3,panel:'panel3'},
               {id:4,panel:'panel4'},
               {id:5,panel:'panel5'},
               {id:6,panel:'panel6'}]

 const textBtn=[
    {id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},
 ]
 const [show,setShow]=useState(false)

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column', background: 'linear-gradient(to bottom, #ffe0b2 0%, #ffff8d 10% , #eeeeee 20%)'}} >
        <Box sx={{width:'100%',display:'flex',justifyContent:'center'}} >
              <Box sx={{width:'70%',display:'flex',alignItems:'center',justifyContent:'space-between',p:2}} >
                 <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'50%'}} >
                 <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='h5' gutterBottom>
                 Bonjour ,
                        </Typography>
                        <Typography sx={{color:'black',fontWeight:'300',textAlign:'left'}}  variant='h6' gutterBottom>
                        Comment puis-je vous aider ?
                        </Typography>
                 </Box>
                 <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'50%'}}>
                 <TextField
               id="Phone"
               sx={{width:'100%'}}
               placeholder="commandes or product vendeur"
               size='small'
               InputProps={{
                   endAdornment:(
               <InputAdornment sx={{height:'100%',right:0,position:'absolute'}} position='end' >
                <IconButton >
               <SearchIcon sx={{color:'black',fontSize:'26px'}} />
              </IconButton>
                </InputAdornment>
                ),
                size:'medium',
                color:'secondary'
    
                 }}
                   />
                    <Box sx={{display:'flex',alignItems:'center'}} >
                    <Button variant='text'  sx={{color:'black',textTransform:'lowercase' ,":hover":{color:'black',fontWeight:'800'} }} >
                    suivre le colis
                      </Button>

                      <Button variant='text' sx={{color:'black',textTransform:'lowercase' ,":hover":{color:'black',fontWeight:'800'} }} >
                      remboursement
                      </Button>

                      <Button variant='text' sx={{color:'black',textTransform:'lowercase' ,":hover":{color:'black',fontWeight:'800'} }} >
                      pas satisfait sur produit
                      </Button>

                
 

                     </Box>
                 </Box>
              </Box>
        </Box>
             

           <Box sx={{width:'70%',display:'flex',flexDirection:'column',alignItems:'center',p:2,bgcolor:'Window',mb:2,borderRadius:'8px'}} >
               <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',mb:1}} >
               <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='h6' gutterBottom>
               Sujets
                        </Typography>
                  
                        <Button variant='text' sx={{color:'#9e9e9e',alignItems:'center',textTransform:'lowercase' ,":hover":{color:'#ff5722',fontWeight:'800'} }} >
                      pas satisfait sur produit <ChevronRightIcon/>
                      </Button>
                        
               </Box>
               <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-between'}} >
               { sujet.map( sub=> <Accordion key={sub.id} expanded={expanded === `${sub.panel}` } onChange={handleChange(`${sub.panel}`)}  sx={{width:'48%',bgcolor:'#f5f5f5',":hover":{bgcolor:'#fbe9e7'},mb:2}} >
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{":hover":{color:'#ff5722'}}}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>)}
               </Box>
           </Box>

           
           <Box sx={{width:'70%',display:'flex',alignItems:'flex-start',justifyContent:'space-between',mb:2}} >
               <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'60%',bgcolor:'Window',borderRadius:'8px',mr:3,p:2}} >
                <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',mb:2}} >
               <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='h6' gutterBottom>
               Foire Aux Questions
                        </Typography>
                  
                        <Button variant='text' sx={{color:'#9e9e9e',alignItems:'center',textTransform:'lowercase' ,":hover":{color:'#ff5722',fontWeight:'800'} }} >
                        Plus de questions <ChevronRightIcon/>
                      </Button>
                      </Box>

                      <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-between'}} >
               { textBtn.map( tex=>  <Button key={tex.id} variant='text'  sx={{color:'#9e9e9e',width:'48%',alignItems:'center',textTransform:'lowercase' ,":hover":{color:'#ff5722',fontWeight:'800'} }} >
                         . Je n'ai pas reçu ma commande. Que puis-je faire ?
                      </Button> )}
               </Box>

               </Box>

               <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'40%',bgcolor:'Window',p:2}}>
               <Box sx={{display:'flex',alignItems:'center',width:'100%',mb:2}} >
               <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='h6' gutterBottom>
               Solutions populaires
                        </Typography>
                  
                      </Box>

                      <Box sx={{width:'100%',display:'flex',flexWrap:'wrap'}} >
               { textBtn.map( tex=> 
                <div key={tex.id} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} style={{display:'flex',width:'85px',flexDirection:'column',alignItems:'center',marginRight:2,marginBottom:2}} >
                  <Paper  elevation={ show ? 3 : 0 } sx={{display:'flex',alignItems:'center',justifyContent:'center'}} >
                     <EditLocationIcon sx={{fontSize:'72px'}} />
                  </Paper>
                  <Button variant='text' sx={{color:'#9e9e9e',alignItems:'center',textTransform:'lowercase' ,":hover":{color:'#ff5722',fontWeight:'800'} }} >
                  Récupérer le compte
                      </Button>
                </div>
                )}
               </Box>

               </Box>
               
           </Box>


           <Box sx={{width:'70%',display:'flex',justifyContent:'space-between',alignItems:'center',mb:2}} >
            <Divider sx={{width:'40%'}} />
            <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='h6' gutterBottom>
            Besoin de plus d'aide ?
                        </Typography>
            <Divider sx={{width:'40%'}} />
           </Box>

           <Box sx={{width:'70%',display:'flex',justifyContent:'center',alignItems:'center',mb:2,p:2,bgcolor:'Window',borderRadius:'8px'}} >
            <HeadphonesIcon sx={{fontSize:'40px'}} />
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',mx:4}} >
            <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='subtitle2' gutterBottom>
            Aide en ligne
                        </Typography>

                        <Typography sx={{color:'black',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                        7j/7, 24h/24
                        </Typography>
            </Box>
            <Button variant='outlined' sx={{color:'#ff5722',borderColor:'#ff5722',borderRadius:'14px',textTransform:'lowercase' ,":hover":{color:'#ff5722',borderColor:'#ff5722'} }} >
                  contacter maintenant
                      </Button>
           </Box>




    </div>
  )
}
