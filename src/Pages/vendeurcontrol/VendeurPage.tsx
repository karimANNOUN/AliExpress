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
import { CloseOutlined } from '@mui/icons-material';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

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

  const Token=Cookies.get('token')
  const navigate=useNavigate()

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


  const [productColorImage1,setProductColorImage1]=useState<File | null>()
  const [productColorImage2,setProductColorImage2]=useState<File | null>()
  const [productColorImage3,setProductColorImage3]=useState<File | null>()
  const [productColorImage4,setProductColorImage4]=useState<File | null>()
  const [productColorImage5,setProductColorImage5]=useState<File | null>()
  const [productDescriptionImage,setProductDescriptionImage]=useState<File | null>()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadProgress1, setUploadProgress1] = useState(0);
  const [uploadProgress2, setUploadProgress2] = useState(0);
  const [uploadProgress3, setUploadProgress3] = useState(0);
  const [uploadProgress4, setUploadProgress4] = useState(0);
  const [uploadProgress5, setUploadProgress5] = useState(0);
  const [image, setImage] = useState<string | null | any >(null);
  const [image2, setImage2] = useState<string | null | any >(null);
  const [image3, setImage3] = useState<string | null | any >(null);
  const [image4, setImage4] = useState<string | null | any >(null);
  const [image5, setImage5] = useState<string | null | any >(null);
  const [imageDescription, setImageDescription] = useState<string | null | any >(null);
  const [manyImages, setManyImages] = useState<FileList | null | [] | any >(null);
  const [price, setPrice] = useState(Number);
  const [description, setDescription] = useState('');
  const [solde,setSolde]=useState(Number)
  const [title,setTitle]=useState('')
  const [properties,setProperties]=useState('')
  const [livraison,setLivraison]=useState(Number)
  const [livraisonTime,setLivraisonTime]=useState(Number)
  const [categoryType,setCategoryType]=useState('')
  const [firstTitle,setFirstTitle]=useState('')
  const [secondTitle,setSecondTitle]=useState('')
  const [thirdTitle,setThirdTitle]=useState('')

  const [firstDescription,setFirstDescription]=useState('')
  const [secondDescription,setSecondDescription]=useState('')
  const [thirdDescription,setThirdDescription]=useState('')

  const [color1,setColor1]=useState('')
  const [color2,setColor2]=useState('')
  const [color3,setColor3]=useState('')
  const [color4,setColor4]=useState('')
  const [color5,setColor5]=useState('')
  
 const [hiden,setHiden]=useState(false)
 const [hiden1,setHiden1]=useState(false)
 const [hiden2,setHiden2]=useState(false)
 const [hiden3,setHiden3]=useState(false)
 const [hiden4,setHiden4]=useState(false)
 const [hiden5,setHiden5]=useState(false)



const [events, setEvents] = useState('');
const [values, setValues] = useState <any | {} > ([]);
const [quantityPro,setQuantityPro]=useState(Number)
const [count,setCount]=useState(0)

