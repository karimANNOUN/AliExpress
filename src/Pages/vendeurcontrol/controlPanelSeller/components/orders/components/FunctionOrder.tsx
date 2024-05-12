

export  const filtredOrders = (ordr:any,active:any) =>{
    if (active === 0) {
        return ordr
    }if (active === 1) {
        return ordr.state == "En Attente"
    }if (active === 2) {
        return ordr.state == "expédiée"
    }if (active === 3) {
        return ordr.state == "non paye"
    }if (active === 4) {
        return ordr.state == "terminees"
    }
  }


export const calculateTotal = (order:any) =>{

    let total = 0;

    order.filter(filtredOrders).forEach((ordr:any) => {
     
        total += ordr.quantity * ordr.priceProduct
      });
 

  return total;
   
  }


 export  const filtredArticleTerminee = (order:any)=>{
    return  Math.floor(order.filter((prod:any)=>prod.state == "terminees").length*1000/order.length)/10
    }


export   const filtredArticleExpidee = (order:any)=>{
        return  Math.floor(order.filter((prod:any)=>prod.state == "expédiée").length*1000/order.length)/10
        }


export  const filtredArticleEnAttente = (order:any)=>{
        return  Math.floor(order.filter((prod:any)=>prod.state == "En Attente").length*1000/order.length)/10
        }


export  const filtredArticleAnnuler = (order:any)=>{
        return  Math.floor(order.filter((prod:any)=>prod.state == "non paye").length*1000/order.length)/10
        }
