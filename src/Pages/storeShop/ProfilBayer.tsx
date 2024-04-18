import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Header } from './Components/Header/Header';
import { NameStore } from './Components/Header/NameStore';
import { useParams } from 'react-router-dom';


export const ProfilBayer = () => {

const params=useParams()

  const [loading,setLoading]=useState(false)
  const [seller,setSeller]=useState<any>({})


  useEffect( ()=>{
    
    setLoading(true)
       const getStoreSeller =async()=>{
         const response=await fetch(`http://localhost:8000/store/${params.storeId}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
      if (data.success == true) {
          setSeller(data.seller)  
          setLoading(false)
        }
        
      }
       getStoreSeller()
   },[])



   


  if (loading == true ) return <div>'Loading...'</div> 

 

  
   
  return (
    <div> 
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Header seller={seller} setSeller={setSeller} loading={loading}  />
        <NameStore seller={seller} />
        </Box>
    </div>
  )
}