const handleAddEvent = () => {
  setCount(count + 1)
  setValues([...values,{id:count,propertyDetail:events,quantityDetail:quantityPro}])
};




  const handleChangeImageProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductColorImage1(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress(progress)
          setImage(e.target.result as string);
          setHiden1(true)
         
        }
      };

      // Read the image file as a data URL
      reader.readAsDataURL( file);
    }

  };

 
  const handleChangeImageProduct2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductColorImage2(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress2(progress)
          setImage2(e.target.result as string);
          setHiden2(true)
         
        }
      };

      // Read the image file as a data URL
      reader.readAsDataURL( file);
    }

  };



  const handleChangeImageProduct3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductColorImage3(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress3(progress)
          setImage3(e.target.result as string);
          setHiden3(true)
         
        }
      };

      // Read the image file as a data URL
      reader.readAsDataURL( file);
    }

  };



  const handleChangeImageProduct4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductColorImage4(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress4(progress)
          setImage4(e.target.result as string);
          setHiden4(true)
         
        }
      };

      // Read the image file as a data URL
      reader.readAsDataURL( file);
    }

  };

  const handleChangeImageProduct5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductColorImage5(e.target.files?.[0] || null )

    

   const file =e.target.files?.[0] 

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target && e.target.result) {
          const progress = Math.round((e.loaded / e.total ) * 100);
          setUploadProgress5(progress)
          setImage5(e.target.result as string);
          setHiden5(true)
        }
      };

    
      reader.readAsDataURL( file);
    }

  };





  const handleChangeImageDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductDescriptionImage(e.target.files?.[0] || null )

    

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

    
      reader.readAsDataURL( file);
    }

  };


  const handleManyImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files;
   
    setManyImages(selectedImages);
    
  };



   const handelPostProductInformation= async ()=>{

    try{

      const formData : any = new FormData();
    
      formData.append(`${color1}`, productColorImage1);
      formData.append(`${color2}`, productColorImage2);
      formData.append(`${color3}`, productColorImage3);
      formData.append(`${color4}`, productColorImage4);
      formData.append(`${color5}`, productColorImage5);
      formData.append('imageDescription', productDescriptionImage);
      formData.append('manyImages', manyImages);


    if (!manyImages || manyImages.length === 0) {
      console.error('No images selected.');
      return;
    }


      for (let i = 0; i < manyImages.length; i++) {
        formData.append('manyImages', manyImages[i]);
      }

      formData.append('propertiesDetails', JSON.stringify(values));

      formData.append('price', price);
      formData.append('title', title);
      formData.append('properties', properties);
      formData.append('description', description);
      formData.append('livraison', livraison);
      formData.append('livraisonTime', livraisonTime);
      formData.append('categoryType', categoryType);
      formData.append('solde', solde);

      formData.append('firstTitle', firstTitle);
      formData.append('secondTitle', secondTitle);
      formData.append('thirdTitle', thirdTitle);

      formData.append('firstDescription', firstDescription);
      formData.append('secondDescription', secondDescription);
      formData.append('thirdDescription', thirdDescription);

      

     //   if (file !== null && category !== "" && name !== "" && price !== "" && quantity !== "" ) {
        axios.post(`http://localhost:8000/product`,formData, {
          withCredentials:true,
          headers:{authorization:`${Token}`},
        }) 
        .then(res=>console.log(res.data) )
        .catch(err=>console.log(err)) 
     // }

//     if (data.success == true) {
   //    navigate("/decisionvendeurboutique")
  //   }
         
           
      }catch(error){
        console.log(error)
      }


   }






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

           <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}} >
            <Box>
            <TextField
  id="color1"
  sx={{ width: '120px',mt:1 ,bgcolor:'white'}}
  placeholder="color1"
  size='medium'
  label='color 1'
  required
  onChange={(e:any)=>setColor1(e.target.value)}
    />

            { hiden1 == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct} type="file" name='colorImage1' />
        </Button> : "" }
        {uploadProgress !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress} />
         <IconButton onClick={()=>(setHiden1(false),setUploadProgress(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>

         <Box>

         <TextField
  id="color2"
  sx={{ width: '120px',mt:1 ,bgcolor:'white'}}
  placeholder="color2"
  size='medium'
  label='color 2'
  required
  onChange={(e:any)=>setColor2(e.target.value)}
    />

         { hiden2 == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput onChange={handleChangeImageProduct2} type="file" name='colorImage2' />
        </Button>: "" }
        {uploadProgress2 !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image2} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress2} />
         <IconButton onClick={()=>(setHiden2(false),setUploadProgress2(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>

         <Box>

         <TextField
  id="color3"
  sx={{ width: '120px',mt:1 ,bgcolor:'white'}}
  placeholder="color3"
  size='medium'
  label='color 3'
  required
  onChange={(e:any)=>setColor3(e.target.value)}
    />


         { hiden3 == false ? <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct3} type="file" name='colorImage3' />
        </Button>: "" }
        {uploadProgress3 !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image3} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress3} />
         <IconButton onClick={()=>(setHiden3(false),setUploadProgress3(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>

         <Box>

         <TextField
  id="color4"
  sx={{ width: '120px',mt:1 ,bgcolor:'white'}}
  placeholder="color4"
  size='medium'
  label='color 4'
  required
  onChange={(e:any)=>setColor4(e.target.value)}
    />

         { hiden4 == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct4} type="file" name='colorImage4' />
        </Button>: "" }
        {uploadProgress4 !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image4} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress4} />
         <IconButton onClick={()=>(setHiden4(false),setUploadProgress4(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>

         <Box>


         <TextField
  id="color5"
  sx={{ width: '120px',mt:1 ,bgcolor:'white'}}
  placeholder="color5"
  size='medium'
  label='color 5'
  required
  onChange={(e:any)=>setColor5(e.target.value)}
    />

         { hiden5 == false ?   <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleChangeImageProduct5} type="file" name='colorImage5' />
        </Button> : "" }
        {uploadProgress5 !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',position:'relative'}} >
        <img src={image5} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress5} />
         <IconButton onClick={()=>(setHiden5(false),setUploadProgress5(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>

         <Box>


<label htmlFor='otherimages' style={{color:'white'}} > add other images </label>

  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
 <InsertPhotoOutlinedIcon/>
 <Typography variant='caption' sx={{mt:1}} >  
 Upload
</Typography>
<VisuallyHiddenInput id='otherimages' onChange={handleManyImageChange} type="file" name='colorImage5' multiple />
</Button> 

</Box>



          

           </Box>


<Box sx={{my:1,display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}} >


<TextField
  id="title"
  sx={{ width: '20%', bgcolor:"white"}}
  placeholder="titre de votre article"
  size='small'
  label='Title'
  required
  onChange={(e:any)=>setTitle(e.target.value)}
    />


<TextField
  id="taille"
  sx={{ width: '20%', bgcolor:"white"}}
  placeholder="taille or other properties"
  size='small'
  label='properties'
  required
  onChange={(e:any)=>setProperties(e.target.value)}
    />

<TextField
  id="solde"
  sx={{ width: '20%', bgcolor:"white"}}
  placeholder="% solde"
  size='small'
  type='number'
  label='solde %'
  required
  onChange={(e:any)=>setSolde(e.target.value)}
    />



         <TextField
  id="price"
  sx={{ width: '20%', bgcolor:"white"}}
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

<Typography  sx={{fontWeight:'700',color:'white',textAlign:'center',my:1}}  variant='h6' gutterBottom>
         Add Your Prpperties details 
        </Typography>

<Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',my:2}} >

       
    

      <TextField
        label="Propertie details"
        sx={{bgcolor:'white',width:'30%'}}
        margin="normal"
        size='small'
        onChange={(e)=>setEvents(e.target.value)}
      />

<TextField
        label="quantity détails"
        sx={{bgcolor:'white',width:'30%'}}
        size='small'
        type='number'
        margin="normal"
        onChange={(e:any)=>setQuantityPro(e.target.value)} 
      />


      <Button variant="contained" color="primary" onClick={handleAddEvent}>
        Add Properties details 
      </Button>


    
    </Box>

{ values.length == 0 ? "" : <Box sx={{width:'100%',display:'flex',flexWrap:'wrap',my:1,borderRadius:'6px',border:'1px dashed #bdbdbd',p:2}} >
 { values.map((val:any)=><Box key={val.id} sx={{borderRadius:'8px',mr:2,mb:1,bgcolor:'#e1bee7',py:1,px:3,position:'relative'}} >
   {val.propertyDetail}
   <IconButton onClick={()=>(values.splice(val.id, 1))} sx={{position:'absolute',":hover":{bgcolor:'#eeeeee'}, top:'2%',right:'1%'}} >
      <CloseOutlined sx={{fontSize:'5px'}} /> 
   </IconButton>
 </Box>)}  
</Box>}

  
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
  id="livraison time"
  sx={{ width: '30%' ,bgcolor:'white'}}
  placeholder="livraison days"
  size='small'
  label='temps livraison'
  type='number'
  required
  onChange={(e:any)=>setLivraisonTime(e.target.value)}
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

  <Typography  sx={{fontWeight:'700',color:'white',my:2}}  variant='h6' gutterBottom>
          Add your Product Details
        </Typography>
     
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

<label htmlFor='description' style={{color:'white'}} > Image Description </label>

           { hiden == false ? <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput id='description'  onChange={handleChangeImageDescription} type="file" />
        </Button> : "" }
        {uploadProgress1 !== 0 ? <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',my:1,position:'relative'}} >
        <img src={imageDescription} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress1} />
         <IconButton onClick={()=>(setHiden(false),setUploadProgress1(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }
         </Box>



  </Box>

  <Button onClick={handelPostProductInformation} variant='contained' color='primary'  sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'} }} >
      Ajouter Votre Produit
    </Button>

         </Box>

       


    </Box>
  )
}
