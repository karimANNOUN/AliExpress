
import Box from '@mui/material/Box';
import { Header } from './components/Header';
import { PersonelCard } from './components/PersonelCard';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

export const Worker = () => {

  const params=useParams()


  const [loading,setLoading]=useState(Boolean)
  const [product,setProduct]=useState<any>({})

   useEffect( ()=>{
       
        const getOneProduct =async()=>{
           try {
            
            setLoading(true)
            const response=await fetch(`http://localhost:8000/getproduct/${params.id}`, {
             method: 'GET',
             credentials: 'include', 
             headers: {
               'Content-Type': 'application/json', 
             },
           })
           const data = await response.json()
        
         if (data.success == true) {
           setProduct(data.product)
           setLoading(false)
               
          
          
         }

           } catch (error) {
            console.error(error)
           }
         
        
      }
       getOneProduct()
   },[])



   

   

if (loading == true){
  return <div>...loading</div>
}

  return (
    <div>
        <Box>
        { loading == false ? <Header  product={product} loading={loading} /> : "" }
        { loading == false ? <PersonelCard loading={loading} product={product} />: "" }
        </Box>
    </div>
  )


}
