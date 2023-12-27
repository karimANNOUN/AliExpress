import { createSlice } from "@reduxjs/toolkit";
 
//hadi management state redux ta5dem nafs lkhedma ta reducer w contex bah net7akmou f state mn blasa wa7da brk 
const cartSlice= createSlice({
    name:"cart",
    initialState:{
        userValid:{},
        user:{}
      
        
      
          
    },
    reducers:{ // add w remove edouma houwa 7wayj habina hna n'apliqiwhm f state bah yakhjdmoulna khedma 7abina tsema 7na li dernehm 
       setUserValid:(state,action)=>{
        state.userValid=action.payload
       },
       setUser:(state,action)=>{
        state.user=action.payload
       }

    }
})

export const {setUserValid,setUser }=cartSlice.actions;
export const cartReducer = cartSlice.reducer;