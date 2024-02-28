import { createSlice } from "@reduxjs/toolkit";
 
//hadi management state redux ta5dem nafs lkhedma ta reducer w contex bah net7akmou f state mn blasa wa7da brk 
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
      
        
      
          
    },
    reducers:{ // add w remove edouma houwa 7wayj habina hna n'apliqiwhm f state bah yakhjdmoulna khedma 7abina tsema 7na li dernehm 
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


    }
})

export const {setUserValid,setUser,setProduct ,setProductStore ,setProducts ,setFavoritProducts,setUserInfo,setStorePayer,setSeller }=cartSlice.actions;
export const cartReducer = cartSlice.reducer;