import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {  Link  } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
export const ButtomPart = () => {

   const { t, i18n } = useTranslation();

  return (
    <div>
        <Box sx={{bgcolor:'#e0e0e0',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <Box sx={{display:'flex',flexDirection:'column',width:'80%'}} >
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}} >
             <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
              Service client
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} > Contrat de services de transaction</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >pour les consommateurs hors</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} > UE/Royaume-Uni</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >Conditions générales pour les</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >consommateurs de</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >l'UE/EEE/Royaume-Uni (transactions)</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >Service client</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >Notre enquête de satisfaction</Link>
             </Typography>
             </Box>

             <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Guide d'achat
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} > Créer un compte</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >Paiements</Link>
             </Typography>
             </Box>



             <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Collaborations
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} > Partenariats</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >Programme d'affiliés</Link>
             </Typography>
             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >DS Center</Link>
             </Typography>

             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >S'identifier</Link>
             </Typography>

             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >中国卖家入驻</Link>
             </Typography>

             <Typography sx={{textAlign:'left',color:'#757575'}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}} >Inscrivez-vous</Link>
             </Typography>

             </Box>


             <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Payer avec
             </Typography>
             <Box sx={{display:'flex',flexDirection:'column'}} >
                <Box sx={{display:'flex',mb:1}} >
             <img src='https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png' style={{height:'30px',width:'50px'}} />
             <img src='https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png' style={{height:'30px',width:'50px',marginRight:2}} />
             <img src='https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png' style={{height:'30px',width:'50px',marginRight:2}} />
             <img src='https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png' style={{height:'30px',width:'50px'}} />
                </Box>
             <Box sx={{display:'flex'}} >
             <img src='https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png' style={{height:'30px',width:'50px',marginRight:1}} />
             <img src='https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png' style={{height:'30px',width:'50px'}} />
             </Box>
             </Box>
            
             </Box>

             <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Suivez-nous sur :
             </Typography>
             <Box sx={{display:'flex'}} >

             </Box>
            
             </Box>

             

            </Box>
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >

           <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} >
            
            <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Information sur AliExpress
             </Typography>
             <Box sx={{display:'flex'}} >

             <Typography sx={{textAlign:'left',color:'#757575',":hover":{color:'#ff5722'}}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Service client</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Litiges et rapports</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Protection de l'acheteur</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Signaler une infraction des DPI</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Regulated Information</Link>,<br/>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Integrity Compliance</Link>
             </Typography>

             </Box>
             
             

            </Box>

            <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Parcourir les catégories
             </Typography>
             <Box sx={{display:'flex'}} >

             <Typography sx={{textAlign:'left',color:'#757575',":hover":{color:'#ff5722'}}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Les plus populaires</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Produits</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Promotions</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Bas Prix</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >   Comparer</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Commentaires</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Marques chinoises</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Blog</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Seller Portal</Link>,<br/>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  BLACK FRIDAY</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >   Assistant AliExpress</Link>
             </Typography>

             </Box>
             
             

            </Box>

           

            
         


</Box>
                 
<Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start'}} >
            
            <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             AliExpress Sites Multi-langue
             </Typography>
             <Box sx={{display:'flex'}} >

             <Typography sx={{textAlign:'left',color:'#757575',":hover":{color:'#ff5722'}}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Pусский</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Español</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Français</Link>,
             <Link to={''} style={{color:'#757575',textDecorationLine:'none'}}  > اللغة العربي</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Polish</Link>,<br/>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > עברית</Link>
           <Button variant='text'  onClick={() => i18n.changeLanguage('ar')}  >arabic</Button> 
             </Typography>

             </Box>
             
             

            </Box>

            <Box sx={{display:'flex',flexDirection:'column'}} >
             <Typography sx={{my:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
             Alibaba Group
             </Typography>
             <Box sx={{display:'flex'}} >

             <Typography sx={{textAlign:'left',color:'#757575',":hover":{color:'#ff5722'}}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Alibaba Group Website</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  AliExpress</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Alimama</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Alipay</Link>,
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  >  Fliggy</Link>,<br/>
             <Link to={`/`} style={{color:'#757575',textDecorationLine:'none'}}  > Alibaba Cloud</Link>
             </Typography>

             </Box>
             
             

            </Box>

            
         


</Box>



</Box>







</Box>

        </Box>



        <Box sx={{bgcolor:'#212121',display:'flex',justifyContent:'center',alignItems:'center'}} >
             <Box sx={{display:'flex',width:'80%',my:2}} >
             <Typography sx={{textAlign:'left',color:'white',":hover":{color:'#ff5722'}}}  variant='body2' gutterBottom>
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Group Website</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  AliExpress</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alimama</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Alipay</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Fliggy</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Cloud</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Group Website</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  AliExpress</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alimama</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Alipay</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Fliggy</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Cloud</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Group Website</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  AliExpress</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alimama</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Alipay</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Fliggy</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Cloud</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Group Website</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  AliExpress</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alimama</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Alipay</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Fliggy</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Cloud</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Cloud</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Group Website</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  AliExpress</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alimama</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Alipay</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  >  Fliggy</Link>,
             <Link to={`/`} style={{color:'white',textDecorationLine:'none'}}  > Alibaba Cloud</Link>
             </Typography>
             </Box>
       </Box>



    </div>
  )
}
