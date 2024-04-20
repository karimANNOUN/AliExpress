import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Cookies from 'js-cookie';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'60%',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    p:2,
  };

export const ModalOrdersDetails = ({opens,setOpens,setAnchorEl,ord,setOrder}:any) => {

    const handleClose = () => {
        setOpens(false)
        setAnchorEl(null)
    
    };

    const token = Cookies.get('token');
    const [loading,setLoading]=useState(false)

    const handelCreateOrderExpidee=async()=>{
        try {
          setLoading(true)
        const response = await fetch(`http://localhost:8000/createOrderExpidee`,{
          method: 'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({ord})
        });
        const data = await response.json()
       if (data.success == true) {
          setOrder(data.orderSeller)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }



      const handelDeleteOrderCannaled=async()=>{
        try {
          setLoading(true)
        const response = await fetch(`http://localhost:8000/deleteOrderCannaled`,{
          method: 'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({ord})
        });
        const data = await response.json()
       if (data.success == true) {
          setOrder(data.orderSeller)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }


    

  return (
    <div> 
    <Modal
    open={opens}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Thank's More Details
      </Typography>
      <Typography sx={{color:'#d500f9',ml:1,fontWeight:'700',fontFamily:'cursive'}} id="modal-modal-title" variant="h6" component="h2">
         Order 
      </Typography>
        </Box>
      
      <Divider sx={{width:'100%',mt:4}} />

      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',my:3}} >
     
      <Typography id="modal-modal-description" sx={{ color:'#d500f9' ,fontWeight:'600' }}>
        Article Détails
      </Typography>

      <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd' }}>
        approve Order more selles
      </Typography>

      </Box>

      <Paper  sx={{height:'180px',display:'flex',flexDirection:'column',p:1}} elevation={5}>

        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'60%',width:'100%'}} >
         <img alt='articledetails' src={ord.imageUrl} style={{height:'100%',width:'20%',borderRadius:'10px'}}  />

         <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd' ,fontWeight:'600',textAlign:'center' }}>
        <b style={{fontWeight:'bold'}} >Color</b> <br/>
        {ord.colorProduct}

      </Typography>


      <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd',textAlign:'center' }}>
      <b style={{fontWeight:'bold'}} >product {ord.product.properties}</b> <br/>
        {ord.propertyType}
      </Typography>


      <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd',textAlign:'center' }}>
      <b style={{fontWeight:'bold'}} >Quantity</b> <br/>
        {ord.quantity}
      </Typography>

      <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd',textAlign:'center' }}>
      <b style={{fontWeight:'bold'}} >Buyer Name</b> <br/>
        {ord.commande.buyer.name}
      </Typography>

      { ord.state == "terminees" ? <Typography sx={{fontWeight:'100',bgcolor:'#c8e6c9',color:'#66bb6a',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Dilvred
    </Typography> : "" }
   

    
    { ord.state == "non paye" ? <Typography sx={{fontWeight:'100',bgcolor:'#ffcdd2',color:'#d50000',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Cancelled
    </Typography> : "" }
   

    
    { ord.state == "expédiée" ? <Typography sx={{fontWeight:'100',bgcolor:'#bbdefb',color:'#0d47a1',textAlign:'left'}} variant='subtitle2' gutterBottom>
    expédiée
    </Typography> : "" }
  

     
    { ord.state == "En Attente" ? <Typography sx={{fontWeight:'100',bgcolor:'#fff9c4',color:'#ffd600',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Pending
    </Typography> : "" }
     

        </Box>

        <Divider sx={{width:'100%',my:2}} />


        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'60%',width:'100%'}} >
        <Typography id="modal-modal-description" variant='body1' sx={{ color:'#9e9e9e' ,fontWeight:'700' }}>
        Track Order
      </Typography>
         <Box sx={{width:'30%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
         <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd',textAlign:'center' ,fontWeight:'600' }}>
        <b style={{fontWeight:'bold'}} >Product Price</b> <br/>
        DA{ord.priceProduct}
      </Typography>

      <Typography id="modal-modal-description" variant='subtitle2' sx={{ color:'#bdbdbd',textAlign:'center' ,fontWeight:'600' }}>
        <b style={{fontWeight:'bold'}} >Delivred Price</b> <br/>
       DA{ord.priceLivraison}
      </Typography>

         </Box>
        </Box>
  
      </Paper>


      <Box sx={{mt:3,display:'flex',p:2,flexDirection:'column'}} >
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mb:4}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        Location Buyer Details
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
        Infos
      </Typography>
       </Box>

       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        Country
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
      {ord.commande.buyer.locationUser.country}
      </Typography>
       </Box>


       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        State
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
      {ord.commande.buyer.state}
      </Typography>
       </Box>



       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        Commune
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
      {ord.commande.buyer.locationUser.commune}
      </Typography>
       </Box>



       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        Rue Adress
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
      {ord.commande.buyer.locationUser.rueAdress}
      </Typography>
       </Box>



       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        Postal Code
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
      {ord.commande.buyer.locationUser.postalCode}
      </Typography>
       </Box>


       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
       Phone Number
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
      {ord.commande.buyer.locationUser.phoneNumber}
      </Typography>
       </Box>


       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:1}} >
       <Typography  variant='body1' sx={{ color:'#212121' ,fontWeight:'600' }}>
        Gender
      </Typography>

      <Typography  variant='subtitle2' sx={{ color:'#616161' ,fontWeight:'600' }}>
        {ord.commande.buyer.gender == null ? "Nothing" : ord.commande.buyer.gender }
      </Typography>
       </Box>

      </Box>



      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
       
      { ord.state == "terminees" ? <Typography sx={{fontWeight:'300',bgcolor:'#c8e6c9',color:'#66bb6a',textAlign:'left'}} variant='subtitle1' gutterBottom>
    Dilvred
    </Typography> : "" }
   

    
    { ord.state == "non paye" ? <Typography sx={{fontWeight:'300',bgcolor:'#ffcdd2',color:'#d50000',textAlign:'left'}} variant='subtitle1' gutterBottom>
    Cancelled
    </Typography> : "" }
   

    
    { ord.state == "expédiée" ? <Typography sx={{fontWeight:'300',bgcolor:'#bbdefb',color:'#0d47a1',textAlign:'left'}} variant='subtitle1' gutterBottom>
    expédiée
    </Typography> : "" }
  

     
    { ord.state == "En Attente" ?  
    <Box sx={{display:'flex',alignItems:'center'}} >
         <Button onClick={handelCreateOrderExpidee} disabled={loading==true ? true : false } sx={{bgcolor:'#d500f9',color:'white',mr:3,":hover":{bgcolor:'#d500f9',color:'white'}}} variant="text">Approve Order</Button>
         <Button onClick={handelDeleteOrderCannaled} disabled={loading==true ? true : false }  sx={{bgcolor:'#d50000',color:'white',":hover":{bgcolor:'#d50000',color:'white'}}} variant="text">Reject Order</Button>
    </Box>
    
    : "" }

      </Box>


      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-around',height:'60px',borderRadius:'10px',mt:4,bgcolor:'#9c27b0',right:0,left:0,bottom:0}} >

      <Typography sx={{fontWeight:'600',color:'#3e2723',textAlign:'left'}} variant='h5' gutterBottom>
    Prix Total
    </Typography>

    <Typography sx={{fontWeight:'700',color:'white',textAlign:'left'}} variant='h5' gutterBottom>
    DA {ord.priceProduct*ord.quantity + ord.priceLivraison }
    </Typography>

      </Box>

   
      <IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'-2%',right:'-1%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>
    </Box>
  </Modal>
  </div>
  )
}
