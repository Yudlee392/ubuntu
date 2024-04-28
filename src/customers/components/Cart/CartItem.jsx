import { RemoveCircleOutline } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = ({item}) => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold"> {item.product.title} </p>
          <p className="opacity-70">Size: {item.size}, White</p>
          <p className='opacity-70 mt-2'>Seller:{item.product.brand}</p>
                <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-10">
                <p className="font-semibold">${item.price}</p>
                <p className="opacity-50 line-through">${item.discountedPrice}</p>
                <p className="text-green-600 font-semibold">{item.discountPersent} % Off</p>
              </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{color:"#3d5afe"}}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"red"}}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;