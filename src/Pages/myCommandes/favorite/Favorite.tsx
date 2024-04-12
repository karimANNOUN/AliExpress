import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CompteListe } from '../components/CompteListe';
import { ProductAimiez } from '../components/ProductAimiez';
import { CardFavorit } from './components/CardFavorit';
import { EmpltyCard } from './components/EmpltyCard';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setFavoritProducts } from '../../../storeRedux/CartSlice';
import Skeleton from '@mui/material/Skeleton';
export const Favorite = () => {
   

    const [loading,setLoading]=useState(false)
  
    const dispatch = useDispatch()
  
     const token = Cookies.get('token');

    useEffect(()=>{
      setLoading(true)
      const handelgetFavoritProduct=async()=>{
        const response = await fetch(`http://localhost:8000/getfavoritproduct`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },  
        });
        const data = await response.json()
     
       if (data.success == true) {
          dispatch(setFavoritProducts(data.favoritProducts))
          setLoading(false) 
        }
       }

    handelgetFavoritProduct()

    },[])


    const favoritLists=useSelector((state:any)=>state.app.favoritProducts)
  

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
      {loading == true ? 
      <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
      <Skeleton variant="rectangular" width={210} height='60px' />
     </Box>
      :
      
      <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                   <Box sx={{width:'100%',bgcolor:'Window',display:'flex',alignItems:'center',my:2,p:1}} >
                    
                     <Button variant='text' sx={{color:'black',textTransform:'lowercase' , borderBottom:'4px solid #616161', borderRadius: '8px 8px 0 0' ,":hover":{color:'black'} }} >
                   Tous les articles ({!favoritLists ? 0 : favoritLists.length })
                  </Button> 


                


                  

                   </Box>


                      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                        
                            { !favoritLists   ?  
                                 
                                 <EmpltyCard/>

                               :
                               <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >
                               {favoritLists.map((favorit:any)=><CardFavorit key={favorit.id} favorit={favorit} />)}
                               </Box>
                            
                         }
                        
                      </Box>



                      <ProductAimiez/>


       </Box>
    </Box>
      
      }
       
    </div>
  )
}
