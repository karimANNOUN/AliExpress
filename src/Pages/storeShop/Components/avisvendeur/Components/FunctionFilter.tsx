
export const sixEtoileOne = (filtredArray1:any) =>{ 
    const result= filtredArray1.filter((rev:any)=>{
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 1);
    
    const commandDate = new Date(rev.createdAt);
    
    return    ( rev.rating > 3 && commandDate <= currentDate)  }  )
    return result.length
    }
    
    
    
    
    export const sixEtoileThree = (filtredArray2:any) =>{
        const filteredArraya = filtredArray2.slice(); 
    const result = filteredArraya.filter((rev:any)=>{
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 3);
    
    const commandDate = new Date(rev.createdAt);
    
    return    ( rev.rating > 3 && commandDate <= currentDate)  }  )
    return result.length
    }
    
    
    
    
    
    export const sixEtoileSix = (filtredArray3:any) =>{
    const filteredArrayb = filtredArray3.slice(); 
    const result = filteredArrayb.filter((rev:any)=>{
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
    
    const commandDate = new Date(rev.createdAt);
    
    return    ( rev.rating > 3 && commandDate <= currentDate)  }  )
    return result.length
    }
    




export const troiEtoileSix  = (filtredArray6:any) =>{

    const filteredArray = filtredArray6.slice();
    const result =  filteredArray.filter((rev:any)=>{
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    const commandDate = new Date(rev.createdAt);

 return    (rev.rating == 3 && commandDate <= currentDate)  }  )

 return result.length

}




export const troiEtoileThree = (filtredArray5:any) =>{
    const filteredArrays = filtredArray5.slice();
    const result =   filteredArrays.filter((rev:any)=>{
  const currentDate = new Date();
  const sixMonthsAgo = new Date(currentDate);
  sixMonthsAgo.setMonth(currentDate.getMonth() - 3);

  const commandDate = new Date(rev.createdAt);

return    (rev.rating == 3 && commandDate <= currentDate)  }  )

return result.length

}


export const troiEtoileOne = (filtredArray4:any) =>{ 
const filteredArraye = filtredArray4.slice();
const result = filteredArraye.filter((rev:any)=>{
const currentDate = new Date();
const sixMonthsAgo = new Date(currentDate);
sixMonthsAgo.setMonth(currentDate.getMonth() - 1);

const commandDate = new Date(rev.createdAt);

return    (rev.rating == 3 && commandDate <= currentDate)  }  )
return result.length
}


export const oneEtoileOne = (filtredArray7:any) =>{
const filteredArrayq = filtredArray7.slice(); 
const result = filteredArrayq.filter((rev:any)=>{
const currentDate = new Date();
const sixMonthsAgo = new Date(currentDate);
sixMonthsAgo.setMonth(currentDate.getMonth() - 1);

const commandDate = new Date(rev.createdAt);

return     ( rev.rating < 3 && commandDate <= currentDate)  }  )
return result.length
}




export const oneEtoileThree = (filtredArray8:any) =>{
const filteredArrayn = filtredArray8.slice();
const result =filteredArrayn.filter((rev:any)=>{
const currentDate = new Date();
const sixMonthsAgo = new Date(currentDate);
sixMonthsAgo.setMonth(currentDate.getMonth() - 3);

const commandDate = new Date(rev.createdAt);

return     ( rev.rating < 3 && commandDate <= currentDate)  }  )
return result.length
}






export const oneEtoileSix = (filtredArray9:any) =>{ 
const filteredArrayk = filtredArray9.slice();
const result = filteredArrayk.filter((rev:any)=>{
const currentDate = new Date();
const sixMonthsAgo = new Date(currentDate);
sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

const commandDate = new Date(rev.createdAt);

return     ( rev.rating < 3 && commandDate <= currentDate)  }  )
return result.length
}




