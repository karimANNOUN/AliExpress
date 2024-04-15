import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const LisenceCommercial = () => {

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


  if (loading == true) return <div>'Loading...'</div> 

  return (
    <div>
       <Box sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',py:1}} >
       <img src={seller.entrepriseInfo.certificatEntreprise} style={{width:'40%',height:'100%'}} alt='lisence' />
      </Box>
    </div>
  )
}
