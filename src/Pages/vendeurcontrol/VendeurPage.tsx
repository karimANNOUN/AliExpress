import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import product from '../../assets/prductnew.png'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { styled } from '@mui/material/styles'; 
import { IconButton, LinearProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { alpha } from '@mui/material/styles';
import { CloseOutlined } from '@mui/icons-material';

export const VendeurPage = () => {

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


  const ecommerceIndustryTypes = [
    'Mode et Vêtements',
    'Électronique et High-Tech',
    'Maison et Jardin',
    'Beauté et Cosmétiques',
    'Santé et Bien-être',
    'Sports et Loisirs',
    'Alimentation et Boissons',
    'Art et Culture',
    'Auto et Moto',
    'Bébé et Enfants',
    'Animaux',
    'Bijoux et Montres',
    'Informatique et Logiciels',
    'Livres, Musique et Films',
    'Mobilier et Décoration',
    'Épicerie Fine',
    'Fournitures de Bureau',
    'Cadeaux et Gadgets',
    'Événements et Billetterie',
    'Services en Ligne',
    'Produits Écologiques',
    'Produits Artisanaux',
    'Produits Locaux',
    'Produits Importés',
    'Autre'
  ];


  const [productImage,setProductImage]=useState<File | null>()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgress1, setUploadProgress1] = useState(0);
  const [image, setImage] = useState<string | null | any >(null);
  const [imageDescription, setImageDescription] = useState<string | null | any >(null);
  const [price, setPrice] = useState(Number);
  const [description, setDescription] = useState('');
  const [solde,setSolde]=useState(0)
  const [properties,setProperties]=useState('')
  const [quantity,setQuantity]=useState(Number)
  const [livraison,setLivraison]=useState(Number)
  const [categoryType,setCategoryType]=useState('')
  const [firstTitle,setFirstTitle]=useState('')
  const [secondTitle,setSecondTitle]=useState('')
  const [thirdTitle,setThirdTitle]=useState('')

  const [firstDescription,setFirstDescription]=useState('')
  const [secondDescription,setSecondDescription]=useState('')
  const [thirdDescription,setThirdDescription]=useState('')
  
 const [hiden,setHiden]=useState(false)


  const handleChangeImageProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductImage(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress(progress)
          setImage(e.target.result as string);
         
        }
      };

      // Read the image file as a data URL
      reader.readAsDataURL( file);
    }

  };

  const handleChangeImageDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductImage(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress1(progress)
          setImageDescription(e.target.result as string);
          setHiden(true)
         
        }
      };

      // Read the image file as a data URL
      reader.readAsDataURL( file);
    }

  };




  return (
    <Box sx={{background: 'linear-gradient(to right, #1a237e 0%, #4a148c 65% , #512da8 85%)' , p:4  }} >
         <Typography  sx={{fontWeight:'700',color:'white',textAlign:'left',my:2}}  variant='h4' gutterBottom>
          Ajouter votre produit
        </Typography>
        <Typography  sx={{fontWeight:'700',color:'#e040fb',textAlign:'left',my:2}}  variant='h6' gutterBottom>
          Profiter maintenant
        </Typography>


         <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-around',mt:4}} >
          <Box sx={{width:'40%',display:'flex',flexDirection:'column',alignItems:'flex-start'}} >
          <Typography  sx={{fontWeight:'700',color:'white',textAlign:'left',my:2}}  variant='h2' gutterBottom>
          vender et controller votre produit, ajouter et modifier nouveaux produits
        </Typography>

        <Button  variant='contained'   sx={{color:'white',textTransform:'lowercase',width:'200px',bgcolor:'#aa00ff',borderRadius:'12px' ,mt:3 ,":hover":{color:'white',bgcolor:'#aa00ff'} }} >
      Ajouter
    </Button>

          </Box>
          <Box sx={{width:'60%'}} >
            <img src={product} alt='newproduct' />
          </Box>
        
         </Box>

         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',mt:8}} >

         <Typography  sx={{fontWeight:'700',color:'white',textAlign:'center',my:6}}  variant='h4' gutterBottom>
         Add Your Product Info
        </Typography>

           <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',bgcolor:'white'}} >
            <Box>
           <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'black'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct} type="file" />
        </Button>
        {uploadProgress !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px'}} >
        <img src={image} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress} />
         </Box> : "" }
         </Box>

    
         <TextField
  id="price"
  sx={{ width: '30%', bgcolor:"white"}}
  placeholder="taille or other properties"
  size='small'
  type='number'
  label='properties'
  required
  onChange={(e:any)=>setProperties(e.target.value)}
    />



         <TextField
  id="price"
  sx={{ width: '30%', bgcolor:"white"}}
  placeholder="Price"
  size='small'
  type='number'
  label='Price'
  required
  onChange={(e:any)=>setPrice(e.target.value)}
    />
            


           </Box>

           <TextField
  id="description"
  sx={{ width: '100%' ,my:1,bgcolor:'white'}}
  placeholder="description"
  size='medium'
  label='description'
  required
  onChange={(e)=>setDescription(e.target.value)}
    />


  
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',my:1}} >
  <TextField
  id="livraison"
  sx={{ width: '30%' ,bgcolor:'white'}}
  placeholder="livraison prix"
  size='small'
  label='prix livraison'
  type='number'
  required
  onChange={(e:any)=>setLivraison(e.target.value)}
    />

