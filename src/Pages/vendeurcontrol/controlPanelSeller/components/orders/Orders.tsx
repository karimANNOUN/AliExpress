import { Box,Typography } from '@mui/material'
import  { useState } from 'react'
import Button from '@mui/material/Button';

import { PieChart } from '@mui/x-charts/PieChart';
import { Table } from './components/Table';


export const Orders = ({order,setOrder}:any) => {


    const [active,setActive]=useState(0)
   


  const filtredOrders = (ordr:any) =>{
    if (active === 0) {
        return ordr
    }if (active === 1) {
        return ordr.state == "En Attente"
    }if (active === 2) {
        return ordr.state == "expédiée"
    }if (active === 3) {
        return ordr.state == "non paye"
    }if (active === 4) {
        return ordr.state == "terminees"
    }
  }



  const calculateTotal = (order:any) =>{

    let total = 0;

    order.filter(filtredOrders).forEach((ordr:any) => {
     
        total += ordr.quantity * ordr.priceProduct
      });
 

  return total;
   
  }



  const filtredArticleTerminee = (order:any)=>{
    return  Math.floor(order.filter((prod:any)=>prod.state == "terminees").length*1000/order.length)/10
    }


    const filtredArticleExpidee = (order:any)=>{
        return  Math.floor(order.filter((prod:any)=>prod.state == "expédiée").length*1000/order.length)/10
        }


        const filtredArticleEnAttente = (order:any)=>{
            return  Math.floor(order.filter((prod:any)=>prod.state == "En Attente").length*1000/order.length)/10
            }


            const filtredArticleAnnuler = (order:any)=>{
                return  Math.floor(order.filter((prod:any)=>prod.state == "non paye").length*1000/order.length)/10
                }



  return (
   
      <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Orders
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',mb:2,borderRadius:'6px',p:1}} >

                <Button 
                onClick={()=>setActive(0)} 
                sx={
                  active === 0 ?
                  {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}} :
                  {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
                } 
                variant="text">
                  All Orders
                  </Button>

            
        

                <Button 
                onClick={()=>setActive(1)} 
                sx={
                  active === 1 ?
                  {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
                  {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
                } 
                variant="text">En Attente
                </Button>

              

            
            
        <Button 
        onClick={()=>setActive(2)} 
        sx={active === 2 ?
          {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
          {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
        } 
        variant="text"
        >
        Expideé
        </Button>
       
         
        <Button 
        onClick={()=>setActive(3)} 
        sx={
          active === 3 ?
          {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
          {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
        } 
        variant="text"
        >
        refusé
        </Button>
       

        <Button 
        onClick={()=>setActive(4)} 
        sx={
          active === 4 ?
          {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
          {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
        } 
        variant="text"
        >
        Terminée
        </Button>
       

       
    </Box> 

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',my:2,borderRadius:'6px',p:1}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Total Prix Orders (${calculateTotal(order)})
    </Typography>
    </Box>
   

    <Box sx={{display:'flex',flexDirection:'column',bgcolor:'Window',maxHeight:'500px',overflow:'auto',borderRadius:'6px',p:1}} >
    <Box sx={{display:'flex',width:'100%',height:'15px',mb:2,alignItems:'center',justifyContent:'space-between'}} >
    <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
        <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    ID
    </Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    name Buyer
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Email Buyer
    </Typography>
     </Box>
     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Price
    </Typography>
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',color:'black',textAlign:'left'}} variant='subtitle2' gutterBottom>
    State Livraison
    </Typography>
   
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
     date
    </Typography>
      </Box>
      <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
     More Détails
    </Typography>
      </Box>
      </Box>
       { order.filter(filtredOrders).length === 0 ? 
        <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant='body2' gutterBottom>
        Nothing Orders(0)
</Typography>
       : order.filter(filtredOrders).map( (ord:any)=> <Table key={ord.id} ord={ord} setOrder={setOrder} /> )}
        </Box>



      <Box sx={{isplay:'flex',flexDirection:'column',bgcolor:'Window',borderRadius:'6px',p:1,mt:2}} >
      <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography id="modal-modal-title" variant="h6" component="h2">
        More Details Statistics 
      </Typography>
      <Typography sx={{color:'#d500f9',ml:1,fontWeight:'700',fontFamily:'cursive'}} id="modal-modal-title" variant="h6" component="h2">
         Orders 
      </Typography>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
          <Box sx={{width:'30%'}} >
          <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
     all statistcs for orders seller 
    </Typography>
          </Box>

          <PieChart
      series={[
        {
          data: [
            { id:1, value:filtredArticleTerminee(order), label:`Terminee`,color:'#66bb6a'  },
            { id:2, value:filtredArticleExpidee(order), label:`Expidée`,color:'#0d47a1' },
            { id:3, value:filtredArticleEnAttente(order), label:`En Attente`,color:'#ffd600' },
            { id:4, value:filtredArticleAnnuler(order), label:`Refusé`,color:'#d50000' },
          ]
        },
      ]}
      width={400}
      height={200}
    />

        </Box>
      </Box>






    </Box>
  
  )
}
