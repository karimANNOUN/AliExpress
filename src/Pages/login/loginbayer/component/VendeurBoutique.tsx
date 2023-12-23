import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Header } from './Header';
import { Footer } from './Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';



export const VendeurBoutique = () => {


    const options2 =["adrar","chlef","annaba","el taref","alger","guelma"]

    const steps = [
        'Créer un compte',
        'Renseignements sur l’entreprise',
        'Examen de la demande',
      ];


      
      const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });






  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#eeeeee'}} >
        
        <Header/>

        <Box sx={{ width: '50%' ,my:2 ,p:2  }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
           



        <Box sx={{width:'50%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',p:2,mb:3}} >


        <Box sx={{display:'flex',flexDirection:'column',width:'50%',my:1}} >

        <Typography  sx={{fontWeight:'700',textAlign:'left'}}  variant='h6' gutterBottom>
        Créez votre boutique
        </Typography>
           
        <Accordion sx={{width:'100%',border:'1px solid #e0e0e0'}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant='subtitle2' sx={{textAlign:'left'}} >NOUVEL ajustement de la politique de recrutement des vendeurs locaux</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{width:'100%',display:'flex',flexDirection:'column'}} >
                 <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >


                  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
                       <MapsHomeWorkOutlinedIcon sx={{fontSize:'50px',mb:1}} />
                       <Typography variant='caption' sx={{}} >E-mail d’invitation</Typography>
                  </Box>

                  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
                  <Person2OutlinedIcon sx={{fontSize:'50px',mb:1}} />
                       <Typography variant='caption' sx={{}} >Qualification KYC</Typography>
                    </Box>
                    
                    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
                    <ReceiptLongOutlinedIcon sx={{fontSize:'50px',mb:1}} />
                       <Typography variant='caption' sx={{}} >licence/certificat d’entreprise</Typography>
                     </Box>

                 </Box>

               
                 <Typography variant='subtitle2' sx={{textAlign:'left',mt:2}} >
                 À partir du 20 avril 2022, AliExpress a ajusté la politique de recrutement des vendeurs locaux, 
                    passant d'une inscription ouverte sur la plateforme à un processus de recrutement sur invitation uniquement.
                    (  a target='_blank )
                 </Typography>
                

          </Box>
        </AccordionDetails>
      </Accordion>


      <Typography variant='subtitle2' sx={{textAlign:'left',mt:2}} >
                    Le nom de fichier 'STATUTS CONSTITUTIFS' correspond aux statuts constitutifs d'une entreprise.
                  Les entrepreneurs individuels n'ont pas besoin de statuts d'entreprise.

                    </Typography>

        <Button variant="outlined" component="label" sx={{width:'120px',height:'140px',color:'black',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'black'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput type="file" />
        </Button>
       
       
      <Typography variant='caption' sx={{textAlign:'left',color:'#bdbdbd',mb:2}} >
                    
      Fichiers pris en charge : PDF, JPG, PNG, max 50MB.
                    </Typography>
       
            <label htmlFor='entreprise' style={{textAlign:'left'}} > Type d'entreprise </label>
            <Autocomplete
      id="entreprise"
      options={options2}
      sx={{ width: '100%',my:1 }}
      size="small"
      placeholder='choose your state'
      renderInput={(params) => <TextField {...params} placeholder='veuillez sélectioner'  />}
    />
         
       
         <label htmlFor='entreprisecmp' style={{textAlign:'left'}} > Raison sociale </label>
            
   <TextField
  id="entreprisecmp"
  sx={{ width: '100%' ,my:1}}
  placeholder="veuillez sélectioner le nom complet de votre entreprise "
  size='small'
    />


<label htmlFor='SRN' style={{textAlign:'left'}} > Numéro de SIRENE </label>
     

     <TextField
      id="SRN"
      sx={{ width: '100%' ,my:1}}
      placeholder="Entre Number SRN "
      size='small'
        />


<Typography variant='subtitle2' sx={{textAlign:'left',fontWeight:'700',mt:2}} >
licence/certificat d’entreprise

                    </Typography>

        <Button variant="outlined" component="label" sx={{width:'120px',height:'140px',color:'black',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'black'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput type="file" />
        </Button>
       
       
      <Typography variant='caption' sx={{textAlign:'left',color:'#bdbdbd',mb:2}} >
                    
      Seulement les formats 'pdf.', 'jpg.' ou 'png.' sont autorisés. Téléchargez-en au moins 1 et seulement jusqu'à 5.
       Notez que chaque fichier ne peut pas dépasser 10M. Ex : Fichier fiscal-NIF,
        Document d'impôt 036, Document d'impôt 037, CIRCE...
                    </Typography>

          
    <label htmlFor='tva' style={{textAlign:'left'}} > TVA Number </label>
     

     <TextField
      id="tva"
      sx={{ width: '100%' ,my:1}}
      placeholder="Entre your TVA NUMBER "
      size='small'
        />


<label htmlFor='adress' style={{textAlign:'left'}} > Adresse d’enregistrement de la société </label>
     
     <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}} >
     <TextField
      id="adress"
      sx={{ width: '45%'  ,my:1}}
      placeholder="Pays "
      size='small'
        />
         <TextField
      id="adresse"
      sx={{ width: '45%' ,my:1}}
      placeholder="wilaya"
      size='small'
        />
         <TextField
      id="adresses"
      sx={{ width: '45%'  ,my:1}}
      placeholder="commune"
      size='small'
        />
         <TextField
      id="adressees"
      sx={{ width: '45%' ,my:1}}
      placeholder="code postale "
      size='small'
        />
     </Box>
    
         
     <TextField
      sx={{ width: '100%' ,my:1}}
      placeholder="Name & Number  Rue "
      size='medium'
        />
         
         <label htmlFor='industrie' style={{textAlign:'left'}} > Type d’industrie </label>
         <Autocomplete
      id="industrie"
      options={options2}
      sx={{ width: '100%',my:1 }}
      size="small"
      placeholder='choose your state'
      renderInput={(params) => <TextField {...params} placeholder='veuillez sélectioner'  />}
    />


       
<label htmlFor='grn' style={{textAlign:'left'}} > Nom du gérant de l'’entreprise</label>
     

     <TextField
      id="grn"
      sx={{ width: '100%' ,my:1}}
      placeholder="Nom complet de gérant de boutique / entreprise "
      size='small'
        />

<label htmlFor='crt' style={{textAlign:'left'}} > Type de certificat</label>
         <Autocomplete
      id="crt"
      options={options2}
      sx={{ width: '100%',my:1 }}
      size="small"
      placeholder='choose your state'
      renderInput={(params) => <TextField {...params} placeholder='veuillez sélectioner'  />}
    />
         
        
         <label htmlFor='crtnmr' style={{textAlign:'left'}} > certificat NMR </label>
     

     <TextField
      id="crtnmr"
      sx={{ width: '100%' ,my:1}}
      placeholder="Nom complet de gérant de boutique / entreprise "
      size='small'
        />


<Typography  sx={{fontWeight:'700',textAlign:'left',my:2}}  variant='h6' gutterBottom>
Informations du représentant légal
        </Typography>
       


        <label htmlFor='rptlgl' style={{textAlign:'left'}} > Nom complet</label>
     

     <TextField
      id="rptlgl"
      sx={{ width: '100%' ,my:1}}
      placeholder="Nom complet de Représentant légal "
      size='small'
        />
        
        <label htmlFor='Nationalité' style={{textAlign:'left'}} > Nationalité</label>
     

     <TextField
      id="Nationalité"
      sx={{ width: '100%' ,my:1}}
      placeholder="entrer Nationalité "
      size='small'
        />


<label htmlFor='rsd' style={{textAlign:'left'}} > Pays de naissance</label>
     

     <TextField
      id="rsd"
      sx={{ width: '100%' ,my:1}}
      placeholder="entrer Pays de naissance "
      size='small'
        />


<label htmlFor='ncs' style={{textAlign:'left'}} > Date de naissance</label>
     

     <TextField
      id="ncs"
      sx={{ width: '50%' ,my:1}}
      placeholder="Sélectionnez date "
      size='small'
      type='date'
        />


        
<label htmlFor='idt' style={{textAlign:'left'}} > Type de pièce d'identité</label>
         <Autocomplete
      id="idt"
      options={options2}
      sx={{ width: '100%',my:1 }}
      size="small"
      placeholder='choose your state'
      renderInput={(params) => <TextField {...params} placeholder='veuillez sélectioner'  />}
    />

     
<label htmlFor='idtnm' style={{textAlign:'left'}} > Numéro d'identité</label>
     

     <TextField
      id="idtnm"
      sx={{ width: '100%' ,my:1}}
      placeholder="Carte d'identité de représentant légal NMR"
      size='small'
        />

<label htmlFor='ncs' style={{textAlign:'left'}} > Date d’expiration</label>
     

     <TextField
      id="ncs"
      sx={{ width: '50%' ,my:1}}
      placeholder="Sélectionnez date "
      size='small'
      type='date'
        />

    
<Typography variant='subtitle2' sx={{textAlign:'left',fontWeight:'700',mt:2}} >
Pièce d'identité (recto-verso et en couleur)

                    </Typography>

        <Button variant="outlined" component="label" sx={{width:'120px',height:'140px',color:'black',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'black'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput type="file" />
        </Button>
       
       
      <Typography variant='caption' sx={{textAlign:'left',color:'#bdbdbd',mb:2}} >
                    
      Seulement 'jpg.' ou 'png.' est autorisé, téléchargez au moins 1 et jusqu'à 5, et chaque fichier ne peut pas dépasser 10M.
                    </Typography>

                    <label htmlFor='adressrep' style={{textAlign:'left'}} > Adresse du domicile </label>
     
     <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}} >
     <TextField
      id="adressrep"
      sx={{ width: '45%'  ,my:1}}
      placeholder="Pays "
      size='small'
        />
         <TextField
      id="adresse"
      sx={{ width: '45%' ,my:1}}
      placeholder="wilaya"
      size='small'
        />
         <TextField
      id="adresses"
      sx={{ width: '45%'  ,my:1}}
      placeholder="commune"
      size='small'
        />
         <TextField
      id="adressees"
      sx={{ width: '45%' ,my:1}}
      placeholder="code postale "
      size='small'
        />
     </Box>^

      
     <Typography variant='subtitle2' sx={{textAlign:'left',fontWeight:'700',mt:2}} >
     Justificatif de domicile du représentant légal

                    </Typography>

        <Button variant="outlined" component="label" sx={{width:'120px',height:'140px',color:'black',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'black'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput type="file" />
        </Button>
       
       
      <Typography variant='caption' sx={{textAlign:'left',color:'#bdbdbd',mb:2}} >
                    
      Seulement 'jpg.' ou 'png.' est autorisé, téléchargez au moins 1 et jusqu'à 5, et chaque fichier ne peut pas dépasser 10M.
                    </Typography>


               <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}} >     

               <Button variant='contained'  sx={{color:'black',width:'47%',textTransform:'lowercase',bgcolor:'Window',borderRadius:'12px',border:'1px solid #9e9e9e' ,":hover":{color:'black',bgcolor:'Window'} }} >
      Enregistrer
    </Button>

    <Button variant='contained' color='primary'  sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'} }} >
      Soumettre une demmande
    </Button>
                
                
                </Box>      

             
 
        </Box>

         
 

        </Box>

     

       <Footer/>

    </div>
  )
}
