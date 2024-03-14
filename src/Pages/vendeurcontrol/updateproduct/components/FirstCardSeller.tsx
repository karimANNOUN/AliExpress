import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'js-cookie';
import TextField from '@mui/material/TextField';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { styled } from '@mui/material/styles'; 
import Button from '@mui/material/Button';
import { LinearProgress } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
import { setProductSeller } from '../../../../storeRedux/CartSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

  
});

export const FirstCardSeller = ({activeSize,setActiveSize,indexs,setIndexs}:any) => {

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    
      const product=useSelector((state:any)=>state.app.productSeller)

    const [currentIndex, setCurrentIndex] = useState(0);

    const [openAlert, setOpenAlert] = useState(false);
    const [message,setMessage]=useState('')

    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };

   

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
      setAnchorEl1(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };

    const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
    const open3 = Boolean(anchorEl3);
    const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
      setAnchorEl3(null);
    };

    const [description,setDescription]=useState('')
    const [prix,setPrix]=useState(0)
    const [solde,setSolde]=useState(0)



    const [productColorImage1,setProductColorImage1]=useState<File | null>()
    const [uploadProgress1, setUploadProgress1] = useState(0);
    const [image1, setImage1] = useState<string | null | any >(null);
    const [color1,setColor1]=useState('')
    const [hiden1,setHiden1]=useState(false)
    const [quantity,setQuantity]=useState(0)
    const [properties,setProperties]=useState({})
    const [type,setType]=useState({})
    const [loading,setLoading]=useState(false)
    const [alert,setAlert]=useState(false)

    const dispatch=useDispatch()

 

    const handleChangeImageProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductColorImage1(e.target.files?.[0] || null )
    
        
    
       const file =e.target.files?.[0] 
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            if (e.target && e.target.result) {
              const progress = Math.round((e.loaded / e.total ) * 100);
              setUploadProgress1(progress)
              setImage1(e.target.result as string);
              setHiden1(true)
             
            }
          };
    
          reader.readAsDataURL( file);
        }
    
      };
    


    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 6) % product.images.filter((img:any)=> img.color !== 'imageDescription').length);
      };
    
      const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 6 + product.images.filter((img:any)=> img.color !== 'imageDescription').length) % product.images.filter((img:any)=> img.color !== 'imageDescription').length);
      };

      const token = Cookies.get('token');

      


      useEffect(()=>{
        const prod = product.images.filter((img:any)=>  img.color !== 'imageDescription')[indexs]
        const typeSize=product.property[activeSize];
        setProperties(prod)
        setType(typeSize)
      },[indexs,activeSize])


      const handelUpdateProductPrice=async()=>{
        try {
         
        const response = await fetch(`http://localhost:8000/updateprice`,{
          method: 'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({ prix , product }),
        });
        const data = await response.json()

        
        if (!data) {
          setLoading(true)
        } if (data.success == false) {
          setOpenAlert(true)
          setAlert(false)
          setMessage(data.message)
        }
        if (data.success == true) {
          setOpenAlert(true)
          setAlert(true)
          setMessage(data.message)
          dispatch(setProductSeller(data.productSeller))
          setLoading(false)
          handleClose2()
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }



      
      const handelUpdateSolde=async()=>{
        try {
         
        const response = await fetch(`http://localhost:8000/updatesolde`,{
          method: 'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({ solde , product }),
        });
        const data = await response.json()

        
        if (!data) {
          setLoading(true)
        } if (data.success == false) {
          setOpenAlert(true)
          setAlert(false)
          setMessage(data.message)
        }
        if (data.success == true) {
          setOpenAlert(true)
          setAlert(true)
          setMessage(data.message)
          dispatch(setProductSeller(data.productSeller))
          setLoading(false)
          handleClose3()
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }




      const handelUpdateDescription=async()=>{
        try {
         
        const response = await fetch(`http://localhost:8000/updatedescription`,{
          method: 'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({ description , product }),
        });
        const data = await response.json()

        
        if (!data) {
          setLoading(true)
        } if (data.success == false) {
          setOpenAlert(true)
          setAlert(false)
          setMessage(data.message)
        }
        if (data.success == true) {
          setOpenAlert(true)
          setAlert(true)
          setMessage(data.message)
          dispatch(setProductSeller(data.productSeller))
          setLoading(false)
          handleClose1()
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }





      const handelUpdateImages=async()=>{
        try {


          const formData : any = new FormData();

          formData.append(`file`, productColorImage1);
          formData.append(`color`, color1);
          formData.append('quantity',quantity);
          formData.append('properties', JSON.stringify(properties));
          formData.append('type', JSON.stringify(type));

          axios.put(`http://localhost:8000/updatedimages`,formData, {
            withCredentials:true,
            headers:{authorization:`${token}`},
          }) 
          .then(res=> {
            if (!res.data) {
              setLoading(true)
            }
            if (res.data.success == false) {
              setOpenAlert(true)
              setAlert(false)
              setMessage(res.data.message)
            }if (res.data.success == true) {
              setOpenAlert(true)
              setAlert(true)
              setMessage(res.data.message)
              dispatch(setProductSeller(res.data.productSeller))
              setLoading(false)
              handleClose()
            }
          } )
          .catch(err=>console.log(err)) 
         
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }

     

  return (
    <Box sx={{display:'flex'}} >

<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleCloseAlert} severity={ alert == false ? "error" : "success" } sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

    <Box sx={{display:'flex',flexDirection:'column',width:'500px',height:'600px',mr:4}} >
      
      <Box sx={{display:'flex',width:'500px',height:'500px',borderRadius:'8px',position:'relative'}} >
      <img src={ !product ? "" : product.images.filter((img:any)=>  img.color !== 'imageDescription')[indexs].imageUrl} style={{width:'100%',height:'100%',borderRadius:'8px'}}  />

      <IconButton sx={{position:'absolute',top:'0',right:'0'}} onClick={handleClick} >
    <MoreHorizIcon sx={{fontSize:'20px'}} />
    </IconButton>

 
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'850px',height:'800px',display:'flex'}}
      >
       

        <TextField
  id="livraison time"
  sx={{ width: '80%',mt:2,mx:2  ,bgcolor:'white'}}
  placeholder="color product"
  size='small'
  label='color product'
  type='text'
  required
  onChange={(e:any)=>setColor1(e.target.value)}
    />

<TextField
  id="livraison time"
  sx={{ width: '80%',my:2,mx:2  ,bgcolor:'white'}}
  placeholder="quantity"
  size='small'
  label='quantity'
  type='number'
  onChange={(e:any)=>setQuantity(e.target.value)}
    />

{ hiden1 == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',mx:2 ,color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct} type="file" name='file' />
        </Button> : "" }
        {uploadProgress1 !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',mx:2 ,alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image1} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress1} />
         <IconButton onClick={()=>(setHiden1(false),setUploadProgress1(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }

         {loading == true  ? 
         <Button variant="contained"  disabled sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>:
         <Button variant="contained" onClick={handelUpdateImages} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>
         }

      </Menu>
      </Box>
    

    
   
     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',height:'100px',overflow:'hidden',position:'relative'}} >

     { !product ? "" : product.images.filter((img:any)=> img.color !== 'imageDescription').slice(currentIndex, currentIndex + 6).map((category:any,index:any)=> 
     <Box key={index} onMouseEnter={ ()=> setIndexs(index) } sx={{height:'70px',width:'70px',borderRadius:'12px'}} >
       {index === indexs  ?  <img onClick={()=> setIndexs(index)} src={category.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndexs(index)} src={category.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
      </Box>
      )}

      <IconButton onClick={handleClickLeft} sx={{position:'absolute',top:'50%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
       <ChevronLeftIcon sx={{fontSize:'10px',fontWeight:'800',color:'#f5f5f5'}} />
       </IconButton>
        <IconButton onClick={handleClickRight}  sx={{position:'absolute',top:'50%',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
       <ChevronRightIcon sx={{fontSize:'10px',fontWeight:'800',color:'#f5f5f5'}} />
       </IconButton>
      
     </Box>

    </Box>


    <Box sx={{display:'flex',flexDirection:'column',width:'700px'}} >
    <Box sx={{display:'flex',alignItems:'center'}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h6" gutterBottom>
     DA
     </Typography>
     <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h4" gutterBottom>
     { !product ? "" : (product.price - (product.solde*product.price/100))}
     </Typography>

     <IconButton onClick={handleClick2} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update price
  </Typography>

  <TextField
  id="prix"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='new prix'
  size='small'
  label='new prix'
  type='number'
  onChange={(e:any)=>setPrix(e.target.value)}
    />

<Button variant="contained" onClick={handelUpdateProductPrice} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>

      </Menu>


     { !product ? "" : (product.solde == 0 ? "" : <Typography sx={{fontWeight:'500',textDecorationLine:'line-through',mx:2}}  variant='body1' gutterBottom>
     DA{product.price}
     </Typography>)}
     { !product ? "" : (product.solde == 0 ? "" : <Typography sx={{fontWeight:'100',color:'#ff3d00'}}  variant='body1' gutterBottom>
     -{product.solde}%
     </Typography>)}

     <IconButton onClick={handleClick3} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl3}
        open={open3}
        onClose={handleClose3}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update % solde
  </Typography>

  <TextField
  id="prix"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='new solde'
  size='small'
  label='new solde'
  type='number'
  onChange={(e:any)=>setSolde(e.target.value)}
    />

<Button variant="contained" onClick={handelUpdateSolde} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>

      </Menu>


    </Box>
     
     <Box sx={{display:'flex',alignItems:'center'}} >

     <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body1' gutterBottom>
    { !product ? "" : product.description}
     </Typography>
         
     <IconButton onClick={handleClick1} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update description
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2,mx:2  ,bgcolor:'white'}}
  placeholder='description'
  size='small'
  label='description'
  type='text'
  onChange={(e:any)=>setDescription(e.target.value)}
    />

<Button variant="contained" onClick={handelUpdateDescription} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>

      </Menu>

     </Box>
   

    <Box sx={{display:'flex',alignItems:'center'}} >
    <Rating sx={{color:'black',height:'100%'}} size="medium"  name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    <Typography sx={{fontWeight:'700',mx:2}}  variant='subtitle1' gutterBottom>
    4.3 
     </Typography>

     <Typography sx={{fontWeight:'100',color:'#9e9e9e'}}  variant='body1' gutterBottom>
     591 Avis  ౹  + 5 000 Vendus
     </Typography>

    </Box>

    <Divider sx={{my:2}} />

    <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
    Coupon & Discount
     </Typography>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',bgcolor:'#f5f5f5',width:'200px',height:'80px',borderRadius:'12px',my:1}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}}  variant='body1' gutterBottom>
    DA113.47 off
     </Typography>
     <Typography sx={{color:'#ff3d00',textAlign:'left'}}  variant='subtitle1' gutterBottom>
     dès DA113.66 d'achat
     </Typography>
    </Box>
    <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
    Couleur: { !product ? "" : (product.images.length == 0 ? "" :   ( indexs>=5 ? "other color" : product.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].color)) }
     </Typography>

      <Box sx={{display:'flex',alignItems:'center',width:'80%',my:2}} >
       { !product ? "" : ( product.images.length == 0 ? "" : product.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) ).map((categ:any,index:any)=>
       
       <Box key={index} sx={{height:'50px',width:'50px',borderRadius:'12px',mx:2}} >
         {index === indexs  ?  <img onClick={()=> setIndexs(index)} src={categ.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndexs(index)} src={categ.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
       </Box>
       ))}
      </Box>

      <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
      { !product ? "" : product.properties} : { !product ? "" : (product.property.length == 0 ? "" : product.property[activeSize].detailsName)}
     </Typography>
     <Box sx={{display:'flex',width:'100%',alignItems:'center',flexWrap:'wrap'}} >
       { !product ? "" : ( product.property.length == 0 ? "" : product.property.map((prop:any,index:any)=>
       <Box key={index} sx={{mx:1,my:1}} >
        { index === activeSize ? <div onClick={()=>setActiveSize(index)}  style={{height:'30px',borderStyle:'solid',borderColor:'#424242',display:'flex',justifyContent:'center',alignItems:'center',padding:2,borderRadius:'8px'}} >
        {prop.detailsName}
     </div> : 
     <div  onClick={()=>setActiveSize(index)} style={{height:'30px',borderStyle:'solid',borderColor:'#e0e0e0',display:'flex',justifyContent:'center',alignItems:'center',padding:2,borderRadius:'8px'}} >
     {prop.detailsName}
     </div>
     }

     </Box>
       
        ))}
     </Box>
    </Box>
    </Box>
  )
}
