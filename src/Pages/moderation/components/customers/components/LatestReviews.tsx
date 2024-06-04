import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Rating from '@mui/material/Rating';

export const LatestReviews = ({reviews}:any) => {


    const columns: GridColDef[] = [
        { field: 'Buyer', headerName: 'Name', width: 100 },
        { field: 'product', headerName: 'product', width: 130 },
        { field: 'Comment', headerName: 'Comment', width: 200 },
        { field: 'Rating', headerName: 'Rating' , width: 80 },
        { field: 'Quantity', headerName: 'Quantity',type:'number', width: 70 },
        { field: 'Color', headerName: 'Color', width: 100 },
        { field: 'Property', headerName: 'Property', width: 80 },
        { field: 'Likes', headerName: 'Likes',type:'number', width: 100 }
      ];
      
      const rows = reviews.map((rev:any)=> (
        { id: rev.id,
          Buyer: rev.buyer.name ,
          product: rev.product.title, 
          Comment:rev.comment , 
          Rating: rev.rating ,
          Quantity:rev.quantity , 
          Color:rev.colorProduct , 
          Property:rev.propertyType ,
          Likes:rev.likes.length 
        }) ) 
      


  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
    />
  </div>
  )
}
