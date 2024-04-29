import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../State/Product/Action';
import { Button, Card, CardHeader } from '@mui/material';


const ProductsTable = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(store=>store);
    console.log("product ------",products)
    useEffect(()=>{
        const data={
            category:"",
            colors:[],
            sizes:[],
            minPrice:0,
            maxPrice:2000,
            minDiscount:0,
            sort:"price_low",
            pageNumber:0,
            pageSize:5,
            stock:""
        }
        dispatch(findProducts(data))
    },[])

  return (
    <div className='p-5 '>
        <Card className='mt-2 '>
            <CardHeader title="All Product"></CardHeader>
        </Card>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align='left'>{item.imageUrl}</TableCell>
              <TableCell component="left" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="left">{item.category.name}</TableCell>
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left">
                <Button variant='outline'> Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductsTable