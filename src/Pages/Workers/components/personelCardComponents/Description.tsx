import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export const Description = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column'}} >
        <Box sx={{display:'flex'}} >
        <Button variant="text" sx={{color:'black',fontWeight:'800',":hover":{color:'black'}}} > <LocationOnIcon sx={{fontSize:'20px'}} /> Présentation</Button>
        <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Détails</Button>
        <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Customer Reviews</Button>
        <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Vous Aimerez Aussi</Button>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',my:2}} >
        <Typography sx={{fontWeight:'800'}} variant="subtitle1" gutterBottom>
        Présentation
      </Typography>
      <Button variant="text" sx={{color:'black',fontWeight:'800',":hover":{color:'black'}}} > Signaler cet article</Button>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',width:'900px'}} >
            <Box sx={{display:'flex',flexDirection:'column',my:2}} >
        <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
        Pour taille
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
      Veuillez choisir la taille en fonction de la longueur du pied (du talon aux orteils)!
Le matériel différent de pays différent ont la norme différente de taille.
Donc, notre taille américaine et la taille européenne peuvent être différentes de la vôtre.
Veuillez d'abord mesurer la longueur du pied, puis choisir la taille en conséquence.
Le numéro de taille marqué dans la semelle extérieure de la chaussure est le numéro de taille chinoise, pas la taille européenne.
      </Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',my:2}} >
        <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
        À propos de l'aberration chromatique
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
      En raison du contraste différent des moniteurs personnels, il peut y avoir une légère différence de couleur entre l'image et le produit réel.
      </Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',my:2}} >
        <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
        À propos de l'odeur
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
      Les nouvelles chaussures qui viennent de quitter l'usine peuvent sentir la colle, mais ce n'est pas un problème de qualité.
J'espère que cela peut être compris.
L'odeur se dissipe après avoir été placée dans un endroit ventilé pendant un certain temps
      </Typography>
      </Box>

        </Box>

        <img src='https://ae01.alicdn.com/kf/S6621ecb07ebb497aa798390407aa6409Y.jpg?width=790&height=907&hash=1697' style={{width:'950px',height:'500px'}} />

        

    </Box>
  )
}
