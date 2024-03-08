import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { styled } from '@mui/material/styles'; 
import { LinearProgress } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';

export const DescriptionSeller = () => {

    
  const product=useSelector((state:any)=>state.app.product)
  
  const [descripTitle1,setDescripTitle1]=useState('')
  const [descripTitle2,setDescripTitle2]=useState('')
  const [descripTitle3,setDescripTitle3]=useState('')

 
  const [descrip1,setDescrip1]=useState('')
  const [descrip2,setDescrip2]=useState('')
  const [descrip3,setDescrip3]=useState('')

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


  const [anchorEl0, setAnchorEl0] = React.useState<null | HTMLElement>(null);
  const open0 = Boolean(anchorEl0);
  const handleClick0 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl0(event.currentTarget);
  };
  const handleClose0 = () => {
    setAnchorEl0(null);
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

  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null);
  const open5 = Boolean(anchorEl5);
  const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };



  const [productDescriptionImage,setProductDescriptionImage]=useState<File | null>()
  const [uploadProgress1, setUploadProgress1] = useState(0);
  const [image1, setImage1] = useState<string | null | any >(null);
  const [color1,setColor1]=useState('')
  const [hiden1,setHiden1]=useState(false)
  const [quantity,setQuantity]=useState(0)


  const handleChangeImageProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
      setProductDescriptionImage(e.target.files?.[0] || null )
  
      
  
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
  
        // Read the image file as a data URL
        reader.readAsDataURL( file);
      }
  
    };


  return (
    <Box sx={{display:'flex',flexDirection:'column'}} >
    <Box sx={{display:'flex'}} >
    <Button variant="text" sx={{color:'black',fontWeight:'800',":hover":{color:'black'}}} > <LocationOnIcon sx={{fontSize:'20px'}} /> Présentation</Button>
    <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Détails</Button>
    <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Customer Reviews</Button>
    <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Vous Aimerez Aussi</Button>
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',my:2}} >
    <Typography sx={{fontWeight:'800'}} variant="subtitle1" gutterBottom>
    Présentation
  </Typography>
  <Button variant="text" sx={{color:'black',fontWeight:'800',":hover":{color:'black'}}} > Signaler cet article</Button>
    </Box>
    <Box sx={{display:'flex',flexDirection:'column',width:'900px'}} >
        <Box sx={{display:'flex',flexDirection:'column',my:2}} >
            <Box sx={{display:'flex',alignItems:'center'}} >
            <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
    {product.descriptiontitle1}
  </Typography>

  <IconButton onClick={handleClick0} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl0}
        open={open0}
        onClose={handleClose0}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update 1 ére Title description 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='1 ére Title description'
  size='small'
  label='1 ére Title description'
  type='text'
  onChange={(e:any)=>setDescripTitle1(e.target.value)}
    />

    

      </Menu>


            </Box>







            <Box sx={{display:'flex',alignItems:'center'}} >
  <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
  {product.descriptiondetail1}
  </Typography>

  <IconButton onClick={handleClick} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update 1 ére description 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='1 ére description'
  size='small'
  label='1 ére description'
  type='text'
  onChange={(e:any)=>setDescrip1(e.target.value)}
    />

    

      </Menu>


  </Box>
  </Box>




  <Box sx={{display:'flex',flexDirection:'column',my:2}} >
  <Box sx={{display:'flex',alignItems:'center'}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
    {product.descriptiontitle2}
  </Typography>

  <IconButton onClick={handleClick1}  >
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
    update 2 éme Title description 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='2 éme Title description'
  size='small'
  label='2 éme Title description'
  type='text'
  onChange={(e:any)=>setDescripTitle2(e.target.value)}
    />

    

      </Menu>

  </Box>





  <Box sx={{display:'flex',alignItems:'center'}} >
  <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
  {product.descriptiondetail2}
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
    update 2 éme description 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2,mx:2  ,bgcolor:'white'}}
  placeholder='2 éme description'
  size='small'
  label='2 éme description'
  type='text'
  onChange={(e:any)=>setDescrip2(e.target.value)}
    />

    

      </Menu>


  </Box>
  </Box>




  <Box sx={{display:'flex',flexDirection:'column',my:2}} >
  <Box sx={{display:'flex',alignItems:'center'}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
    {product.descriptiontitle3}
  </Typography>

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
    update 3 éme Title description 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2,mx:2  ,bgcolor:'white'}}
  placeholder='3 éme Title description'
  size='small'
  label='3 éme Title description'
  type='text'
  onChange={(e:any)=>setDescripTitle3(e.target.value)}
    />

    

      </Menu>


</Box>







<Box sx={{display:'flex',alignItems:'center'}} >
  <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
  {product.descriptiondetail3}
  </Typography>
  <IconButton onClick={handleClick4} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl4}
        open={open4}
        onClose={handleClose4}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update 3 éme description 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2,mx:2  ,bgcolor:'white'}}
  placeholder='3 éme description'
  size='small'
  label='3 éme description'
  type='text'
  onChange={(e:any)=>setDescrip3(e.target.value)}
    />

    

      </Menu>



  </Box>
  </Box>

    </Box>







     <Box sx={{display:'flex',justifyContent:'center',position:'relative',width:'950px',height:'500px'}} >
     <img src={product.images.filter((img:any)=> img.color == 'imageDescription')[0].imageUrl } style={{width:'100%',height:'100%'}} />

     <IconButton onClick={handleClick5} sx={{position:'absolute',top:'0',right:'0'}} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl5}
        open={open5}
        onClose={handleClose5}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update image description
  </Typography>

{ hiden1 == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',ml:2,height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct} type="file" name='colorImage1' />
        </Button> : "" }
        {uploadProgress1 !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',ml:2,alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image1} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress1} />
         <IconButton onClick={()=>(setHiden1(false),setUploadProgress1(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }

      </Menu>


     </Box>
   

    

</Box>
  )
}
