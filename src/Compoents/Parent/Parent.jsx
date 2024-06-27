import React, { useState } from 'react'
import Child from '../Child/Child'


export default function Parent() {
  let [products,setProducts]=useState([ {
    productName:'tochipa',
    Price:'12000',
    category:'tv',
    count:'22',
    id:10,

  }, {
    productName:'oppo',
    Price:'15000',
    category:'phone',
    count:'24',
    id:11,


  }, {
    productName:'samsung',
    Price:'32000',
    category:'mentor',
    count:'26',
    id:12,


  }, {
    productName:'iphone',
    Price:'22000',
    category:'phone',
    count:'112',

    id:13,


  },
  {
    productName:'iphone',
    Price:'22000',
    category:'phone',
    count:'112',
    id:17,


  },
  {
    productName:'iphone',
    Price:'22000',
    category:'phone',
    count:'112',
    id:14,


  },


]);

function updateProduct (productIndex){
  console.log("update",productIndex);
  let newProducts=[...products];
  newProducts[productIndex].count++
}

function deleteProduct(productId){
   console.log(productId);
   let newProduct =[...products];

   newProduct = newProduct.filter((product) =>product.id !=productId );
   console.log(newProduct);
   setProducts(newProduct);

}

  return (
   <>
   <div className='text-center bg-black text-white' >

  <div className='flex flex-wrap'>
  
  {products.map ((product, index)=> <Child  updateProduct={updateProduct} index={index} deleteProduct={deleteProduct} product={product} key={product.id} />)}



  </div>

   </div>
   
   </>
  );
}
