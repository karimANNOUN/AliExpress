import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { CompteListe } from '../../components/CompteListe';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';




export const NotificationEmail = () => {

    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
      ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
          padding: 0,
          margin: 2,
          transitionDuration: '300ms',
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#f4511e',
              opacity: 1,
              border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: 0.5,
            },
          },
          '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
          },
          '&.Mui-disabled .MuiSwitch-thumb': {
            color:
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
          },
          '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
          },
        },
        '& .MuiSwitch-thumb': {
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        '& .MuiSwitch-track': {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
          opacity: 1,
          transition: theme.transitions.create(['background-color'], {
            duration: 500,
          }),
        },
      }));

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'73%'}} >
                   

                      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'53%',bgcolor:'Window',p:2}} >

                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Alertes et rappels de prix
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Soyez informé des réductions sur les articles présents dans votre panier et dans vos favoris
                     </Typography>

                            </Box>


                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Recommandations d'articles
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Recevez des suggestions basées sur vos achats récents, vos recherches et les articles que vous avez consultés.
                     </Typography>

                            </Box>



                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Exclusivités pour les membres
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Profitez de nos réductions pour les anniversaires et les fêtes ! Ainsi que : coupons exclusifs, offres membres et plus encore.
                     </Typography>

                            </Box>




                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Des annonces de ventes
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Soyez au courant de nos grandes ventes comme le 11.11 Global Shopping Festival !
                     </Typography>

                            </Box>





                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Offres du jour
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Recevez des mises à jour quotidiennes d'AliExpress, y compris les dernières promotions et les nouveaux arrivages.
                     </Typography>

                            </Box>





                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Le suivi des commandes
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Recevez des notifications instantanément sur le suivi des commandes, les paiements, etc.
                     </Typography>

                            </Box>


 
                       </Box>

                    


       </Box>
    </Box>
</div>
  )
}
