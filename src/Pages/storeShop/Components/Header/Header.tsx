
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DetailVendeur } from './components/DetailVendeur';
import { CategoryCard } from './components/CategoryCard';
import {useNavigate,useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';



export const Header = () => {

    const navigate=useNavigate()
    const location=useLocation()

    const [expand,setExpand]=useState(false)
    const [show,setShow]=useState(false)


    const [expands,setExpands]=useState(false)
    const [shows,setShows]=useState(false)

   const active=()=>{
    if(location.pathname == '/store/1/articleprosmos'){
        return 2
     }if(location.pathname == '/store/1'){
        return 0
     }if(location.pathname == '/store/1/meilleur'){
        return 3
     }if (location.pathname == '/store/1/avis') {
         return 4
     }
     }

     const seller=useSelector((state:any)=>state.app.seller)

  

     const [hovers,setHovers]=useState(active) 

  return (
     <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
    <Box sx={{display:'flex',height:'70px',width:'60%',alignItems:'center'}} >
    <Button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">{!seller ? "" : seller.reprisentativeLegal.completeName} Store</Button>
 
    <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} style={{width:'60px',height:'40px',backgroundColor:'#e1f5fe',display:'flex',justifyContent:'center',alignItems:'center'}} >
      <WorkspacePremiumOutlinedIcon sx={{fontSize:'18px',height:'100%',color:'#2196f3'}} />
    <Typography sx={{color:'#2196f3',textAlign:'left'}} variant="caption" gutterBottom>
         Silver
 </Typography>
   
 </div>

 <Button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">88.7 %</Button>

 <Button onMouseEnter={()=>(setExpand(true),setShow(true))} onMouseLeave={()=>(setExpand(false),setShow(false))} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">
   Critique Positive { !expand ? <ExpandMoreIcon sx={{fontSize:'20px'}} /> : <ExpandLessIcon sx={{fontSize:'20px'}} /> } 
   
   </Button>
  
   <Button sx={{color:'black',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'black'}}} variant="outlined">Suivre</Button>
       
   <Typography sx={{textAlign:'left',fontWeight:'800'}} variant='body2' gutterBottom>
   15.9KAbonnés
 </Typography>
 { show ? <DetailVendeur setShow={setShow} /> : "" }
    </Box>


    <Box sx={{height:'60px',width:'100%'}} >
    <Typography sx={{fontWeight:'800'}} variant='h5' gutterBottom>
    {!seller ? "" : seller.reprisentativeLegal.completeName} Store
 </Typography>
    </Box>

    <Box sx={{display:'flex',justifyContent:'center',height:'50px',bgcolor:'black',width:'100%',alignItems:'center',position:'relative'}}>
     <Box sx={{display:'flex',width:'60%',height:'100%'}} >
     
     { hovers === 0 ? <Button onClick={()=>(setHovers(0),navigate('/store/1'))}  sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Page d'accueil
   
   </Button>
    :
    <Button onClick={()=>(setHovers(0),navigate('/store/1'))}  sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Page d'accueil
   
   </Button>
   
   }

{ hovers === 1 ?  <Button  onMouseEnter={()=>(setExpands(true),setShows(true))} onMouseLeave={()=>(setExpands(false),setShows(false))} sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Catégories { !expands ? <ExpandMoreIcon sx={{fontSize:'20px'}} /> : <ExpandLessIcon sx={{fontSize:'20px'}} /> } 
   </Button>
   :
   <Button   onMouseEnter={()=>(setExpands(true),setShows(true))} onMouseLeave={()=>(setExpands(false),setShows(false))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Catégories { !expands ? <ExpandMoreIcon sx={{fontSize:'20px'}} /> : <ExpandLessIcon sx={{fontSize:'20px'}} /> } 
   </Button>}
          
   { hovers === 2 ? <Button onClick={()=>(setHovers(2),navigate('/store/1/articleprosmos'))} sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Article en promos
   
   </Button>
   :
   <Button onClick={()=>(setHovers(2),navigate('/store/1/articleprosmos'))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Article en promos
   
   </Button>
}

{ hovers === 3 ?  <Button onClick={()=>(setHovers(3),navigate('/store/1/meilleur'))} sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Meilleur Ventes
   
   </Button>
   :
   <Button onClick={()=>(setHovers(3),navigate('/store/1/meilleur'))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Meilleur Ventes
   
   </Button>
}

{ hovers === 4 ?  <Button onClick={()=>(setHovers(4),navigate('/store/1/avis'))}  sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Avis sur le vendeur
   
   </Button>

 :
 <Button onClick={()=>(setHovers(4),navigate('/store/1/avis'))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Avis sur le vendeur
   
   </Button>
}


     </Box>



  {shows ? <CategoryCard setHovers={setHovers} setShows={setShows} setExpands={setExpands} /> : "" }
  

   
    </Box>




    </Box>
    
  )
}
