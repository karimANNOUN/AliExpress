import { Box,Typography,Chip} from '@mui/material'
import { Header } from '../Header'
import { useEffect, useState } from 'react'
import RecyclingIcon from '@mui/icons-material/Recycling';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Cookies from 'js-cookie';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ProfilSellerInfo } from '../sellers/components/componentsProfil.tsx/ProfilSellerInfo';
import { LegalSellerInfo } from '../sellers/components/componentsProfil.tsx/LegalSellerInfo';
import { EntrepriseSellerInfo } from '../sellers/components/componentsProfil.tsx/EntrepriseSellerInfo';
import { CardProduct } from '../sellers/components/componentsProfil.tsx/CardProduct';
import { useParams } from 'react-router-dom';

type ThemeColor = 'info' | 'error' | 'warning' | 'success' 


interface StatusObj {
    [key: string]: {
      color: ThemeColor
    }
  }

export const ControlSeller = () => {


    const statusObj: StatusObj = {
        "seller attente1": { color: 'info' },
        "rejected": { color: 'error' },
        "seller attente2": { color: 'warning' },
        "seller": { color: 'success' }
      }

      

      const params=useParams()


      const token = Cookies.get('token');
      const [loading,setLoading]=useState(Boolean)
      const [loading1,setLoading1]=useState(Boolean)

      const [sells,setSells]=useState<any>({})

        useEffect(()=>{
  
            const handelGetSellers=async()=>{
              try {
                setLoading(true)
              const response = await fetch(`http://localhost:8000/getSellerUnique/${params.sallerId}`,{
                method: 'GET',
                credentials:"include", 
                headers: {
                  'Content-Type': 'application/json',
                   authorization:`${token}`
                }
              });
              const data = await response.json()
             if (data.success == true) {
                setSells(data.getSells)
                setLoading(false) 
              } 
            } catch (error) {
              console.error('operation failed.');
            }
            }
            handelGetSellers()
          },[])
  
        
  
    
    
    
        const handelApprovedSeller=async()=>{
          try {
            setLoading1(true)
          const response = await fetch(`http://localhost:8000/approvedSellers`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body:JSON.stringify({sells})
          });
          const data = await response.json()
         if (data.success == true) {
            setSells(data.getSells)
            setLoading1(false)
            
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }
  
  
  
        const handelRejectedSeller=async()=>{
          try {
            setLoading1(true)
          const response = await fetch(`http://localhost:8000/rejectedSellers`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body:JSON.stringify({sells})
          });
          const data = await response.json()
         if (data.success == true) {
            setSells(data.getSells)
            setLoading1(false)
            
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }


        const [currentIndex, setCurrentIndex] = useState(0);
  
  
      const handleClickRight = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % sells.products.length);
        };
      
        const handleClickLeft = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + sells.products.length) % sells.products.length);
        };


       
        if(loading == true) return <div>...loading</div>
        

  return (
    <Box sx={{bgcolor:'#fafafa'}} >
    <Header />
    <Box sx={{width:'100%',bgcolor: 'background.paper',display:'flex',flexDirection:'column',alignItems:'center'}}>

    <Box sx={{height:'300px',width:'100%',position:'relative'}} >
         <img 
         src={sells.firstImageStore == null ? "https://almparts.co.za/wp-content/uploads/2021/12/no-image-available-icon.jpg" : sells.firstImageStore } 
         alt='hh' 
         style={{height:'100%',width:'100%'}} 
         />
         <Box sx={{position:'absolute',top:0,left:0,height:'100%',width:'100%',bgcolor:'rgba(255, 0, 0, 0.5)'}}></Box>
        </Box>

    <Box sx={{width:'95%',bgcolor:'Window',borderRadius:'8px',display:'flex',flexDirection:'column',alignItems:'flex-start',p:2}} >

     <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',mb:4}} >
        <Box sx={{display:'flex',alignItems:'center'}} >
         <img 
         alt='kilou' 
         src={sells.secondImageStore == null ? "https://almparts.co.za/wp-content/uploads/2021/12/no-image-available-icon.jpg" : sells.secondImageStore } 
         style={{height:'80px',width:'80px',borderRadius:'8px' }} 
         />
         <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',ml:2}} >
         <Typography sx={{fontWeight:'800',textAlign:'left',fontFamily:'monospace'}} variant="h6" gutterBottom>
    {sells.name}
    </Typography>
    <Typography sx={{fontWeight:'200',textAlign:'left',fontFamily:'monospace',color:'#9e9e9e'}} variant="subtitle2" gutterBottom>
    Wilaya: {sells.state}
    </Typography>
         </Box>

        </Box>


        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left',fontFamily:'monospace'}} variant="body2" gutterBottom>
    Status
    </Typography>
        <Chip
                  label={sells.role}
                  color={statusObj[sells.role].color}
                  sx={{
                    height: 35,
                    fontSize: '0.75rem',
                    textTransform: 'capitalize',
                    '& .MuiChip-label': { fontWeight: 700 }
                  }}
                />
        </Box>

    </Box>   
    
    
    <Typography sx={{fontWeight:'600',textAlign:'left',fontFamily:'monospace',color:'#9c27b0'}} variant="h5" gutterBottom>
    Profil Seller Info
    </Typography>

    
    { sells.role == "seller attente1" ?  

     <Box sx={{width:'100%',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:2}} >

     <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
         Nothings Profil Infos
         </Typography>
     
         <RecyclingIcon  sx={{fontSize:'42px'}} />
     
             </Box>
    : <ProfilSellerInfo sells={sells} />}



    <Typography sx={{fontWeight:'600',textAlign:'left',fontFamily:'monospace',color:'#9c27b0'}} variant="h5" gutterBottom>
    Representative Legal Info
    </Typography>


 { sells.role == "seller attente1" ?  
    
     <Box sx={{width:'100%',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:2}} >

     <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
         Nothings Representative Legal Infos
         </Typography>
     
         <RecyclingIcon  sx={{fontSize:'42px'}} />
     
             </Box>
    :
     <LegalSellerInfo sells={sells} /> }





    <Typography sx={{fontWeight:'600',textAlign:'left',fontFamily:'monospace',color:'#9c27b0'}} variant="h5" gutterBottom>
    Entreprise Seller Info
    </Typography>



    { sells.role == "seller attente1" ?  
    
     <Box sx={{width:'100%',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:2}} >

     <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
         Nothings Entreprise Seller Infos
         </Typography>
     
         <RecyclingIcon  sx={{fontSize:'42px'}} />
     
             </Box>
    :
   <EntrepriseSellerInfo sells={sells} />}



     {sells.role == "seller attente2" ? 
     
     <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',my:3}} >
     <Button  
       onClick={handelApprovedSeller}
       disabled={loading1==true ? true : false } 
       sx={{bgcolor:'#d500f9',color:'white',textTransform:'lowercase',mr:3,":hover":{bgcolor:'#d500f9',color:'white'}}} 
       variant="text"
       >
        Approve Seller
     </Button>

     <Button  
         onClick={handelRejectedSeller}
         disabled={loading1==true ? true : false }  
         sx={{bgcolor:'#d50000',color:'white',textTransform:'lowercase',":hover":{bgcolor:'#d50000',color:'white'}}} 
         variant="text"
         >
            Reject Seller
        </Button>
</Box>

     : "" }
    

    <Typography sx={{fontWeight:'600',textAlign:'left',fontFamily:'monospace',color:'#9c27b0'}} variant="h5" gutterBottom>
    Products Seller Info
    </Typography>


    { sells.products.length === 0 ?  
    
    <Box sx={{width:'100%',height:'400px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:2}} >

    <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
        No Products Find
        </Typography>
    
        <RecyclingIcon  sx={{fontSize:'42px'}} />
    
            </Box>
   :

    <Box sx={{display:'flex',alignItems:'center',width:'100%',position:'relative',mt:4}} >

       {sells.products.slice(currentIndex, currentIndex + 4).map( (product:any) => <CardProduct key={product.id} product={product} />)}
       

 { sells.products.length > 4 ? <Box sx={{display:'flex',justifyContent:'space-between',width:'100%',alignItems:'center',position:'absolute',top:'40%'}} >
      
      <IconButton onClick={handleClickLeft} sx={{bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronLeftIcon sx={{fontSize:'30px'}} />
        </IconButton>    

        <IconButton onClick={handleClickRight} sx={{bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronRightIcon sx={{fontSize:'30px'}} />
        </IconButton> 
 </Box> : "" }
    

    </Box>}


    </Box>
    
   
    </Box>
        </Box>
  )
}
