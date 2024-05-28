import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecyclingIcon from '@mui/icons-material/Recycling';

export const ProfilCustomerInfo = ({customer}:any) => {

    const calculateTotalSales = (customer:any) =>{

        let total = 0;
    
        customer.articleBuyer.filter((art:any)=> art.state == "terminees" ).forEach((product:any) => {
          total +=  product.quantity * product.priceProduct
      });
    
      return total;
       
      }

    const orderInfo = [
        {id:0,info:' Tous Commandes',details:customer.articleBuyer.length},
        {id:1,info:'Commandes Annuler',details:customer.articleBuyer.filter((art:any)=> art.state == "non paye" ).length},
        {id:2,info:'Commandes Accepter',details:customer.articleBuyer.filter((art:any)=> art.state == "terminees" ).length},
        {id:3,info:'Commandes En Attente',details:customer.articleBuyer.filter((art:any)=> art.state == "En Attente" ).length},
        {id:4,info:'Commandes En Livraison',details:customer.articleBuyer.filter((art:any)=> art.state == "expédiée" ).length},
        {id:5,info:'Sales',details:`${calculateTotalSales(customer)}(DA)`},
    ]


    const profilInf = [
        {id:0,info:'Full Name',details:`${customer.name}`},
        {id:1,info:'Mobile',details:`${  !customer.locationUser ? "Null" : customer.locationUser.phoneNumber}`},
        {id:2,info:'Email',details:`${customer.email}`},
        {id:3,info:'Location',details:`${ !customer.locationUser ? "Null" : customer.locationUser.country}`},
        {id:4,info:'Wilaya',details:`${customer.state}`},
        {id:5,info:'Adress',details:`${ !customer.locationUser ? "Null" : customer.locationUser.rueAdress} / ${ !customer.locationUser ? "Null" : customer.locationUser.commune} / Postal Code :(${ !customer.locationUser ? "Null" : customer.locationUser.postalCode}) `},
    ]

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',width:'100%',my:2}} >

    <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >
        <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
    Customer Orders Info
    </Typography>

  
    
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',mt:2}} >
    { orderInfo.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
    <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    {profil.info}:
    </Typography>

    <Typography sx={{color:'#9e9e9e',textAlign:'left',ml:1}} variant="subtitle2" gutterBottom>
        {profil.details}
        </Typography>

    </Box>)}

    </Box>

   

        </Box>

        <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >
        <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    Profil Information
    </Typography>

    <Typography sx={{color:'#9e9e9e',textAlign:'left',my:2}} variant="subtitle2" gutterBottom>
    Hi, {customer.name} this is all your profil khademni info 
    </Typography>

    {
     profilInf.map( (profil:any) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
    <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    {profil.info}:
    </Typography>

    <Typography sx={{color:'#9e9e9e',textAlign:'left',ml:1}} variant="subtitle2" gutterBottom>
        {profil.details}
        </Typography>

    </Box>)

  }

        </Box>

        <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >

        <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    Followings
    </Typography>

    
    { customer.followersBuyer.length === 0 ?  

<Box sx={{width:'100%',height:'250px',display:'flex',border:'solid 2px #e0e0e0',borderRadius:'8px',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:2}} >

<Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
    Not Find Followings
    </Typography>

    <RecyclingIcon  sx={{fontSize:'42px'}} />

        </Box>
: 
   
        <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'center',mt:2}} >

        { customer.followersBuyer.map( (profil:any) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between',mb:2}} >

<Box sx={{display:'flex',alignItems:'center'}} >
    <img 
    alt='kihy'
    src={profil.seller.firstImageStore == "" ? "https://almparts.co.za/wp-content/uploads/2021/12/no-image-available-icon.jpg" : profil.seller.firstImageStore } 
    style={{height:'60px',width:'60px',borderRadius:'8px' }}
    />

    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',ml:1}} >
    <Typography sx={{fontWeight:'500',textAlign:'left'}} variant="subtitle1" gutterBottom>
   {profil.seller.name}
 </Typography>

<Typography sx={{color:'#9e9e9e',textAlign:'left'}} variant="caption" gutterBottom>
{profil.seller.email}
</Typography>
        </Box>

    </Box>


    <Button sx={{textTransform:'lowercase'}} variant="text" color='error' >See</Button>

</Box>)}

        </Box>}
    
   

        </Box>

    </Box>
  )
}
