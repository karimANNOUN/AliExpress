import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const EntrepriseSellerInfo = ({sells}:any) => {

    const entrepriseInf = [
        {id:0,info:'Entreprise Type',details:`${sells.entrepriseInfo.entrepriseType}`},
        {id:1,info:'Raison Sociale',details:`${sells.entrepriseInfo.raisonSociale}`},
        {id:2,info:'Number Sirene',details:`${sells.entrepriseInfo.numberSirene}`},
        {id:3,info:'Tva Number',details:`${sells.entrepriseInfo.tvaNumber}`},
        {id:4,info:'Industry Type',details:`${sells.entrepriseInfo.industryType}`},
        {id:5,info:'Entreprise Phone Number',details:`${sells.entrepriseInfo.entreprisePhoneNumber}`},
    ]


    const entrepriseLocation = [
        {id:0,info:'Country',details:`${sells.entrepriseInfo.pays}`},
        {id:1,info:'Wilaya Entreprise',details:`${sells.entrepriseInfo.stateEntreprise}`},
        {id:2,info:'Commune',details:`${sells.entrepriseInfo.commune}`},
        {id:3,info:'Code Postale',details:`${sells.entrepriseInfo.postalCode}`},
        {id:4,info:'Rue Number',details:`${sells.entrepriseInfo.rueNumber}`},
    ]


    const managerIdentity = [
        {id:0,info:'Business Manager',details:`${sells.entrepriseInfo.businessManager}`},
        {id:1,info:'Certificat Type',details:`${sells.entrepriseInfo.certificatType}`},
        {id:2,info:'Certificat Number',details:`${sells.entrepriseInfo.certificatNumber}`},
    ]

  return (
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',width:'100%',mt:4}} >
    
    <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >
        <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
        Entreprise Info
    </Typography>
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',mt:2}} >
    { entrepriseInf.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
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
    Image Status:
    </Typography>

    <img 
    src={sells.entrepriseInfo.imageStatus} 
    style={{width:'100%',height:'200px',borderRadius:'8px'}}
    />

    </Box>

   

        </Box>



        <Box sx={{width:'30%',display:'flex',flexDirection:'column',p:1}} >
        <Typography sx={{fontWeight:'700',textAlign:'left',mb:2}} variant="body1" gutterBottom>
        Entreprise Location
    </Typography>
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',my:2}} >
    { entrepriseLocation.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
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
        Entreprise Manager Identity
    </Typography>
    <Box sx={{width:'100%',maxHeight:'400px',overflowY:'auto',display:'flex',flexDirection:'column',justifyContent:'flex-start',mt:2}} >
    { managerIdentity.map( (profil) => <Box key={profil.id} sx={{display:'flex',alignItems:'center',mb:1}} >
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
    Certificat D'entriprise:
    </Typography>

    <img src={sells.entrepriseInfo.certificatEntreprise}  style={{width:'100%',height:'200px',borderRadius:'8px'}} />
    </Box>

   

        </Box>


    </Box>
  )
}
