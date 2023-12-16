import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { motion } from "framer-motion";
import Paper from '@mui/material/Paper';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import BallotIcon from '@mui/icons-material/Ballot';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import BrandingWatermarkRoundedIcon from '@mui/icons-material/BrandingWatermarkRounded';
import { useTranslation } from 'react-i18next';





export const Header = () => {

    const [accord,setAccord]=useState(true)

    const [qrcode,setQrcode]=useState(true)


    const { t, i18n } = useTranslation();



    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: '50%',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        display:'flex',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
          
        },
      }));


  return (
    <div >
        <Box dir="auto" sx={{bgcolor:'#424242',height:'120px',display:'flex',alignItems:'center',justifyContent:'space-around'}} >
        <Typography sx={{fontFamily:'fantasy',color:'white',textShadow:'0px 0px 40px window'}} variant="h4" gutterBottom>
        {t('khademni')}
      </Typography>
      <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'black'}} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>


          <div style={{height:'100%',display:'flex',alignItems:'center'}}   onMouseEnter={ ()=> setQrcode(false)} onMouseLeave={()=> setQrcode(true)} >
            <Box sx={{display:'flex',width:'210px'}} >
             <QrCode2Icon sx={{fontSize:'40px',color:'white',mr:1}} />
             <Typography sx={{color:'white',fontWeight:'400',textAlign:'left'}} variant="subtitle2" gutterBottom>
             {t('Télécharger l\'Application Ali Express')}
      </Typography>

            </Box>

            { !qrcode ?  <div dir="auto" style={{position:'absolute',zIndex:1 ,top:'120px' ,left:'1330px',backgroundColor:'red',width:'100%',borderRadius:'20px',maxWidth:560}} >
         <Paper  elevation={12} sx={{ bgcolor: 'background.paper',display:'flex' }}>
         <QrCode2Icon sx={{fontSize:'125px'}} />
         <Box>
         <Typography sx={{fontWeight:'800',textAlign:'left',mt:2}} variant="h6" gutterBottom>
       Télécharger l'Application Ali Express
      </Typography>
      <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant="subtitle2" gutterBottom>
      {t('Scannez le code QR pour télécharger')}
      </Typography>
      </Box>
         </Paper>
         </div> : ""}


          </div>


          <motion.div dir="auto" style={{height:'100%',display:'flex',alignItems:'center'}}   onMouseEnter={ ()=> setAccord(false)} onMouseLeave={()=> setAccord(true)} >
          <Box dir="auto"  sx={{display:'flex'}} >
          <PersonOutlineIcon sx={{fontSize:'50px',color:'white'}} />
          <Box  >
          <Typography dir="auto" sx={{color:'white',fontWeight:'400',textAlign:'left'}} variant="subtitle2" gutterBottom>
        {t('bienvenu')}
      </Typography>
      <Box sx={{display:'flex',alignItems:'center'}} >
      <Typography sx={{color:'white',fontWeight:'800',textAlign:'left'}} variant="subtitle2" gutterBottom>
        {t('Se Connecter/S\'inscrire')}
      </Typography>
      { accord ? <ExpandMoreIcon sx={{fontSize:'20px',color:'white'}} /> : <ExpandLessIcon sx={{fontSize:'20px',color:'white'}} /> }
      </Box>
      

          </Box>
          </Box>


          { !accord ? <motion.div dir="auto" style={{position:'absolute',zIndex:1 ,top:'120px' ,left:'1530px',width:'100%',borderRadius:'20px',maxWidth:360}} >
            <Paper elevation={12} sx={{ bgcolor: 'background.paper' , borderRadius:'16px' }}>
           <nav  aria-label="main mailbox folders">
         <List  >
          <ListItem sx={{width:'80%',mx:'auto'}} disablePadding>
            <ListItemButton sx={{bgcolor:'black',borderRadius:'20px',display:'flex',justifyContent:'center',":hover":{bgcolor:'black'}}} >
              <ListItemText primary="Se Connecter" sx={{color:'white',textAlign:'center'}} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>

              <ListItemText sx={{textAlign:'center'}} primary="S'inscrire" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider sx={{width:'90%',mx:'auto'}} />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}} >
                <ListItemIcon>
                    <BallotIcon/>
                </ListItemIcon>
              <ListItemText primary="Les Commandes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}} >
            <ListItemIcon>
                    <GpsFixedIcon/>
                </ListItemIcon>
              <ListItemText primary="Mes Pièces" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
            <ListItemIcon>
                    <MessageRoundedIcon/>
                </ListItemIcon>
              <ListItemText primary="Centre de Messagerie" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
            <ListItemIcon>
                    <PaymentRoundedIcon/>
                </ListItemIcon>
              <ListItemText primary="Paiment" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
            <ListItemIcon>
                    <FavoriteBorderRoundedIcon/>
                </ListItemIcon>
              <ListItemText primary="Mes Favoris" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
            <ListItemIcon>
                    <BrandingWatermarkRoundedIcon/>
                </ListItemIcon>
              <ListItemText primary="My Coupons" />
            </ListItemButton>
          </ListItem>
           
          <Divider sx={{width:'90%',mx:'auto'}} />

          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
              <ListItemText primary="S'identifer" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
              <ListItemText primary="Protection de l'Achteur" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton sx={{":hover":{color:'#ef6c00'}}}>
              <ListItemText primary="Service Client" />
            </ListItemButton>
          </ListItem>



        </List>
      </nav>
      </Paper></motion.div> : '' }


          </motion.div>

         
         



        </Box>
    </div>
  )
}
