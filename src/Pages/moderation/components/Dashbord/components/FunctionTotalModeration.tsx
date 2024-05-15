

const currentDate = new Date();
const previousYearDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
const previousYear2Date = new Date(currentDate.getFullYear() - 2, currentDate.getMonth(), currentDate.getDate());



  export  const calculateTotalProducts = (seller:any) =>{

    let total = 0;

    seller.forEach((product:any) => {
      total += product.products.length
  });

  return total;
   
  }


  export  const calculateTotalOrders = (seller:any) =>{

    let total = 0;

    seller.forEach((orders:any) => {
      total += orders.article.length
  });

  return total;
   
  }


  export  const calculateTotalOrdersTerminees = (seller:any) =>{

    let total = 0;

    seller.forEach((orders:any) => {
      total += orders._count.article
  });

  return total;
   
  }


  export  const calculateAllRevenue = (seller:any) =>{

    let total = 0;

    seller.filter((sel:any)=> {
        const createdAtDate = new Date(sel.createdAt);
        return ( createdAtDate > previousYearDate  )
    } ).forEach((rev:any) => {
       rev.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
  });

  return total;
   
  }


  export  const calculateAllRevenueLatestYear = (seller:any) =>{

    let total = 0;

    seller.filter((sel:any)=> {
        const createdAtDate = new Date(sel.createdAt);
        return ( createdAtDate <= previousYearDate && createdAtDate >= previousYear2Date )
    } ).forEach((rev:any) => {
       rev.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
  });

  return total;
   
  }






  export  const calculateRevenueSeller = (row:any) =>{

    let total = 0;

   
       row.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
 

  return total;
   
  }



  export  const calculateAllRevenueDay = (seller:any) =>{


    let total = 0;

    seller.forEach((rev:any) => {
       rev.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
  });

  return total;
   
  }


  export  const calculateRevenueOneSeller = (item:any) =>{

    let total = 0;

    
       item.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });


  return total;
   
  }


  export  const calculateAllRevenueWilaya = (item:any,seller:any) =>{

    let total = 0;

    seller.filter((art:any)=> art.state == item.state).forEach((rev:any) => {
       rev.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
    });


  return total;
   
  }


  export  const calculateRevenueWilayaLast = (item:any,seller:any) =>{

    let total = 0;

    seller.filter((art:any)=>{
        const createdAtDate = new Date(art.createdAt);
        return ( art.state == item.state && createdAtDate <= previousYearDate && createdAtDate >= previousYear2Date )
        
    }).forEach((rev:any) => {
       rev.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
    });


  return total;
   
  }


  export  const calculateAllRevenueThistYear = (item:any,seller:any) =>{

    let total = 0;

    seller.filter((art:any)=>{
        const createdAtDate = new Date(art.createdAt);
        return ( art.state == item.state && createdAtDate > previousYearDate  )
        
    }).forEach((rev:any) => {
       rev.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
    });


  return total;
   
  }


  export  const calculateRevenueWilayaSales = (item:any,seller:any) =>{

    let total = 0;

    seller.filter((art:any)=> art.state == item.state).forEach((rev:any) => {
        total +=  rev.article.filter((art:any)=>art.state == "terminees" ).length
    });


  return total;
   
  }





  export  const calculateAllRevenueByDays = (seller:any,numberDay:any) =>{

    let total = 0;

    const previousDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - numberDay);
    const previous2Day = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - numberDay-1);

    seller.forEach((rev:any) => {
       rev.article.filter((art:any)=>{

        const createdAtDate = new Date(art.commande.createdAt);
        return ( art.state == "terminees" &&  createdAtDate <= previousDay &&  createdAtDate > previous2Day )

    } ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
  });

  return total;

   
  }




  export  const getDay = (xNumber:any) =>{

    const dayNumber = currentDate.getDay();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  //  const currentDayNumber = daysOfWeek.indexOf(daysOfWeek[dayNumber])
    const dayName = daysOfWeek[dayNumber - xNumber ];
   
   // if (dayNumber <= xNumber ) {
   //     return daysOfWeek[dayNumber - xNumber ]
  //  }if (dayNumber > xNumber ) {
  //      return daysOfWeek[dayNumber + xNumber ]
//    }
    

  return dayName;
   
  }



  export  const calculateAllRevenueMonth = (seller:any,numberMonth:any) =>{

    let total = 0;

    const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, currentDate.getDate() );
    const previous2Month = new Date(currentDate.getFullYear(), currentDate.getMonth()-2, currentDate.getDate() );

    seller.forEach((rev:any) => {
       rev.article.filter((art:any)=>{

        const createdAtDate = new Date(art.commande.createdAt);
        if (numberMonth === 0 ) {
            return ( art.state == "terminees" &&  createdAtDate > previousMonth  )
        }if (numberMonth === 1 ) {
            return ( art.state == "terminees" &&  createdAtDate <= previousMonth  && createdAtDate > previous2Month )
        } 
    } ).forEach((articl:any) => {
        total += articl.quantity * articl.priceProduct
      });
  });

 

  return total;

   
  }




