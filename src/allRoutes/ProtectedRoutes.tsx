import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../storeRedux/CartSlice';


  



export const ProtectedRoutes  = ({children}:any) => {

    const [loading,setLoading]=useState(false)

    const dispatch=useDispatch()

    const token=Cookies.get('token')

   

    useEffect(()=>{
        if (token !== "" ) {
            const getUser=async()=>{
              const response=await fetch('http://localhost:8000/user', {
               method: 'GET',
               credentials: 'include', 
               headers: {
                 'Content-Type': 'application/json', 
                  authorization:`${token}`
               },
             })
             const data = await response.json()
             
             if (!data) {
              setLoading(true)
             }
            if (data.success == true) {
              setLoading(false)
              dispatch(setUser(data.user.user))
              
            }
            
            }
            getUser()   
          }
    },[])

    
  

   
  if (loading == true ) {
    return null
   }else{
    return (token !== undefined  ) ? children : <Navigate to="/login"/>
   } 

    
   
   
}