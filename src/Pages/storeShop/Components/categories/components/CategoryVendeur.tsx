import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Checkbox from '@mui/material/Checkbox';
import {  IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useLocation, useParams } from 'react-router-dom';
import e from 'express';
export const CategoryVendeur = () => {

    const [active,setActive]=useState(1)
    const [loading,setLoading]=useState(false)
    const [article,setArticle]=useState<any>([])
    const [checked, setChecked] = useState(false);

    const cardRecomand=[
        {id:1,name:'kimou',price:8,commande:20},
        {id:2,name:'kimou',price:8,commande:20},
        {id:3,name:'kimou',price:8,commande:20},
        {id:4,name:'kimou',price:8,commande:20},
        {id:5,name:'kimou',price:8,commande:20},
        {id:6,name:'kimou',price:8,commande:20},
        {id:7,name:'kimou',price:8,commande:20},
        {id:8,name:'kimou',price:8,commande:20},
        {id:9,name:'kimou',price:8,commande:20},
        {id:10,name:'kimou',price:8,commande:20},
        {id:11,name:'kimou',price:8,commande:20},
        {id:12,name:'kimou',price:8,commande:20},
        {id:13,name:'kimou',price:8,commande:20},
        {id:14,name:'kimou',price:8,commande:20},
        {id:15,name:'kimou',price:8,commande:20},
        {id:16,name:'kimou',price:8,commande:20},
        {id:17,name:'kimou',price:8,commande:20},
        {id:18,name:'kimou',price:8,commande:20},
        {id:19,name:'kimou',price:8,commande:20},
        {id:20,name:'kimou',price:8,commande:20},
    ]


    const cartRecomand=[
        {id:1,name:'kimou',price:8,commande:20},
        {id:2,name:'kimou',price:8,commande:20},
        {id:3,name:'kimou',price:8,commande:20},
        {id:4,name:'kimou',price:8,commande:20},
        {id:5,name:'kimou',price:8,commande:20},
        {id:6,name:'kimou',price:8,commande:20},
        {id:7,name:'kimou',price:8,commande:20},
        {id:8,name:'kimou',price:8,commande:20},
        {id:9,name:'kimou',price:8,commande:20},
        {id:10,name:'kimou',price:8,commande:20},
        {id:11,name:'kimou',price:8,commande:20},
        {id:12,name:'kimou',price:8,commande:20},
        {id:13,name:'kimou',price:8,commande:20},
        {id:14,name:'kimou',price:8,commande:20},
        {id:15,name:'kimou',price:8,commande:20},
        {id:16,name:'kimou',price:8,commande:20},
        {id:17,name:'kimou',price:8,commande:20},
        {id:18,name:'kimou',price:8,commande:20},
        {id:19,name:'kimou',price:8,commande:20},
        {id:20,name:'kimou',price:8,commande:20},
        {id:21,name:'kimou',price:8,commande:20},
        {id:22,name:'kimou',price:8,commande:20},
        {id:23,name:'kimou',price:8,commande:20},
        {id:24,name:'kimou',price:8,commande:20},
        {id:25,name:'kimou',price:8,commande:20},
        {id:26,name:'kimou',price:8,commande:20},
        {id:27,name:'kimou',price:8,commande:20},
        {id:28,name:'kimou',price:8,commande:20},
        {id:29,name:'kimou',price:8,commande:20},
        {id:30,name:'kimou',price:8,commande:20},
        {id:31,name:'kimou',price:8,commande:20},
        {id:32,name:'kimou',price:8,commande:20},
        {id:33,name:'kimou',price:8,commande:20},
        {id:34,name:'kimou',price:8,commande:20},
        {id:35,name:'kimou',price:8,commande:20},
        {id:36,name:'kimou',price:8,commande:20},
        {id:37,name:'kimou',price:8,commande:20},
        {id:38,name:'kimou',price:8,commande:20},
        {id:39,name:'kimou',price:8,commande:20},
        {id:40,name:'kimou',price:8,commande:20},
        {id:41,name:'kimou',price:8,commande:20},
        {id:42,name:'kimou',price:8,commande:20},
        {id:43,name:'kimou',price:8,commande:20},
        {id:44,name:'kimou',price:8,commande:20},
        {id:45,name:'kimou',price:8,commande:20},
        {id:46,name:'kimou',price:8,commande:20},
        {id:47,name:'kimou',price:8,commande:20},
        {id:48,name:'kimou',price:8,commande:20},
        {id:49,name:'kimou',price:8,commande:20},
        {id:50,name:'kimou',price:8,commande:20},
        {id:51,name:'kimou',price:8,commande:20},
        {id:52,name:'kimou',price:8,commande:20},
        {id:53,name:'kimou',price:8,commande:20},
    ]
      
    const imagesPerPage = 36;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = cartRecomand.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(cartRecomand.length / imagesPerPage);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };


    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];


    const loaction =useLocation()
    const params=useParams()

    useEffect( ()=>{
    if (loaction.pathname == `/store/${params.storeId}/articleprosmos`  ) {
     
      setLoading(true)
      const getArticlePromos =async()=>{
        const response=await fetch(`http://localhost:8000/articlePromos/${params.storeId}`, {
         method: 'GET',
         credentials: 'include', 
         headers: {
           'Content-Type': 'application/json', 
         },
       })
       const data = await response.json()
     if (data.success == true) {
         setArticle(data.productPromos)  
         setLoading(false)
       }
       
     }
      getArticlePromos()
      
    }if (loaction.pathname == `/store/${params.storeId}/meilleur`  ) {

      setLoading(true)
      const getArticleMeilleur =async()=>{
        const response=await fetch(`http://localhost:8000/articleMeilleur/${params.storeId}`, {
         method: 'GET',
         credentials: 'include', 
         headers: {
           'Content-Type': 'application/json', 
         },
       })
       const data = await response.json()
      
     if (data.success == true) {
         setArticle(data.productMeilleur)  
         setLoading(false)
       }
       
     }
      getArticleMeilleur()


    }
     
     },[loaction.pathname])

     

     const productOrdredByPrice = async()=>{
      if (loaction.pathname == `/store/${params.storeId}/articleprosmos`  ) {
      setLoading(true)
      setActive(3)
        const response=await fetch(`http://localhost:8000/orderByPrix/${params.storeId}`, {
         method: 'GET',
         credentials: 'include', 
         headers: {
           'Content-Type': 'application/json', 
         },
       })
       const data = await response.json()
     if (data.success == true) {
         setArticle(data.productSeller)  
         setLoading(false)
       }
      }if (loaction.pathname == `/store/${params.storeId}/meilleur`) {

        setLoading(true)
        setActive(3)
          const response=await fetch(`http://localhost:8000/orderByPrixMeilleur/${params.storeId}`, {
           method: 'GET',
           credentials: 'include', 
           headers: {
             'Content-Type': 'application/json', 
           },
         })
         const data = await response.json()
       if (data.success == true) {
           setArticle(data.productSeller)  
           setLoading(false)
         }
      }
     }



     const productOrdredByCommande = async()=>{
      if (loaction.pathname == `/store/${params.storeId}/articleprosmos`  ) {
      setLoading(true)
      setActive(2)
        const response=await fetch(`http://localhost:8000/orderByCommandes/${params.storeId}`, {
         method: 'GET',
         credentials: 'include', 
         headers: {
           'Content-Type': 'application/json', 
         },
       })
       const data = await response.json()
     if (data.success == true) {
         setArticle(data.productSeller)  
         setLoading(false)
       }


      }if (loaction.pathname == `/store/${params.storeId}/meilleur`) {
       
        setLoading(true)
        setActive(2)
          const response=await fetch(`http://localhost:8000/orderByCommandesMeilleur/${params.storeId}`, {
           method: 'GET',
           credentials: 'include', 
           headers: {
             'Content-Type': 'application/json', 
           },
         })
         const data = await response.json()
       if (data.success == true) {
           setArticle(data.productSeller)  
           setLoading(false)
         }
       

      }
     }





     const getArticlePertinence =async()=>{
    
      if (loaction.pathname == `/store/${params.storeId}/articleprosmos`  ) {

      setLoading(true)
      setActive(1)

      const response=await fetch(`http://localhost:8000/articlePromos/${params.storeId}`, {
       method: 'GET',
       credentials: 'include', 
       headers: {
         'Content-Type': 'application/json', 
       },
     })
     const data = await response.json()
   if (data.success == true) {
       setArticle(data.productPromos)  
       setLoading(false)
     }

    }if (loaction.pathname == `/store/${params.storeId}/meilleur`) {


      setLoading(true)
      setActive(1)

      const response=await fetch(`http://localhost:8000/articleMeilleur/${params.storeId}`, {
       method: 'GET',
       credentials: 'include', 
       headers: {
         'Content-Type': 'application/json', 
       },
     })
     const data = await response.json()
   if (data.success == true) {
       setArticle(data.productMeilleur)  
       setLoading(false)
     }


    }
     
   }


   const handleChange = (e:any) => {
    setChecked(e.target.checked);
};


