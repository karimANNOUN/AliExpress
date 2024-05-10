import Box from '@mui/material/Box';
import Switch, { SwitchProps } from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

export const NotificationEmailSeller = () => {


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
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'#eeeeee',width:'100%'}} >

    <Typography  sx={{textAlign:'left',fontWeight:'300',mb:2}}  variant='h6' gutterBottom>
                    Notifications
                     </Typography>
   
       <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'73%',mb:2}} >
                   

                      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'53%',bgcolor:'Window',p:2}} >

                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Alertes et rappels de transactions
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               Soyez informé des formation sur votre transactions
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
                               Alert sur votre produits and quantites.
                     </Typography>

                            </Box>



                            <Box sx={{display:'flex',flexDirection:'column',width:'100%',mb:2}} >
                               <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                               <Typography  sx={{textAlign:'left',fontWeight:'300'}}  variant='h6' gutterBottom>
                               Exclusivités pour les membres d'acahat
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               pour les membres qui following your store.
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
                               singale et avertissement sur votre produit 
                     </Typography>
                                 
                     <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
                               </Box>

                                
                               <Typography  sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'300'}}  variant='subtitle2' gutterBottom>
                               votre produit signaler.
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
    
</div>
  )
}
