import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const LisenceCommercial = () => {

    const seller=useSelector((state:any)=>state.app.seller)

    

  return (
    <div>
        <Box sx={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',py:1}} >
         <img src={seller.entrepriseInfo.certificatEntreprise} style={{width:'40%',height:'100%'}} alt='lisence' />
        </Box>
    </div>
  )
}
