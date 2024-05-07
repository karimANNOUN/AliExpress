import { Box,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Header } from '../Header';
import { Lists } from '../Lists';
import Cookies from 'js-cookie';
import Link from '@mui/material/Link';
import { ReviewsCollumn } from './components/ReviewsCollumn';
import { LinearProgress } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

export const ReviewsSeller = () => {



    const [reviews,setReviews]=useState<any>([])
    const [loading,setLoading]=useState(Boolean)
    const [activeReview,setActiveReview]=useState(0)


    const token = Cookies.get('token');

    useEffect(()=>{

        const handelGetCustomers=async()=>{
          try {
            setLoading(true)
          const response = await fetch(`http://localhost:8000/controllReviewsSeller`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            }
          });
          const data = await response.json()
         if (data.success == true) {
            setReviews(data.getReviews)
            setLoading(false) 
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }
    
        handelGetCustomers()
    },[])



    const handelGetReviewsByRating=async()=>{
      try {
        setActiveReview(6)
        setLoading(true)
      const response = await fetch(`http://localhost:8000/reviewsSellerByRating`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setReviews(data.getReviews)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }



    const handelGetReviewsByQuantity=async()=>{
      try {
        setActiveReview(7)
        setLoading(true)
      const response = await fetch(`http://localhost:8000/reviewsSellerByQuantity`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setReviews(data.getReviews)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }



    const reviewsTypes=[
        {id:1,type:'tous', review: reviews.filter((rev:any)=> rev ).length},
        {id:2,type:'5 Étoiles', review: reviews.filter((rev:any)=>rev.rating == 5).length},
        {id:3,type:'4 Étoiles',review:reviews.filter((rev:any)=>rev.rating == 4).length},
        {id:4,type:'3 Étoiles',review:reviews.filter((rev:any)=>rev.rating == 3).length},
        {id:5,type:'2 Étoiles',review:reviews.filter((rev:any)=>rev.rating == 2).length},
        {id:6,type:'1 Étoiles',review:reviews.filter((rev:any)=>rev.rating == 1).length},
      ]


        const filterReviews  = (revs:any)=>{
            if (activeReview == 0 || activeReview == 6 || activeReview == 7 ) {
             return revs
            }if (activeReview == 1 ) {
            return revs.rating == 5
            }if (activeReview == 2 ) {
             return revs.rating == 4
            }if (activeReview == 3) {
             return revs.rating == 3
            }if (activeReview == 4 ) {
             return revs.rating == 2
            }if (activeReview == 5 ) {
             return revs.rating == 1
            }
         }


         const reviewsRating=[
          {id:1,type:'5 Étoiles', review:5,color:'#66bb6a'},
          {id:2,type:'4 Étoiles',review:4,color:'#0d47a1'},
          {id:3,type:'3 Étoiles',review:3,color:'#ffd600'},
          {id:4,type:'2 Étoiles',review:2,color:'#d50000' },
          {id:5,type:'1 Étoiles',review:1,color:'#880e4f'}]


       




         if(loading==true) return <div>...loading</div>

  return (
   
      <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Reviews
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',flexWrap:'wrap',width:'99%',mb:2,borderRadius:'6px',p:1}} >

     { reviewsTypes.map(review=> <div key={review.id} >
    <Button 
    onClick={()=>setActiveReview(review.id - 1)}  
    sx={
      activeReview === (review.id - 1) ?
      {bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}} :
      {bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}}
    } 
    variant="outlined"
    >
      {review.type}({review.review})
      </Button> 
   </div>
   )}


<div >
       
    <Button 
    onClick={handelGetReviewsByRating}  
    sx={
      activeReview === 6 ?
      {bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}}:
      {bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}} 
    } 
    variant="outlined">
      order By rating
      </Button>
  
   </div>


   <div  >
      
    <Button 
    onClick={handelGetReviewsByQuantity}  
    sx={
      activeReview === 7 ?
      {bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}}:
      {bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}}
    } 
    variant="outlined">
      by Quantity
      </Button>

   </div>

    

        </Box>

     
        <Box sx={{display:'flex',width:'99%',p:1,flexDirection:'column',alignItems:'center',borderRadius:'8px',bgcolor:'white',maxHeight:'500px'}} >

        <Box sx={{display:'flex',alignItems:'center',width:'100%',mb:2}} >
        <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
    All Reviews in your 
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#8e24aa',ml:1,textAlign:'left'}} variant="h6" gutterBottom>
    product :
    </Typography>
        </Box>


        <Box  sx={{display:'flex',alignItems:'center',width:'100%',mb:1,borderBottom:'2px solid #eeeeee',justifyContent:'space-between'}} >
                   <Box sx={{height:'100%',width:'20%',display:'flex'}} >
                   <Link variant='subtitle2' sx={{color:'black',textDecorationLine:'none',":hover":{color:'#03a9f4',textDecorationLine:'underline'}}} href="#" >
                   Buyer Name
  </Link>
            </Box>
             
            <Box sx={{height:'100%',width:'20%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
                <Box sx={{display:'flex',alignItems:'center'}} >
                <Link variant='caption' sx={{textDecorationLine:'none',color:'black',mt:1,mr:1,textAlign:'left',":hover":{textDecorationLine:'none'}}} >                 
                Comment && quantity
               </Link>
                </Box>
           
            </Box>

            <Box sx={{height:'100%',width:'20%',display:'flex'}} >
     
            <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant='body2' gutterBottom>
            Rating && Date
  </Typography>
            </Box>


            <Box sx={{height:'100%',width:'20%',display:'flex',flexDirection:'column'}} >
            <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant='body2' gutterBottom>
             Title && Images product 
  </Typography>
              </Box>


            <Box sx={{height:'100%',width:'20%',display:'flex',flexDirection:'column'}} >
            <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant='body2' gutterBottom>
            Color && properties
  </Typography>
            </Box>
            
                   </Box>
           
                   <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
                   { reviews.filter(filterReviews).length == 0 ? 
                    <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant='body2' gutterBottom>
                    Nothing Reviews(0)
          </Typography>
                   :(reviews.filter(filterReviews).map((rev:any)=> <ReviewsCollumn key={rev.id} rev={rev}  />))}
                   </Box>
          </Box>


          <Box sx={{display:'flex',width:'99%',p:1,flexDirection:'column',alignItems:'center',borderRadius:'8px',bgcolor:'white',mt:2}} >
          <Box sx={{display:'flex',alignItems:'center',width:'100%',mb:2}} >
        <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
    All Statistics  
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#8e24aa',ml:1,textAlign:'left'}} variant="h6" gutterBottom>
    reviews:({reviews.length})
    </Typography>
        </Box>

       <Box sx={{width:'100%',display:'flex'}} >
         <Box sx={{width:'50%',display:'flex',justifyContent:'center'}} >

         <PieChart
      series={[
        {
    data: reviewsRating.map( (rat)=> ({ id:rat.id, value:(Math.floor(reviews.filter((rev:any)=>rev.rating == rat.review).length*1000/reviews.length)/10), label:rat.type,color:rat.color  }))
          
        },
      ]}
      width={400}
      height={200}
    />

         </Box>
         <Box sx={{width:'50%',display:'flex',justifyContent:'center'}} >
          
         <Box sx={{display:'flex',flexDirection:'column'}} >

<Box sx={{display:'flex',alignItems:'center'}} >
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
5 Étoiles
</Typography>
<LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={reviews.filter((rev:any)=>(rev.rating == 5)).length*100/reviews.length} />
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
{reviews.filter((rev:any)=>rev.rating == 5).length}
</Typography>
</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
4 Étoiles
</Typography>
<LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={reviews.filter((rev:any)=>(rev.rating == 4)).length*100/reviews.length} />
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
{reviews.filter((rev:any)=>rev.rating == 4).length}
</Typography>
</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
3 Étoiles
</Typography>
<LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={reviews.filter((rev:any)=>(rev.rating == 3)).length*100/reviews.length} />
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
{reviews.filter((rev:any)=>rev.rating == 3).length}
</Typography>
</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
2 Étoiles
</Typography>
<LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={reviews.filter((rev:any)=>(rev.rating == 2)).length*100/reviews.length} />
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
{reviews.filter((rev:any)=>rev.rating == 2).length}
</Typography>
</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
1 Étoiles
</Typography>
<LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={reviews.filter((rev:any)=>(rev.rating == 1)).length*100/reviews.length} />
<Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
{reviews.filter((rev:any)=>rev.rating == 1).length}
</Typography>
</Box>

</Box>

         </Box>
       </Box>

          </Box>



        </Box>
      
  )
}
