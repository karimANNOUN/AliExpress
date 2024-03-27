import React from 'react'
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

export const PaypalButton = ({totalLivraisonPrice,totalPrice}:any) => {

 

    const initialOptions = {
        clientId:`Ad-Y6b0hsigUuohl-t0oFegFbeslLkprZ3HAGBrf_FZfsjCjEkNPqpSDUrR-WXVxZDyrWlvCd55nSvtH`,
        currency: "USD",
        intent: "capture",
    //    dataClientToken:`EEbftGjrW-3pH1CXTy9U0bluqbUBW_tI59XU7QAMGDoXy32vFmpOyyzqa2XGzh69ZlwN_1QZzOcJCLlW`,
        
    };

  
    const token = Cookies.get('token');

    const storePayer=useSelector((state:any)=>state.app.storePayer)




  const createOrder = (data:any) => {
 
    return fetch(`http://localhost:8000/create-paypal-order`, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
        authorization:`${token}`
      },
      
      body: JSON.stringify({storePayer,totalPrice,totalLivraisonPrice}),
    })
    .then((response) => response.json())
    .then((order) => order.id);
  };


  const onApprove = async (data:any) => {
    
     const response = await fetch(`http://localhost:8000/capture-paypal-order`, {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
        authorization:`${token}`
      },
      body: JSON.stringify({
        orderID: data.orderID
      })
    })
  
// eslint-disable-next-line
    const datas= await response.json()
   
//   navigate('/dashboard')
   
  };
   


  return (
    <PayPalScriptProvider  options={initialOptions}>
         
         <PayPalButtons 
     createOrder={(data) => createOrder(data)}
     onApprove={(data) => onApprove(data)}
    style={{ layout: "vertical" ,height:45 , label:  'pay' }} 
   
    />

    </PayPalScriptProvider>
  )
}
