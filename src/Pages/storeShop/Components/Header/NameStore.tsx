import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { EmptyCardStore } from './EmptyCardStore';
import { EmptyMeilleurProduct } from './EmptyMeilleurProduct';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
export const NameStore = () => {

   
   const params=useParams()

  const dispatch = useDispatch()

  const [loading,setLoading]=useState(false)
  const [prodUsed,setProdUser]=useState([])
  const [newProdUsed,setNewProdUser]=useState([])
  const [latestProdUsed,setLatestProdUser]=useState([])

   useEffect( ()=>{
       const getProductStoreNew =async()=>{
         const response=await fetch(`http://localhost:8000/store/new/${params.storeId}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
        if (!data) {
          setLoading(true)
        }
      if (data.success == true) {
       
          setLoading(false)
          setNewProdUser(data.productLune)  
      
   }
        
      }
       getProductStoreNew()

       

   },[])


   useEffect(()=>{
 
      const getProductStoreNew =async()=>{
         const response=await fetch(`http://localhost:8000/store/all/${params.storeId}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
        if (!data) {
          setLoading(true)
        }
      if (data.success == true) {
       
          setLoading(false)
    
        setProdUser(data.productLune)   
   }
        
      }
       getProductStoreNew()

       

   },[])


   useEffect(()=>{
 
      const getLatestProductStore =async()=>{
         const response=await fetch(`http://localhost:8000/store/latest/${params.storeId}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
        if (!data) {
          setLoading(true)
        }
      if (data.success == true) {
       
          setLoading(false)
    
        setLatestProdUser(data.newProduct)   
   }
        
      }
       getLatestProductStore()

       

   },[])


  

 
    const newOffre : any[] =[
      
    ]

    const newProducts=[
        {id:1,name:'kimou'},{id:2,name:'kimou'},{id:3,name:'kimou'},{id:4,name:'kimou'},{id:5,name:'kimou'}
    ]

    const selectionProducts=[
        {id:1,name:'kimou'},{id:2,name:'kimou'},{id:3,name:'kimou'},{id:5,name:'kimou'},{id:6,name:'kimou'},{id:7,name:'kimou'},{id:8,name:'kimou'},{id:9,name:'kimou'},{id:10,name:'kimou'},{id:11,name:'kimou'},
        {id:12,name:'kimou'},{id:13,name:'kimou'},{id:14,name:'kimou'},{id:15,name:'kimou'},{id:16,name:'kimou'}
    ]


  return (
    <Box sx={{display:'flex',width:'100%',flexDirection:'column'}} >
      
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'250px'}} >
        <Box sx={{width:'330px',pl:2,height:'65%',bgcolor:'#fff9c4',display:'flex',flexDirection:'column'}} >
        <Typography sx={{textAlign:'left',fontWeight:'800'}} variant='h6' gutterBottom>
        DA113.66
       </Typography>
       <Typography sx={{textAlign:'left'}} variant='subtitle2' gutterBottom>
       Dépensez DA113.85 et obtenez DA113.66 de réduction(Exclut les frais d'expédition)
       </Typography>
       <Typography sx={{textAlign:'left'}} variant='caption' gutterBottom>
       Expire 2023/12/31
       </Typography>
       <Box sx={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}} >
       <Button sx={{bgcolor:'white',color:'black',borderStyle:'dashed',borderColor:'black',":hover":{bgcolor:'white',color:'black',borderStyle:'dashed',borderColor:'black'}}} variant="outlined">M2F958DNNGJB</Button>
       <Button sx={{color:'white',fontSize:'12px',bgcolor:'#d84315',borderRadius:'8px',":hover":{color:'white',bgcolor:'#d84315'}}} variant="contained">en profiter</Button>
       </Box>
        </Box>
   </Box>


    <Box sx={{width:'100%',height:'630px',alignItems:'center',display:'flex',flexDirection:'column',position:'relative'}} >
         <Box sx={{width:'100%',height:'40%',backgroundImage:'url("https://i.pinimg.com/236x/12/f4/f4/12f4f4e7f85a771324d7758356ae23e7.jpg")' , backgroundSize:'cover' ,backgroundPosition: 'center' }} >
         <Typography sx={{fontWeight:'800',mt:3,color:'#827717'}} variant='h4' gutterBottom>
         Offres à la une
       </Typography>
         </Box>
         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'70%',position:'absolute',top:'20%',right:'15%'}} >
            { !newProdUsed ? <EmptyCardStore/>  :  newProdUsed.map( (product:any)=> <Box key={product.id} sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'space-around',alignItems:'center',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#ffd600'}} >
               <img src={product.images[0].imageUrl} style={{width:'40%',height:'90%',borderRadius:'8px'}} />
               <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',height:'90%',width:'50%'}} >
               <Link variant='caption' sx={{color:'#9e9e9e',textAlign:'left',mb:2,textDecorationLine:'none',":hover":{color:'#9e9e9e',textDecorationLine:'underline'}}} href={`/${product.id}`}>
               {product.title}
               </Link>
               
               <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='h6' gutterBottom>
               DA{product.price - (product.price*product.solde/100) }
       </Typography>
  
               </Box>
            </Box>)}
         </Box>

       <Box sx={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center',mt:12}} >
       <Typography sx={{fontWeight:'800'}} variant='h4' gutterBottom>
       Les meilleures offres par catégorie
       </Typography>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'70%'}} >
            { !prodUsed ? <EmptyMeilleurProduct/> : prodUsed.map( (prod:any)=> <Box key={prod.id} sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'space-around',alignItems:'center',border:'2px solid #f5f5f5',borderRadius:'6px'}} >
               <img src={prod.images[1].imageUrl} style={{width:'40%',height:'90%',borderRadius:'8px'}} />
               <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',height:'90%',width:'50%'}} >
               <Link variant='h6' sx={{color:'#9e9e9e',textAlign:'left',mb:2,textDecorationLine:'none',":hover":{color:'#9e9e9e',textDecorationLine:'underline'}}} href="#">
               {prod. category}
               </Link>
               
  
               </Box>
            </Box>)}
         </Box>
       </Box>

      
 
    </Box>

     <Box sx={{width:'100%',height:'550px',display:'flex',flexDirection:'column',alignItems:'center',position:'relative'}} >
     <Box sx={{width:'100%',height:'40%',backgroundImage:'url("https://i.pinimg.com/564x/7b/f2/7f/7bf27f2f7cfcc42fd2f7d447cca26d56.jpg")' , backgroundSize:'cover' ,backgroundPosition: 'center' }} >
         <Typography sx={{fontWeight:'800',mt:3,color:'white'}} variant='h4' gutterBottom>
         NOUVEAUTÉS
       </Typography>
         </Box>
         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'70%',position:'absolute',top:'20%',right:'15%'}} >
            { !latestProdUsed ? <EmptyMeilleurProduct/> : latestProdUsed.map( (product:any)=> <Box key={product.id} sx={{width:'15%',height:'300px',display:'flex',bgcolor:'Window',justifyContent:'center',alignItems:'center',flexDirection:'column',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#f5f5f5'}} >
               <img src={product.images[0].imageUrl} style={{width:'100%',height:'60%'}} />
               <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',height:'40%',width:'100%',pl:2}} >
               <Link variant='caption' sx={{color:'#9e9e9e',textAlign:'left',mb:2,textDecorationLine:'none',":hover":{color:'#9e9e9e',textDecorationLine:'underline'}}} href={`/${product.id}`}>
               {product.title}
               </Link>
               
               <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='h6' gutterBottom>
               DA{product.price - (product.price*product.solde/100) }
       </Typography>
  
               </Box>
            </Box>)}
         </Box>
     </Box>



     <Box sx={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}} >
       <Typography sx={{fontWeight:'800'}} variant='h4' gutterBottom>
       SÉLECTIONNÉ POUR VOUS
       </Typography>
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',width:'70%'}} >
            { !prodUsed ? "" : (prodUsed.map( (prod:any)=> <Box key={prod.id} sx={{width:'260px',height:'400px',display:'flex',bgcolor:'Window',justifyContent:'center',alignItems:'center',flexDirection:'column',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#f5f5f5'}} >
                <Box sx={{height:'60%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',borderBottomStyle:'solid',borderBottomColor:'#f5f5f5'}} >
                <img src={prod.images[0].imageUrl} style={{width:'200px',height:'200px',borderRadius:'6px'}} />
                </Box>
    
               <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',height:'40%',width:'100%',pl:2}} >
               <Link variant='caption'  sx={{color:'#9e9e9e',textAlign:'left',mb:2,textDecorationLine:'none',":hover":{color:'#9e9e9e',textDecorationLine:'underline'}}} href={`/${prod.id}`}>
               {prod.title}
               </Link>

                <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='h6' gutterBottom>
               DA{prod.price - (prod.price*prod.solde/100) }
       </Typography>             
  
               </Box>
            </Box>))}
         </Box>
       </Box>



    </Box>
   
  )
}
