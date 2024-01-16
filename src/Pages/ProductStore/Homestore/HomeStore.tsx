import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ProductAimerais } from './components/ProductAimerais';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { EmptyStore } from './components/EmptyStore';
import { CardPaymentStore } from './components/CardPaymentStore';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setProductStore } from '../../../storeRedux/CartSlice';

export const HomeStore = () => {

  const [show,setShow]=useState(false)

  const products=[
    {id:1,name:'kimou'},{id:2,name:'8'},{id:3,name:'7'},{id:4,name:'4'},{id:5,name:'kimou'},{id:6,name:'kimou'},{id:7,name:'kimou'},{id:8,name:'kimou'},{id:9,name:'kimou'},{id:10,name:'kimou'},{id:11,name:'kimou'}
  ]


  const token = Cookies.get('token');

  

  const dispatch=useDispatch()
  const [loading,setLoading]=useState(false)



  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % products.length);
  };

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 6 + products.length) % products.length);
  };



  useEffect(()=>{
    const handleStoreProducts = async () => {
      try {
       
        const response = await fetch(`http://localhost:8000/getstoreproduct`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
      
        const data = await response.json()
      
        if (!data) {
          setLoading(true)
        }
        if (data.success == true) {
          dispatch(setProductStore(data.storeProductUser))
          setLoading(false)
         
          
        } 

      }catch(error) {
        console.error('operation failed.');
        } }
        handleStoreProducts()

   },[])

   const productsStore=useSelector((state:any)=>state.app.productStore)

  

  return (
   <Box sx={{width:'100%',bgcolor:'#eeeeee',display:'flex',flexDirection:'column',alignItems:'center'}} >
      
  
      
      { loading == true ? "loading" :  (productsStore.length === 0 ? <EmptyStore/> : <CardPaymentStore productsStore={productsStore} />)}

   <Box sx={{display:'flex',flexDirection:'column',width:'100%',bgcolor:'Window'}} >
   <Typography variant='h6' sx={{color:'black',fontWeight:'700',textAlign:'left',ml:2,my:2,":hover":{color:'black'}}} >
   Vous aimerez aussi
                     </Typography>
    <Box sx={{width:'100%',bgcolor:'Window',display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden',mb:2,position:'relative'}} >
       {products.slice(currentIndex, currentIndex + 6).map(product=><ProductAimerais key={product.id} product={product} />)}


       <IconButton onClick={handleClickLeft}  sx={{position:'absolute',width:'40px',top:'45%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronLeftIcon sx={{fontSize:'40px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton>
          <IconButton onClick={handleClickRight} sx={{position:'absolute',top:'45%',width:'40px',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronRightIcon sx={{fontSize:'40px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton> 


    </Box>
    </Box>







    </Box>
  )
}




 
