

export const filtredProduct = ({product,order}:any)=>{
    return  Math.floor(product.article.filter((prod:any)=>prod.state == "terminees").length*1000/order.filter((prod:any)=>prod.state == "terminees").length)/10
    }

export  const calculateTotal = (productsSeller:any) =>{

    let total = 0;

    productsSeller.forEach((product:any) => {
      product.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
  });

  return total;
   
  }

  export  const calculateTotalOrder = (productsSeller:any) =>{

    let total = 0;

    productsSeller.forEach((product:any) => {
      total += product.article.length
  });

  return total;
   
  }