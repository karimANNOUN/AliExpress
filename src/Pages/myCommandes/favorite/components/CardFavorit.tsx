import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setFavoritProducts } from '../../../../storeRedux/CartSlice';
export const CardFavorit = ({favorit}:any) => {

    const navigate=useNavigate()
    const dispatch = useDispatch()

    const [loading,setLoading]=useState(false)
  
     const token = Cookies.get('token');

    const handelDeleteFavoritLists=async()=>{
      try{
      const response = await fetch(`http://localhost:8000/deletefavoritlist`,{
        method: 'DELETE',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        },
        body: JSON.stringify({ favorit }),
       
      });
      const data = await response.json()
      if (!data) {
        setLoading(true)
      }if (data.success == true) {
        dispatch(setFavoritProducts(data.products))
        setLoading(false) 
      }

    } catch (error) {
      console.error('operation failed.');
    }
     
    }

  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',p:1,width:'100%'}} >
      
                         <Box sx={{display:"flex",alignItems:'flex-start'}} >

                         <img src={favorit.product.images[0].imageUrl} style={{width:'200px',height:'200px'}} />
                                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',height:'100%',ml:1}} >
                                            <Typography sx={{color:'black',fontWeight:'500',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                
                                               {favorit.product.title}
                                            </Typography>   

                                            <Typography sx={{color:'#bdbdbd',fontWeight:'500',mb:2,textAlign:'left'}}  variant='caption' gutterBottom>
                                
                                            105 orders
                            </Typography>   


                            <Typography sx={{color:'black',fontWeight:'500',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                
                            DA{favorit.product.price*favorit.product.solde/100}
                            </Typography>  


                            { favorit.product.solde == 0 ? "" : <Typography sx={{color:'#f4511e',fontWeight:'500',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                
                            -{favorit.product.solde}% depuis l'ajout

                            </Typography>}  




                                        </Box>

                         </Box>
                                   
                                  
                                  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'40%',ml:2}} >
                                    
                                  <Button  variant='outlined' sx={{color:'black',width:'100%',mb:2,borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'} }} >
                        Ajouter Au Panier
                       </Button>

                        <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
                        <Button onClick={()=>navigate("/")} variant='text' sx={{color:'black',width:'48%',borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'}}} >
                        Plus
                       </Button>
                       <Button onClick={handelDeleteFavoritLists}  variant='text' sx={{color:'black',width:'48%',borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'} }} >
                       Suprimer
                       </Button>
                        </Box>

                                  </Box>



                                        </Box>
  )
}
