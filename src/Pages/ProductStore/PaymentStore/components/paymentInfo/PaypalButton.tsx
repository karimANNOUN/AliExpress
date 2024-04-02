import React, { useEffect, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

export const PaypalButton = ({totalLivraisonPrice,totalPrice,setMessage,setPayment,setOpens}:any) => {

 


    const initialOptions = {
        clientId:"ARj9wu3zlNZXpnvzOl4h7q5iCRjQPKNJVRUKfvT59q8uuj8D4OWMANdZu-TifZzW88_2X1fD99XJZu3T",
        currency: "USD",
        intent: "capture",
    };

    const token = Cookies.get('token');

    const storePayer=useSelector((state:any)=>state.app.storePayer)

   

    const [loading,setLoading]=useState(false)



   const  createOrder = (data:any) => {
 
    return fetch(`http://localhost:8000/create-paypal-order`, {
      method: "POST",
      credentials:"include",
       headers: {
        "Content-Type": "application/json",
        authorization:`${token}`
      },
      
      body: JSON.stringify({storePayer,totalPrice,totalLivraisonPrice}),
    })
    .then( async (response) => await response.json())
    .then( async (order:any) => await order.id);
  };


  const onApprove = async (data:any) => {
    
     const response = await fetch(`http://localhost:8000/capture-paypal-order`, {
      method: "POST",
      credentials:"include",
       headers: {
        "Content-Type": "application/json",
        authorization:`${token}`
      },
      body: JSON.stringify({
        orderID: data.orderID,
        storePayer,
        totalPrice,
        totalLivraisonPrice
      })
    })
  
// eslint-disable-next-line
    const dataCapture= await response.json()

    if (!dataCapture) {
      setLoading(true)
    }

    if (dataCapture.success == true) {
      setLoading(false)
      setMessage(dataCapture.message)
      setPayment(true)
      setOpens(true)
    }if(dataCapture.success == false){
      setMessage(dataCapture.message)
      setPayment(false)
      setOpens(true)
    }

   
   
//   navigate('/dashboard')
   
  };
   

  
    


  return (
  
  <>

    {
      loading == true ? "loading" : 
      <PayPalScriptProvider  options={initialOptions}>
         
      <PayPalButtons 
  createOrder={(data) => createOrder(data)}
  onApprove={(data) => onApprove(data)}
 style={{ layout: 'vertical' ,height:54 , label:  'buynow' }} 
 forceReRender={[{ layout: 'vertical' ,height:54 , label:  'buynow' }]} 
 />

 </PayPalScriptProvider>
    }

    </>
  
  )
}
