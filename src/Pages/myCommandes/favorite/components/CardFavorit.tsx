import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setFavoritProducts, setProductStore } from '../../../../storeRedux/CartSlice';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
export const CardFavorit = ({favorit}:any) => {

    const navigate=useNavigate()
    const dispatch = useDispatch()

    const [loading,setLoading]=useState(false)
    const [findStore,setFindStore]=useState(false)
  
     const token = Cookies.get('token');

     useEffect(()=>{
      console.log(favorit)
     },[])

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
        dispatch(setFavoritProducts(data.favoritProducts))
        setLoading(false) 
      }

    } catch (error) {
      console.error('operation failed.');
    }
     
    }



    const handleDeleteStoreProducts = async () => {

      const prod=favorit

      try {
       
        const response = await fetch(`http://localhost:8000/deletestoreproduct`,{
          method: 'DELETE',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body: JSON.stringify({ prod }),
         
        });
      
        const data = await response.json()
     
  
        if (!data) {
          setLoading(true)
        }if (data.success == false) {
          setLoading(true)
        }
        if (data.success == true) {
          dispatch(setProductStore(data.storeProductUser))
          setLoading(false)    
        } 
       
      } catch (error) {
        console.error('operation failed.');
      }
    };

    const productStore= useSelector((state :any) =>state.app.productStore)

    
  
    const favoritLists=useSelector((state:any)=>state.app.favoritProducts)
  


    const findStoreProduct = productStore.find((str:any)=> str.productstoreId === favorit.product.id)


    useEffect(()=>{


      if (findStoreProduct) {
        setFindStore(true)
    }if (!findStoreProduct) {
        setFindStore(false)
    }

    },[findStoreProduct,productStore])

  return (
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',p:1,width:'100%'}} >
      
                         <Box sx={{display:"flex",alignItems:'flex-start'}} >

                         <img src={favorit.product.images[0].imageUrl} style={{width:'200px',height:'200px'}} />
                                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',height:'100%',ml:1}} >
                                            <Typography sx={{color:'black',fontWeight:'500',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                
                                               {favorit.product.title}
                                            </Typography>   

                                            <Typography sx={{color:'#bdbdbd',fontWeight:'500',mb:2,textAlign:'left'}}  variant='caption' gutterBottom>
                                
                                            {!favorit.product.article.length ? "0" : favorit.product.article.length } orders
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
                                  {findStore == false ?  
                                  <Button onClick={()=>navigate(`/${favorit.product.id}`)} variant='outlined' sx={{color:'black',width:'100%',mb:2,borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'} }} >
                        Ajouter Au Panier
                       </Button>:
                                <Button onClick={handleDeleteStoreProducts} variant='contained' sx={{color:'white',bgcolor:'#ff5722',width:'100%',mb:2,borderRadius:'30px' ,textTransform:'lowercase' ,":hover":{color:'white',bgcolor:'#ff5722'} }} >
                              <DeleteOutlinedIcon/>  Delete from Store
                               </Button>
                                  }

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
