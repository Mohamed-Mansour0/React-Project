import { data } from 'autoprefixer';
import axios from 'axios';
import React ,{useState,useEffect} from 'react'
import Loader from '../Loader/Loader';
import "./Gallery.css"
export default function Gallery() {
  const [recipies, setRecipies] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [errorMassage, setErrorMassage] = useState(null)
  useEffect(()=>{
    getRecipies()
      },[]);

      async function getRecipies(){
        return await axios.get(
          'https://forkify-api.herokuapp.com/api/search?q=pizza'
        ).then((x)=>{
          setRecipies(x.data.recipes);
          setisLoading(false)
    
        }).catch((err)=>{console.log(err);
          setisLoading(false)
          setErrorMassage(err.message)
        })
        // console.log(data.recipes);
        // setRecipies(data.recipes);
      }
  return (
    
    <>
    <div className="container mx-auto"></div>
    {errorMassage?<div className=' text-white justify-center item-center h-screen' > {errorMassage} </div>:""}
    
   {isLoading? <div className='flex  justify-center item-center h-screen' > <Loader/></div> :  <div className="flex flex-wrap">
      {recipies.map((recipe)=> <div key={recipe.recipe_id} className="w-1/3">

        <img src={recipe.image_url} className='xxy' alt="" />
        <p>
          {recipe.title}
        </p>
        </div>)}

    </div>}
    </>
  )
}
