import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const LegalSellerInfo = ({sells}:any) => {


    const legallInf = [
        {id:0,info:'Completed Name',details:`${sells.reprisentativeLegal.completeName}`},
        {id:1,info:'Nationality',details:`${sells.reprisentativeLegal.nationality}`},
        {id:2,info:'Native Country',details:`${sells.reprisentativeLegal.nativeCountry}`},
        {id:3,info:'Birthday Date',details:`${sells.reprisentativeLegal.birthday}`},
        {id:4,info:'Phone Number',details:`${sells.reprisentativeLegal.legalPhoneNumber}`},
    ]


    const legalLocation = [
        {id:0,info:'Country',details:`${sells.reprisentativeLegal.pays}`},
        {id:1,info:'Wilaya',details:`${sells.reprisentativeLegal.state}`},
        {id:2,info:'Commune',details:`${sells.reprisentativeLegal.commune}`},
        {id:3,info:'Code Postale',details:`${sells.reprisentativeLegal.postalCode}`},
    ]


    const legalIdentity = [
        {id:0,info:'identityType',details:`${sells.reprisentativeLegal.identityType}`},
        {id:1,info:'identityTypeNumber',details:`${sells.reprisentativeLegal.identityTypeNumber}`},
        {id:2,info:'expireIdentity',details:`${sells.reprisentativeLegal.expireIdentity}`},
    ]


  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',width:'100%',my:2}} >
    
    <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >
        <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
        Representative Legal Info
    </Typography>
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',mt:2}} >
    { legallInf.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
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
        <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
        Representative Legal Location
    </Typography>
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',my:2}} >
    { legalLocation.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
    <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    {profil.info}:
    </Typography>

    <Typography sx={{color:'#9e9e9e',textAlign:'left',ml:1}} variant="subtitle2" gutterBottom>
        {profil.details}
        </Typography>

    </Box>)}

    </Box>

    <Box  sx={{display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    Certificat Résidence:
    </Typography>

    <img 
    src={sells.reprisentativeLegal.certificatResidence} 
    style={{width:'100%',height:'200px',borderRadius:'8px'}}
    />

    </Box>
    
   
   

        </Box>




        <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >
        <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
        Representative Legal Identity
    </Typography>
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',mt:2}} >
    { legalIdentity.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
    <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    {profil.info}:
    </Typography>

    <Typography sx={{color:'#9e9e9e',textAlign:'left',ml:1}} variant="subtitle2" gutterBottom>
        {profil.details}
        </Typography>

    </Box>)}

    </Box>

    <Box  sx={{display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
    Certificat D'identity:
    </Typography>

    <img src={sells.reprisentativeLegal.identityImages}  style={{width:'100%',height:'200px',borderRadius:'8px'}} />
    </Box>

   

        </Box>


    </Box>
  )
}