const filtredProduct =(prod:any)=>{
  if (checked) {
   return  prod.prixlivraison === 0 
   }else{
    return prod
   }
}

  if (loading == true ) return <div>...loading</div>
 

  return (
    <Box sx={{width:'100%',display:'flex',justifyContent:'center'}} >
        <Box sx={{width:'60%',display:'flex',justifyContent:'space-between'}} >
         <Box sx={{width:'22%',display:'flex',flexDirection:'column',alignItems:'center'}} >

            <Box sx={{width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',flexDirection:'column',justifyContent:'center',my:2}} >
            <Box sx={{bgcolor:'#84ffff',width:'100%',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Typography variant="subtitle2" gutterBottom>
            Catégories de magasins
      </Typography>
            </Box>
            <List
      component="nav"
            sx={{position:'relative'}}
      subheader={
        <ListSubheader sx={{textAlign:'left',zIndex:0,position:'relative'}} disableSticky component="div" id="nested-list-subheader">
          <Link sx={{color:'black',display:'flex',alignItems:'center',":hover":{color:'#ff3d00'}}} href="#" underline="none">
          <SummarizeIcon sx={{fontSize:'12px',mr:1}} /> chaussur Homme
      </Link>
        </ListSubheader>
      }
    >
      <ListItem sx={{ml:3}} >
      <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
       - Homme Adidas
      </Link>
      </ListItem>
      <ListItem sx={{ml:3}} >
      <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
      - Homme Adidas
      </Link>
      </ListItem>
      <ListItem sx={{ml:3}}>
      <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
     - Homme Adidas
      </Link>
      </ListItem>
     
    </List>
            
    <List
      component="nav"
     
      subheader={
        <ListSubheader sx={{textAlign:'left',zIndex:0}} disableSticky component="div" id="nested-list-subheader">
          <Link sx={{color:'black',display:'flex',alignItems:'center',":hover":{color:'#ff3d00'}}} href="#" underline="none">
          <SummarizeIcon sx={{fontSize:'12px',mr:1}} />  chaussur Famme
      </Link>
        </ListSubheader>
      }
    >
      <ListItem sx={{ml:3}} >
      <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
       - Homme Adidas
      </Link>
      </ListItem>
      <ListItem sx={{ml:3}} >
      <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
      - Homme Adidas
      </Link>
      </ListItem>
      <ListItem sx={{ml:3}}>
      <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
     - Homme Adidas
      </Link>
      </ListItem>
     
    </List>



            </Box>


        
         
            <Box sx={{width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
            <Box sx={{bgcolor:'#84ffff',width:'100%',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Typography variant="subtitle2" gutterBottom>
            Recommandé
      </Typography>
            </Box>
           
             { cardRecomand.map(rec=> <Box key={rec.id} sx={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',mb:1,pl:1}} >
              <img src='https://i.pinimg.com/236x/63/ac/c0/63acc0fbe97516b76e94cd3a29c118c6.jpg' alt='' style={{height:'70px',width:'70px',borderRadius:'8px'}} />
              <Box sx={{display:"flex",flexDirection:'column',ml:1}} >
              <Link sx={{color:'#616161',fontSize:'12px',textAlign:'left',":hover":{color:'#ff3d00'}}} href="#" underline="none">
              Baskets légères en cuir PU pour hom...
      </Link>
      <Typography sx={{fontWeight:'800',textAlign:'left',color:'#ff3d00'}} variant="caption" gutterBottom>
      462.60 DA
      </Typography>

      <Typography sx={{fontWeight:'100',textAlign:'left',color:'#616161'}} variant="caption" gutterBottom>
      Commander(5419)
      </Typography>
              </Box>
             </Box>)}


            </Box>
        

        


         </Box>
         <Box sx={{width:'73%',display:'flex',flexDirection:'column',alignItems:'center'}} >
            <Box sx={{my:2,width:'100%',height:'50px',bgcolor:'#eeeeee',display:'flex',alignItems:'center',pl:3}} >
            <Typography sx={{fontWeight:'500',textAlign:'left'}} variant='body1' gutterBottom>
            Catégories de boutiques
      </Typography>
               <ChevronRightIcon sx={{fontSize:'22px'}} />

             
               <Typography sx={{fontWeight:'300',textAlign:'left'}} variant='body1' gutterBottom>
               {article.filter(filtredProduct).length} articles trouvés
      </Typography>
     

            </Box>
          
            <Box sx={{my:2,width:'100%',height:'50px',bgcolor:'#eeeeee',display:'flex',alignItems:'center',pl:3}} >
                {active === 1 ? 
                <Button onClick={getArticlePertinence} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Pertinence</Button>

                : 
                <Button onClick={getArticlePertinence} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Pertinence</Button>
            }

            
            {active === 2 ?
        <Button onClick={productOrdredByCommande} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Commandes<ArrowDownwardIcon sx={{fontSize:'14px',color:'#ff3d00'}} /></Button>
        :
        <Button onClick={productOrdredByCommande} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Commandes<ArrowDownwardIcon sx={{fontSize:'14px'}} /></Button>
        }
         

           {active === 3 ?
        <Button onClick={productOrdredByPrice} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Prix<ImportExportIcon sx={{fontSize:'14px',color:'#ff3d00'}} /></Button>
        :
        <Button onClick={productOrdredByPrice} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Prix<ImportExportIcon sx={{fontSize:'14px'}} /></Button>
        }

            <FormControlLabel 
            control={<Checkbox  
              onChange={handleChange}
              checked={checked}
              />} 
            label="Livraison gratuite" />
            </Box>

            <Box sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',width:'100%'}} >

             {article.filter(filtredProduct).map((cart:any)=> <Box key={cart.id} sx={{width:'22%',display:'flex',flexDirection:'column',position:'relative'}} >
               <Box sx={{height:'200px',width:'100%',mb:1,display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'8px',borderStyle:'solid',borderColor:'#eeeeee'}} >
               <img src={cart.images[0].imageUrl} style={{height:'90%',width:'90%'}} />
               </Box>
               <Link sx={{color:'#616161',fontSize:'12px',textAlign:'left',mb:1,":hover":{color:'#ff3d00'}}} href={`/${cart.id}`} underline="none">
              {cart.title}
      </Link>
       
      { cart.solde === 0 ? "" : <Typography sx={{fontWeight:'800',textAlign:'left',color:'#ff3d00'}} variant="caption" gutterBottom>
      { cart.price - (cart.price*cart.solde/100)} DA
      </Typography>}
        
      <Typography sx={{fontWeight:'800',textAlign:'left',color:'#bdbdbd',textDecorationLine:'line-through'}} variant="caption" gutterBottom>
      {cart.price} DA
      </Typography>



      <Typography sx={{fontWeight:'100',textAlign:'left',color:'#616161'}} variant="caption" gutterBottom>
      Commander({cart.article.reduce((accumulator:any, currentValue:any) => {return accumulator + currentValue.quantity;}, 0)})
      </Typography>

         { cart.solde === 0 ? "" : <Box sx={{clipPath:'polygon(0 0, 100% 0, 100% 50%, 48% 100%, 48% 100%, 0% 50%)',bgcolor:'#ff3d00',display:'flex',justifyContent:'center',alignItems:'center',position:'absolute',top:0,right:0,height:'50px',width:'50px',}} >
         <Typography sx={{fontWeight:'400',textAlign:'left',color:'white'}} variant="body1" gutterBottom>
      {cart.solde}
      </Typography>
      <Typography sx={{textAlign:'left',color:'white'}} variant='caption' gutterBottom>
      %
      </Typography>
         </Box>}


              </Box>)}
             
            </Box>
 
            { article.length < 35 ? "" : <Box sx={{my:2,width:'100%',height:'30px',bgcolor:'#eeeeee',display:'flex',alignItems:'center',justifyContent:'space-between',pl:3}} >

             <IconButton onClick={handlePrevPage} disabled={currentPage === 1} sx={{fontSize:'16px',fontWeight:'450',mr:3}} >
                <NavigateBeforeIcon sx={{fontSize:'20px'}} />
                privious
             </IconButton>

             <IconButton onClick={handleNextPage} disabled={currentPage === totalPages} sx={{fontSize:'16px',fontWeight:'450'}} >
             next
                <NavigateNextIcon sx={{fontSize:'20px'}} />
                
             </IconButton>

           
     

            </Box>}
          


         </Box>
        </Box>
    </Box>
  )
}
