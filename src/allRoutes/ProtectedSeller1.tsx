import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../storeRedux/CartSlice';

export const ProtectedSeller1 = ({children}:any) => {
    const [loading,setLoading]=useState(false)
    const dispatch=useDispatch()

    const token=Cookies.get('token')

    const [user,setUser]=useState <any> ({})

    useEffect(()=>{
        
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
            //  dispatch(setUser(data.user.user))
               setUser(data.user.user)
            }
            
            }
            getUser()   
          
    },[])

  //  const user=useSelector((state:any)=>state.app.user)

   // console.log(user)


    
    


   
   

   if (loading == true ) {
    return null
   }else{
    return (user.role == "seller attente1" ) ? children : <Navigate to="/login"/>
   } 
   
  
}
