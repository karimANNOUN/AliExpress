
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DetailVendeur } from './components/DetailVendeur';
import { CategoryCard } from './components/CategoryCard';
import {useNavigate,useLocation, useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';




export const Header = ({seller,setSeller}:any) => {

   const user =useSelector((state:any)=>state.app.user)

    const navigate=useNavigate()
    const location=useLocation()
    const params=useParams()

    const [expand,setExpand]=useState(false)
    const [show,setShow]=useState(false)
 

    const [expands,setExpands]=useState(false)
    const [shows,setShows]=useState(false)
    const [checked,setChecked]=useState(true)

        const token = Cookies.get('token');

   const active=()=>{
    if(location.pathname == `/store/${params.storeId}/articleprosmos`){
        return 2
     }if(location.pathname == `/store/${params.storeId}`){
        return 0
     }if(location.pathname == `/store/${params.storeId}/meilleur`){
        return 3
     }if (location.pathname == `/store/${params.storeId}/avis`) {
         return 4
     }
     }

     const [hovers,setHovers]=useState(active) 
     const [loading,setLoading]=useState(false)
     const [reviews,setReviews]=useState([])

        useEffect( ()=>{
                setLoading(true)
                   const getReviewsStore =async()=>{
                     const response=await fetch(`http://localhost:8000/getAllReviewSeller/${params.storeId}`, {
                      method: 'GET',
                      credentials: 'include', 
                      headers: {
                        'Content-Type': 'application/json', 
                      },
                    })
                    const data = await response.json()

                 
                  if (data.success == true) {
                      setReviews(data.getReviewsSeller)
                      setLoading(false)
                    
                   
                  }
                    
                  }
                   getReviewsStore()
               },[])





               const postFollowers = async()=>{
                  try{
                  const response=await fetch(`http://localhost:8000/createStoreFollower/${params.storeId}`, {
                   method: 'POST',
                   credentials: 'include', 
                   headers: {
                     'Content-Type': 'application/json',
                      authorization:`${token}` 
                   },
                   body:JSON.stringify({})
                 })
                 const data = await response.json()
  
              
               if (data.success == true) {
                  setSeller(data.seller)
                  setLoading(false)
                }
          } catch (error) {
                  console.error('operation failed.');
                }
          }
  
  
  
          const deleteFollowers = async()=>{
                  try{
                  const response=await fetch(`http://localhost:8000/deleteStoreFollower/${params.storeId}`, {
                   method: 'DELETE',
                   credentials: 'include', 
                   headers: {
                     'Content-Type': 'application/json',
                      authorization:`${token}` 
                   },
                   body:JSON.stringify({})
                 })
                 const data = await response.json()
              
               if (data.success == true) {
                  setSeller(data.seller)
                  setLoading(false)
                }
          } catch (error) {
                  console.error('operation failed.');
                }
          }
  
  
         
          useEffect(()=>{
  
                  const findFollower = seller.followers.find((follow:any)=> follow.buyerId === user.id )
  
                  if (findFollower) {
                          setChecked(true)
                  }else{
                          setChecked(false)
                  }
  
          },[seller,show])
  
       

       
               

               
             
        const positifReviews= Math.floor(reviews.filter((rev:any)=> parseInt(rev.rating) >= 4 ).length*100*10/reviews.length)/10


  if (loading == true) return <div>...loading</div>

  return (
     <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
    <Box sx={{display:'flex',height:'70px',width:'60%',alignItems:'center'}} >
    <Button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">{!seller ? "" : seller.name} Store</Button>
 
    { positifReviews <= 33 ? <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} style={{width:'60px',height:'40px',backgroundColor:'#eeeeee',display:'flex',justifyContent:'center',alignItems:'center'}} >
      <WorkspacePremiumOutlinedIcon sx={{fontSize:'18px',height:'100%',color:'#9e9e9e'}} />
    <Typography sx={{color:'#2196f3',textAlign:'left'}} variant="caption" gutterBottom>
         Bronze
 </Typography>
   
 </div> : "" }

 { positifReviews > 33 && positifReviews <= 66  ? <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} style={{width:'60px',height:'40px',backgroundColor:'#e1f5fe',display:'flex',justifyContent:'center',alignItems:'center'}} >
      <WorkspacePremiumOutlinedIcon sx={{fontSize:'18px',height:'100%',color:'#2196f3'}} />
    <Typography sx={{color:'#2196f3',textAlign:'left'}} variant="caption" gutterBottom>
         Silver
 </Typography>
   
 </div> : "" }

 { positifReviews > 66 ? <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} style={{width:'60px',height:'40px',backgroundColor:'#fffde7',display:'flex',justifyContent:'center',alignItems:'center'}} >
      <WorkspacePremiumOutlinedIcon sx={{fontSize:'18px',height:'100%',color:'#ffd600'}} />
    <Typography sx={{color:'#2196f3',textAlign:'left'}} variant="caption" gutterBottom>
         Gold
 </Typography>
   
 </div> : "" }

 <Button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">{positifReviews}%</Button>

 <Button onMouseEnter={()=>(setExpand(true),setShow(true))} onMouseLeave={()=>(setExpand(false),setShow(false))} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">
   Critique Positive { !expand ? <ExpandMoreIcon sx={{fontSize:'20px'}} /> : <ExpandLessIcon sx={{fontSize:'20px'}} /> } 
   
   </Button>
  
   { checked == true ?
    <Button onClick={deleteFollowers} sx={{color:'black',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'black'}}} variant="outlined"> <FavoriteIcon/> Suivé</Button>:
    <Button onClick={postFollowers} sx={{color:'black',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'black'}}} variant="outlined"> <AddIcon/> Suivre</Button>
   }
       
   <Typography sx={{textAlign:'left',fontWeight:'800'}} variant='body2' gutterBottom>
   {seller.followers.length}Abonnés
 </Typography>
 { show ? <DetailVendeur setShow={setShow} reviews={reviews} seller={seller} checked={checked} setSeller={setSeller} /> : "" }
    </Box>


    <Box sx={{height:'60px',width:'100%'}} >
    <Typography sx={{fontWeight:'800'}} variant='h5' gutterBottom>
    {!seller ? "" : seller.name} Store
 </Typography>
    </Box>

    <Box sx={{display:'flex',justifyContent:'center',height:'50px',bgcolor:'black',width:'100%',alignItems:'center',position:'relative'}}>
     <Box sx={{display:'flex',width:'60%',height:'100%'}} >
     
     { hovers === 0 ? <Button onClick={()=>(setHovers(0),navigate(`/store/${seller.id}`))}  sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Page d'accueil
   
   </Button>
    :
    <Button onClick={()=>(setHovers(0),navigate(`/store/${seller.id}`))}  sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
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
          
   { hovers === 2 ? <Button onClick={()=>(setHovers(2),navigate(`/store/${seller.id}/articleprosmos`))} sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Article en promos
   
   </Button>
   :
   <Button onClick={()=>(setHovers(2),navigate(`/store/${seller.id}/articleprosmos`))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Article en promos
   
   </Button>
}

{ hovers === 3 ?  <Button onClick={()=>(setHovers(3),navigate(`/store/${seller.id}/meilleur`))} sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Meilleur Ventes
   
   </Button>
   :
   <Button onClick={()=>(setHovers(3),navigate(`/store/${seller.id}/meilleur`))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Meilleur Ventes
   
   </Button>
}

{ hovers === 4 ?  <Button onClick={()=>(setHovers(4),navigate(`/store/${seller.id}/avis`))}  sx={{color:'white',bgcolor:'#757575',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Avis sur le vendeur
   
   </Button>

 :
 <Button onClick={()=>(setHovers(4),navigate(`/store/${seller.id}/avis`))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Avis sur le vendeur
   
   </Button>
}


     </Box>



  {shows ? <CategoryCard setHovers={setHovers} setShows={setShows} setExpands={setExpands}  /> : "" }
  

   
    </Box>




    </Box>
    
  )
}
