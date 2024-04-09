import Box from '@mui/material/Box';
import { Header } from '../Header/Header';
import { VendeurRating } from './Components/VendeurRating';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setReviews } from '../../../../storeRedux/CartSlice';
export const AvisVendeur = () => {

  const [loading,setLoading]=useState(Boolean)
  

  const params=useParams()
  const dispatch =useDispatch()

  useEffect( ()=>{
      
    setLoading(true)
    const getSellerReviews =async()=>{
      await fetch(`http://localhost:8000/getReviewsSeller/${params.storeId}`, {
       method: 'GET',
       credentials: 'include', 
       headers: {
         'Content-Type': 'application/json',

       },
     })
     
     .then(async response => await response.json() )
     .then( data => {
    if (data.success == true) {
        dispatch(setReviews(data.getReviewsSeller))         
        setLoading(false)
    }

     } ).catch(error=> console.error('Error fetching data:', error))

     
     
   }
    getSellerReviews()


  },[])


 

  if (loading == true ) return <div>'Loading...'</div> 


  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
         <Header />
         <VendeurRating />
    </Box>
  )
}
