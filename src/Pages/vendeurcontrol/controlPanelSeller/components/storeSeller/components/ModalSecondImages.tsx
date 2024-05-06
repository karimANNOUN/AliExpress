import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {  Divider } from '@mui/material';
import Cookies from 'js-cookie';
import { CardLuneProduct } from './CardLuneProduct';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'30%',
    height:'80%',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    p:2,
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  };

export const ModalSecondImages = ({openModal1,setOpenModal1,setNewProdUsed}:any) => {



    const token = Cookies.get('token');
    const [products,setProducts]=useState<any>([])
    const [loading,setLoading]=useState(false)
    
     
    const handleClose = () => {
        setOpenModal1(false)
    };


    useEffect(()=>{

        const handelGetProductNonLune=async()=>{
          try {
            setLoading(true)
          const response = await fetch(`http://localhost:8000/productNonLune`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            }
          });
          const data = await response.json()
         if (data.success == true) {
            setProducts(data.productNonLune)
            setLoading(false) 
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }
        handelGetProductNonLune()

},[openModal1])


if (loading == true) return <div>...loading</div>
    

  return (
    <div> 
    <Modal
    open={openModal1}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>

   <Typography variant='body2' sx={{mt:1,fontWeight:'700',fontFamily:'serif'}} >  
          Add Your Product A La Lune  
        </Typography>

        <Divider sx={{width:'100%',my:1}} />
     <Box sx={{height:'100%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
      
        { products.filter((prod:any)=> prod.state !== "lune" ).length === 0 ? 
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}} >
            <DeleteOutlinedIcon sx={{fontSize:'150px',color:'#e0e0e0',mb:1}} />
          <Typography variant='body2' sx={{mt:1,fontWeight:'700',fontFamily:'serif'}} >  
         Nothings have any products 
       </Typography>
        </Box>
        : (products.filter((prod:any)=> prod.state !== "lune" ).map((prod:any)=> <CardLuneProduct key={prod.id} prod={prod} setNewProdUsed={setNewProdUsed}  setOpenModal1={setOpenModal1} setProducts={setProducts} /> )) }
      
       

     </Box>
        
           
   
      <IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'-2%',right:'-1%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>     
  
    </Box>
  </Modal>
  </div>
  )
}
