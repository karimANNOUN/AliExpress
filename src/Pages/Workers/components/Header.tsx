
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { setProduct } from '../../../storeRedux/CartSlice';

export const Header = ({product}:any) => {

        const navigate=useNavigate()

     //   const product=useSelector((state:any)=>state.app.product)
        const user =useSelector((state:any)=>state.app.user)

        const params=useParams()
        const dispatch=useDispatch()

        const [reviews,setReviews]=useState([])
        const [checked,setChecked]=useState(true)
        const [loading1,setLoading1]=useState(false)

        const token = Cookies.get('token');

        useEffect( ()=>{
                setLoading1(true)
                   const getReviewsStore =async()=>{
                        try{
                     const response=await fetch(`http://localhost:8000/getReviewsAll/${params.id}`, {
                      method: 'GET',
                      credentials: 'include', 
                      headers: {
                        'Content-Type': 'application/json', 
                      },
                    })
                    const data = await response.json()

                 
                  if (data.success == true) {
                      setReviews(data.getReviewsSeller)
                      setLoading1(false)
                    
                   
                  }
                } catch (error) {
                        console.error('operation failed.');
                      }
                    
                  }
                   getReviewsStore()
               },[])



               const postFollowers = async()=>{
                try{
                setLoading1(true)
                const response=await fetch(`http://localhost:8000/createFollower/${params.id}`, {
                 method: 'POST',
                 credentials: 'include', 
                 headers: {
                   'Content-Type': 'application/json',
                    authorization:`${token}` 
                 },
                 body:JSON.stringify({product})
               })
               const data = await response.json()

            
             if (data.success == true) {
                dispatch(setProduct(data.product)) 
                setLoading1(false)
              }
        } catch (error) {
                console.error('operation failed.');
              }
        }



        const deleteFollowers = async()=>{
                try{
                setLoading1(true)
                const response=await fetch(`http://localhost:8000/deleteFollower/${params.id}`, {
                 method: 'DELETE',
                 credentials: 'include', 
                 headers: {
                   'Content-Type': 'application/json',
                    authorization:`${token}` 
                 },
                 body:JSON.stringify({product})
               })
               const data = await response.json()
            
             if (data.success == true) {
                dispatch(setProduct(data.product)) 
                setLoading1(false)
              }
        } catch (error) {
                console.error('operation failed.');
              }
        }


       
        useEffect(()=>{
              
               
                const findFollower = product.user.followers.find((follow:any)=> follow.buyerId === user.id )

                if (findFollower) {
                        setChecked(true)
                }else{
                        setChecked(false)
                }
        },[product])

               
             
        const positifReviews= Math.floor(reviews.filter((rev:any)=> parseInt(rev.rating) >= 4 ).length*100*10/reviews.length)/10

        
        
      
  return (
      
    <div>
        {loading1 == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     
     : <Box sx={{width:'100%',height:'80px',bgcolor:'#424242',display:'flex',alignItems:'center',justifyContent:'space-around'}} >
              <Box component='div' onClick={()=>navigate(`/store/${product.userId}`)} sx={{display:'flex',alignItems:'center'}} >
              <Avatar
           alt="Remy Sharp"
               src={ !product.user ? "" : product.user.imageProfle }
               sx={{ width: 50, height: 50 }}
              />
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',mx:1}} >
              <Typography sx={{fontWeight:'800',color:'white'}} variant="subtitle2" gutterBottom>
              { !product.user ? "" : product.user.name}
      </Typography>
      <Box>
      { positifReviews <= 33 ? <Typography sx={{color:'#2196f3',bgcolor:'#bdbdbd',textAlign:'left'}} variant="caption" gutterBottom>
              Bronze
      </Typography> : "" }
      { positifReviews > 33 && positifReviews <= 66 ? <Typography sx={{color:'#2196f3',bgcolor:'white',textAlign:'left'}} variant="caption" gutterBottom>
              Silver
      </Typography> : "" }
      { positifReviews > 66 ? <Typography sx={{color:'#fbc02d',bgcolor:'#fffde7',textAlign:'left'}} variant="caption" gutterBottom>
              Gold
      </Typography> : "" }
      </Box>
              </Box> 
             <ChevronRightIcon sx={{color:'white',fontSize:'30px'}} />
              </Box>
              <Box sx={{display:'flex',alignItems:'center',color:'white'}} >
              <Typography sx={{fontWeight:'800',color:'white',mr:2}} variant="subtitle2" gutterBottom>
              {positifReviews}% Avis positifs 
      </Typography> |
      <Typography sx={{fontWeight:'800',color:'white',mx:2}} variant="subtitle2" gutterBottom>
      { !product.user ? "" : product.user.followers.length} Abonnés
      </Typography>

      { checked == true ? 
        <Button onClick={deleteFollowers} sx={{bgcolor:'white',color:'black',":hover":{bgcolor:'white',color:'black'},mr:2,borderRadius:'25px'}} variant="contained"> <FavoriteIcon/> Suivé</Button>
      : <Button onClick={postFollowers} sx={{bgcolor:'white',color:'black',":hover":{bgcolor:'white',color:'black'},mr:2,borderRadius:'25px'}} variant="contained"> <AddIcon  /> Suivre</Button>
      
      }
              </Box>
          </Box>}
          {loading1 == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
         <Skeleton variant="rectangular" width={210} height='60px' />
        </Box>
     
     : <Box sx={{height:'60px',width:'100%',bgcolor:'#eeeeee',display:'flex',justifyContent:'center'}} >
          
          <Box sx={{display:'flex',alignItems:'center',height:'100%',width:'70%'}} >
      <Button onClick={()=>navigate(`/store/${product.userId}`)} sx={{color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Page d'Acceille</Button>
      <Button onClick={()=>navigate(`/store/${product.userId}/articleprosmos`)} sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Article en Promo</Button>
      <Button onClick={()=>navigate(`/store/${product.userId}/meilleur`)} sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Meilleurs Ventes</Button>
      <Button onClick={()=>navigate(`/store/${product.userId}/avis`)} sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Avis sur le vendeur</Button>
     
      </Box>
      
          </Box>}
          
    
          </div>
        
  )
}
