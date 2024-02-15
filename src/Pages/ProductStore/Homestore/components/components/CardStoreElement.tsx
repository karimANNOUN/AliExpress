import React,{useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritProducts, setProductStore, setProducts, setStorePayer } from '../../../../../storeRedux/CartSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
    
  });

export const CardStoreElement = ({prod}:any) => {


    const [show,setShow]=useState(false)

    const [count,setCount]=useState(1)

    const dispatch = useDispatch()

    const [loading,setLoading]=useState(false)

    const [message,setMessage]=useState('')

    const [fav,setFav]=useState(false)

    const [quantity,setQuantity]=useState(1)

   const token = Cookies.get('token');

   const [openAlert, setOpenAlert] = useState(false);


   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };


    const handleDeleteStoreProducts = async () => {
        try {
         
          const response = await fetch(`http://localhost:8000/deletestoreproduct`,{
            method: 'DELETE',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body: JSON.stringify({ prod }),
           
          });
        
          const data = await response.json()
       
    
          if (!data) {
            setLoading(true)
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }
          if (data.success == true) {
            dispatch(setProductStore(data.storeProductUser))
            setLoading(false)    
          } 
         
        
        } catch (error) {
          console.error('operation failed.');
        }
      };



      const handelFavoritProduct=async()=>{
        const art=prod.product
        try {
         
        const response = await fetch(`http://localhost:8000/favoritproduct`,{
          method: 'POST',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body: JSON.stringify({ art }),
         
        });
        const data = await response.json()
        if (!data) {
          setLoading(true)
        }if (data.success == true) {
          dispatch(setProductStore(data.storeProductUser))
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }

 
      const productStore=useSelector((state:any)=>state.app.productStore)

      
    useEffect(()=>{
        const handelgetFavoritProduct=async()=>{
          const response = await fetch(`http://localhost:8000/getfavoritproduct`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },  
          });
          const data = await response.json()
          
       
          if (!data) {
            setLoading(true)
          }if (data.success == true) {
            dispatch(setFavoritProducts(data.favoritProducts))
            setLoading(false) 
          }
         }
  
      handelgetFavoritProduct()
  
      },[productStore])


      useEffect(()=>{
        const handelgetStorePayerProduct=async()=>{
          const response = await fetch(`http://localhost:8000/getstorepayer`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },  
          });
          const data = await response.json()
          
       
          if (!data) {
            setLoading(true)
          }if (data.success == true) {
            dispatch(setFavoritProducts(data.findStorPayer))
            setLoading(false) 
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }  
         }
  
      handelgetStorePayerProduct()
  
      },[])


  
  
      const favoritLists=useSelector((state:any)=>state.app.favoritProducts)
  


   

   

      useEffect(()=>{

        const findProductFavorit = favoritLists.find((fav:any)=> fav.productfavoritId === prod.productstoreId)
       
        if (findProductFavorit) {
            setFav(true)
        }if (!findProductFavorit) {
            setFav(false)
        }

      },[productStore,favoritLists])


      

      const handelDeleteFavoritProduct=async()=>{
        const art=prod.product
        try{
        const response = await fetch(`http://localhost:8000/deletefavoritproduct`,{
          method: 'DELETE',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body: JSON.stringify({ art }),
         
        });
        const data = await response.json()
      
        if (!data) {
          setLoading(true)
        }if (data.success == true) {
         dispatch(setProductStore(data.storeProductUser))
          setLoading(false) 
        }if (data.success == false) {
          setMessage(data.message)
          setOpenAlert(true)
        }  
      } catch (error) {
        console.error('operation failed.');
      }
       
      }




      const handelCreatPayerProduct=async()=>{
        try{
        const response = await fetch(`http://localhost:8000/creatpayerproduct`,{
          method: 'POST',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body: JSON.stringify({ prod ,count }),
         
        });
        const data = await response.json()
       console.log(data)
        
        if (!data) {
          setLoading(true)
        }if (data.success == true) {
         dispatch(setStorePayer(data.findStorPayer))
          setLoading(false) 
          setShow(true)
        }if (data.success == false) {
          setMessage(data.message)
          setOpenAlert(true)
        }  
      } catch (error) {
        console.error('operation failed.');
      }
       
      }

      const storePayer=useSelector((state:any)=>state.app.storePayer)

      

      

      

      const checkedProduct = storePayer.find((fav:any)=> fav.productstoreId === prod.product.id ) 

      

      useEffect(()=>{

        if (checkedProduct) {
          setShow(true)
          const quantityStorePayerProduct=storePayer.find((quantity:any)=>quantity.productstoreId === prod.product.id)
          setQuantity(quantityStorePayerProduct.quantity)
        }else{
          setShow(false)
        } 

        

    
 
      },[storePayer])



   const handelUpdateAddNewQuantity=async()=>{

    if (checkedProduct) {
      const handelAddQuantity=async()=>{
        try{
          const response = await fetch(`http://localhost:8000/updateaddquantity`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body: JSON.stringify({ quantity ,prod }),
           
          });
          const data = await response.json()

          if (!data) {
            setLoading(true)
          }if (data.success == true) {
           dispatch(setStorePayer(data.findStorPayer))
            setLoading(false) 
            setShow(true)
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }  
        } catch (error) {
          console.error('operation failed.');
        }
      }
      handelAddQuantity()
    }else{
      setQuantity(quantity+1)
    }
   }
     

   const handelUpdateMoinNewQuantity=async()=>{

    if (checkedProduct) {
      const handelAddQuantity=async()=>{
        try{
          const response = await fetch(`http://localhost:8000/updatemoinquantity`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body: JSON.stringify({ quantity ,prod }),
           
          });
          const data = await response.json()

          if (!data) {
            setLoading(true)
          }if (data.success == true) {
           dispatch(setStorePayer(data.findStorPayer))
            setLoading(false) 
            setShow(true)
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }  
        } catch (error) {
          console.error('operation failed.');
        }
      }
      handelAddQuantity()
    }else{
      setQuantity(quantity-1)
    }
   }




  
      const handelDeleteStorePayer=async()=>{
        try{
          const response = await fetch(`http://localhost:8000/deletestorepayer`,{
            method: 'DELETE',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body: JSON.stringify({ prod }),
           
          });
          const data = await response.json()

          if (!data) {
            setLoading(true)
          }if (data.success == true) {
           dispatch(setStorePayer(data.findStorPayer))
            setLoading(false) 
            setShow(true)
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }  
        } catch (error) {
          console.error('operation failed.');
        }
      }
   



  return (
    <Box  sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >

      {
       loading == true ?
       <CircularProgress color="inherit" /> :

       ""
    
        }

<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

    <Box sx={{display:'flex',alignItems:'center',width:'100%',my:2}} >
       
       { !show ?

<IconButton onClick={handelCreatPayerProduct} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

       :  <IconButton onClick={handelDeleteStorePayer} sx={{width:'23px',ml:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
           <CheckIcon sx={{fontSize:'17px',color:'white'}} />
       </IconButton>
       
       }

     <Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href="#" underline="none">
     
    {prod.productStoreName} boutique Store
  </Link>

                </Box>
    
                <Box sx={{display:'flex',alignItems:'center',width:'100%'}} >
       
       { !show ?

<IconButton onClick={handelCreatPayerProduct} sx={{width:'23px',height:'23px',mx:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

       :  <IconButton onClick={handelDeleteStorePayer} sx={{width:'23px',mx:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
           <CheckIcon sx={{fontSize:'17px',color:'white'}} />
       </IconButton>
       
       }

    <img src={prod.imageUrl} style={{width:'110px',height:'130px',borderRadius:'8px'}} />
    <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%',px:2}} >
      <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
      <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href={`/${prod.productstoreId}`} underline="none">
       
      {prod.product.title}

   </Link>
   <Box sx={{display:'flex',alignItems:'center'}} >
    {fav == false ? 
    <IconButton  onClick={handelFavoritProduct} ><FavoriteBorderIcon sx={{fontSize:'18px',color:'black',":hover":{color:'#ff5722'}}} /></IconButton>
    : <IconButton onClick={handelDeleteFavoritProduct} ><FavoriteBorderIcon sx={{fontSize:'18px',color:'#ff5722',":hover":{color:'#ff5722'}}} /></IconButton> }
   
     <IconButton onClick={handleDeleteStoreProducts} ><DeleteIcon sx={{fontSize:'18px',":hover":{color:'#ff5722'}}} /></IconButton>
     </Box>
      </Box>

    <Button variant='outlined' sx={{border:'1px solid #f5f5f5 ',width:'250px',color:'black',fontSize:'8px',fontWeight:'700' ,borderRadius:'14px' ,bgcolor:'#e0e0e0',":hover":{color:'black',border:'1px solid #f5f5f5 ',bgcolor:'#e0e0e0'} }} >
        {prod.propertyType}
    </Button>

    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:1}} >
    <Typography variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
       
    US ${ prod.product.solde === 0 ? prod.product.price : ((prod.product.price) - (prod.product.price*prod.product.solde/100))}
       
                    </Typography>
          <Box sx={{display:'flex',alignItems:'center'}} >
       {quantity <=  0 ?  <IconButton onClick={()=>setCount(count-1)} disabled sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<RemoveIcon sx={{fontSize:'10px'}} />
</IconButton>  : <IconButton onClick={handelUpdateMoinNewQuantity} sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<RemoveIcon sx={{fontSize:'10px'}} />
</IconButton> } 
<Typography sx={{fontWeight:'700',textAlign:'left',mx:1}}  variant='caption' gutterBottom>
{quantity}
</Typography>
 {quantity === prod.quantity ?  <IconButton onClick={()=>setCount(count+1)} disabled sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}}>
<AddIcon sx={{fontSize:'13px'}} />
</IconButton> :
<IconButton onClick={handelUpdateAddNewQuantity} sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}}>
<AddIcon sx={{fontSize:'13px'}} />
</IconButton>
}
          </Box>
    </Box>


    <Typography variant='caption' sx={{color:'#ff5722',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} >
       
       { prod.product.solde === 0 ? "" : `US $ ${prod.product.price*prod.product.solde/100} économisés sur le prix d'origine`}
          
               </Typography>


   <Box sx={{width:'100%',display:'flex'}} >
    <Button variant='text' sx={{color:'#bdbdbd',fontSize:'14px',fontWeight:'100' ,":hover":{color:'#bdbdbd'} }} >
          { prod.product.prixlivraison === 0 ?  "Livraison gratuite" : `$ ${prod.product.prixlivraison}`  }
    </Button>
    </Box>
    </Box>

                </Box>

         

    </Box>
  )
}