<TextField
  id="quantity"
  sx={{ width: '30%' ,bgcolor:'white'}}
  placeholder="Quantity"
  size='small'
  label='Quantité'
  type='number'
  required
  onChange={(e:any)=>setQuantity(e.target.value)}
    />

<Autocomplete
      id="category"
      options={ecommerceIndustryTypes}
      sx={{ width: '30%' }}
      size="small"
      onChange={(e,newValue:any)=>setCategoryType(newValue)}
      placeholder='choose your state'
      renderInput={(params) => <TextField required {...params} sx={{bgcolor:'white'}} label='Category' placeholder='veuillez sélectioner'  />}
    />



  </Box>
 
  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',my:1}} >
     
  <TextField
  id="destitle"
  sx={{ width: '100%' ,bgcolor:'white'}}
  placeholder="Title description "
  size='small'
  label='description Title 1'
  required
  onChange={(e)=>setFirstTitle(e.target.value)}
    />

<TextField
  id="des1"
  sx={{ width: '100%',mt:1 ,bgcolor:'white'}}
  placeholder="First description"
  size='medium'
  label='First description'
  required
  onChange={(e:any)=>setFirstDescription(e.target.value)}
    />


<TextField
  id="destitle"
  sx={{ width: '100%' , mt:2 ,bgcolor:'white'}}
  placeholder="description Title 2"
  size='small'
  label='description Title 2'
  required
  onChange={(e)=>setSecondTitle(e.target.value)}
    />

<TextField
  id="des1"
  sx={{ width: '100%' ,mt:1 ,bgcolor:'white'}}
  placeholder="Second description"
  size='medium'
  label='Second description'
  required
  onChange={(e:any)=>setSecondDescription(e.target.value)}
    />



<TextField
  id="destitle"
  sx={{ width: '100%' ,mt:2 ,bgcolor:'white'}}
  placeholder="description Title 3"
  size='small'
  label='description Title 3'
  required
  onChange={(e)=>setThirdTitle(e.target.value)}
    />

<TextField
  id="des1"
  sx={{ width: '100%',mt:1 ,bgcolor:'white'}}
  placeholder="Third description"
  size='medium'
  label='Third description'
  required
  onChange={(e:any)=>setThirdDescription(e.target.value)}
    />


<Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} >

<label htmlFor='description' > Image Description </label>

           { hiden == false ? <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'black'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput id='description'  onChange={handleChangeImageDescription} type="file" />
        </Button> : "" }
        {uploadProgress1 !== 0 ? <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',my:1,position:'relative'}} >
        <img src={imageDescription} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress} />
         <IconButton onClick={()=>(setHiden(false),setUploadProgress1(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>



  </Box>



         </Box>

       


    </Box>
  )
}
