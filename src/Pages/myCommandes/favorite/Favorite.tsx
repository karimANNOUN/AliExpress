import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CompteListe } from '../components/CompteListe';
import { ProductAimiez } from '../components/ProductAimiez';
import { CardFavorit } from './components/CardFavorit';
import { EmpltyCard } from './components/EmpltyCard';
export const Favorite = () => {
    const [active,setActive]=useState(0)

    const favoritList=[{id:1},{id:2}]

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
        <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
          <CompteListe/>
           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                       <Box sx={{width:'100%',bgcolor:'Window',display:'flex',alignItems:'center',my:2,p:1}} >
                        
                         <Button variant='text' sx={{color:'black',textTransform:'lowercase' , borderBottom:'4px solid #616161', borderRadius: '8px 8px 0 0' ,":hover":{color:'black'} }} >
                       Tous les articles (0)
                      </Button> 


                    


                      

                       </Box>


                          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                            
                                { favoritList.length ?  
                                
                                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >
                                    {favoritList.map(favorit=><CardFavorit key={favorit.id} />)}
                                    </Box>
                                   :
                                <EmpltyCard/>
                             }
                            
                          </Box>



                          <ProductAimiez/>


           </Box>
        </Box>
    </div>
  )
}
