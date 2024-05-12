import { Box,Typography } from '@mui/material'
import  { useState } from 'react'
import Button from '@mui/material/Button';
import {calculateTotal,filtredArticleTerminee,filtredArticleExpidee,filtredArticleEnAttente,filtredArticleAnnuler} from './components/FunctionOrder'
import { PieChart } from '@mui/x-charts/PieChart';
import { TableAllOrder } from './components/TableAllOrder';


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
    Total Prix Orders (DA{calculateTotal(order)})
    </Typography>
    </Box>
   

    <TableAllOrder order={order} setOrder={setOrder} active={active} />



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
