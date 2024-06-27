import React from 'react'
export default function Child({product ,deleteProduct ,index,updateProduct,}) {

  let{productName,Price,category,count,id} = product;
  return (
<>
<div className='p-7 w-1/3 '>

<div className='bg-pink-500'>
<p>product name : {productName}</p>
<p>product price : {Price}</p>
<p>category price : {category}</p>
<p>count price : {count}</p>

<button onClick={()=>deleteProduct(id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 m-3 px-4 rounded-full'>Delete</button>
<button onClick={()=>updateProduct(index)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3 roundedbg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Update</button>


</div>

</div>


</>
  
  )
}


