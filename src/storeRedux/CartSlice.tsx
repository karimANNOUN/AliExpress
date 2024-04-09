import { createSlice } from "@reduxjs/toolkit";
 

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        userValid:{},
        user:{},
        product:{},
        productStore:[],
        products:[],
        favoritProducts:[],
        userInfo:{},
        storePayer:[],
        seller:{},
        productSeller:{},
        reviews:[]
      
        
      
          
    },
    reducers:{ 
       setUserValid:(state,action)=>{
        state.userValid=action.payload
       },
       setUser:(state,action)=>{
        state.user=action.payload
       },
       setProduct:(state,action)=>{
        state.product=action.payload
       },
       setProductStore:(state,action)=>{
        state.productStore=action.payload
       },
       setProducts:(state,action)=>{
        state.products=action.payload
       },
       setFavoritProducts:(state,action)=>{
        state.favoritProducts=action.payload
       },
       setUserInfo:(state,action)=>{
        state.userInfo=action.payload
       },
       setStorePayer:(state,action)=>{
        state.storePayer=action.payload
       },
       setSeller:(state,action)=>{
        state.seller=action.payload
       },
       setProductSeller:(state,action)=>{
        state.productSeller=action.payload
       },
       setReviews:(state,action)=>{
        state.reviews=action.payload
       },


    }
})

export const {setUserValid,setUser,setProduct ,setProductStore ,setProducts ,setFavoritProducts,setUserInfo,setStorePayer,setSeller,setProductSeller,setReviews }=cartSlice.actions;
export const cartReducer = cartSlice.reducer;