import { Box,IconButton,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import { Header } from '../Header';
import { Lists } from '../Lists';
import { EmptyCard } from './components/EmptyCard';
import CreateIcon from '@mui/icons-material/Create';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ModalUpdateImages } from './components/ModalUpdateImages';
import Cookies from 'js-cookie';
import { CardProduct } from './components/CardProduct';


export const StoreSettings = () => {

    const token = Cookies.get('token');

    const [loading,setLoading]=useState(false)
    const [newProdUsed,setNewProdUsed]=useState<any>([])
    const [state,setState]=useState("")
    const [store,setStore]=useState <any> ({})
    const [update,setUpdate]=useState(false)


    const productSellerLune = [{id:1},{id:2},{id:3}]

    const [openModal, setOpenModal] = useState(false);
    const handleOpenCreate = () =>{
        setOpenModal(true);
        setState("update1")
    } 
    const handleOpenUpdate = () =>{
        setOpenModal(true);
        setState("update1")
    } 

  
    const handleOpenCreate1 = () =>{
        setOpenModal(true);
        setState("update2")
    } 
    
    const handleOpenUpdate1 = () =>{
        setOpenModal(true);
        setState("update2")
    } 

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
      setAnchorEl1(null);
    };




    useEffect(()=>{

        const handelGetStoreSeller=async()=>{
          try {
            setLoading(true)
          const response = await fetch(`http://localhost:8000/storeSellerInfo`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            }
          });
          const data = await response.json()
         if (data.success == true) {
            setStore(data.storeSeller)
            setLoading(false) 
            setAnchorEl(null);
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }
    
        handelGetStoreSeller()
    


        const handelGetProducLune=async()=>{
            try {
              setLoading(true)
            const response = await fetch(`http://localhost:8000/storeSellerAlaLune`,{
              method: 'GET',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              }
            });
            const data = await response.json()
           if (data.success == true) {
              setNewProdUsed(data.productSellerLune)
              setLoading(false) 
            } 
        
          } catch (error) {
            console.error('operation failed.');
          }
           
          }
      
          handelGetProducLune()
      
     
        
      },[])



        const handelDeleteStoreSellerImages=async()=>{
          try {
            const state1 = "delete1"
            setLoading(true)
          const response = await fetch(`http://localhost:8000/deleteStoreSellerInfo`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body:JSON.stringify({state1})
          });
          const data = await response.json()
         if (data.success == true) {
            setStore(data.storeSeller)
            setLoading(false)
            setAnchorEl1(null); 
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }



        const handelDeleteStoreSellerImages2=async()=>{
            try {
                const state1 = "delete2"
                setLoading(true)
            const response = await fetch(`http://localhost:8000/deleteStoreSellerInfo`,{
              method: 'PATCH',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              },
              body:JSON.stringify({state1})
            });
            const data = await response.json()
           if (data.success == true) {
              setStore(data.storeSeller)
              setLoading(false)

            } 
        
          } catch (error) {
            console.error('operation failed.');
          }
           
          }
    
       


if (loading == true) return <div>...Loading</div>

  return (
   
      <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column', maxHeight:'98vh'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Store Settings
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',flexDirection:'column',width:'99%',mb:2,borderRadius:'6px',p:1,overflowY:'auto'}} >

    <Box sx={{width:'100%',minHeight:'630px',alignItems:'center',display:'flex',flexDirection:'column',position:'relative'}} >
         <Box sx={{width:'100%',height:'40%',position:'relative',backgroundImage:`url(${store.firstImageStore})` , backgroundSize:'cover' ,backgroundPosition: 'center' }} >
         <Typography sx={{fontWeight:'800',mt:3,color:'#827717'}} variant='h4' gutterBottom>
         Offres à la une
       </Typography>
       <IconButton  onClick={handleClick} sx={{position:'absolute',top:0,right:0,bgcolor:'#bbbbbb',":hover":{bgcolor:'#bbbbbb'}}} >
        <CreateIcon/>
       </IconButton>
       <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }} 
      >
        { store.firstImageStore == null ? "" : <MenuItem onClick={handleOpenUpdate}>Update Images</MenuItem>}
        { store.firstImageStore == null ? <MenuItem onClick={handleOpenCreate}>Create Images</MenuItem> : ""}
        { store.firstImageStore == null ? "" : <MenuItem onClick={handelDeleteStoreSellerImages} >Delete Images</MenuItem>}
      </Menu>
      <ModalUpdateImages openModal={openModal} setOpenModal={setOpenModal} setAnchorEl={setAnchorEl} setAnchorEl1={setAnchorEl1} state={state} setStore={setStore} />
         </Box>
         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'70%',position:'absolute',top:'20%',right:'15%'}} >
            { newProdUsed.length >= 1 ? <CardProduct setNewProdUsed={setNewProdUsed} product={newProdUsed[0]}/>  : <EmptyCard setNewProdUsed={setNewProdUsed} />}
            { newProdUsed.length >= 2 ? <CardProduct setNewProdUsed={setNewProdUsed} product={newProdUsed[1]}/> : <EmptyCard setNewProdUsed={setNewProdUsed} />}
            { newProdUsed.length >= 3 ? <CardProduct setNewProdUsed={setNewProdUsed} product={newProdUsed[2]}/> : <EmptyCard setNewProdUsed={setNewProdUsed} />}
           
         </Box>

     
      
 
    </Box>

     
    <Box sx={{width:'100%',minHeight:'550px',display:'flex',flexDirection:'column',alignItems:'center',position:'relative'}} >
     <Box sx={{width:'100%',height:'40%',position:'relative',backgroundImage:`url(${store.secondImageStore})` , backgroundSize:'cover' ,backgroundPosition: 'center' }} >
         <Typography sx={{fontWeight:'800',mt:3,color:'white'}} variant='h4' gutterBottom>
         NOUVEAUTÉS
       </Typography>
       <IconButton onClick={handleClick1} sx={{position:'absolute',top:0,right:0,bgcolor:'#bbbbbb',":hover":{bgcolor:'#bbbbbb'}}} >
        <CreateIcon  />
       </IconButton>
       <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       { store.secondImageStore == null ? "" :  <MenuItem onClick={handleOpenUpdate1}>Update Images</MenuItem>}
       { store.secondImageStore == null ? <MenuItem onClick={handleOpenCreate1}>Create Images</MenuItem> : "" }
       { store.secondImageStore == null ? "" :  <MenuItem onClick={handelDeleteStoreSellerImages2} >Delete Images</MenuItem> }
      </Menu>
   
         </Box>
        
     </Box>


        </Box>


        


        </Box>
       
        
  )
}
