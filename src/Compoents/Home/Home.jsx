import React, { useEffect, useState } from 'react';
import style from './Home.module.css'



export default function Home() {

  const [styles, setstyles] = useState({color:"white" , backgroundColor:"black" ,textAlign:"center"})

  const [isDark, setisDark] = useState(true)

  function changeDivColor(){
    setisDark(!isDark);
    console.log(isDark);
  }
  useEffect(() => {
    
    if(isDark==true){ setstyles({color:"white" , backgroundColor:"black" ,textAlign:"center"

    })

    }else{
      setstyles({color:"black" , backgroundColor:"white" ,textAlign:"center"

    })
    }
  
    return () => {
      
    }
  }, [isDark])
  
  
  return ( <div className='text-center'>

<>
      <div className= { `${style.bg} rounded-3xl ${style.text__color}`} >Home</div>       

<h2 style={styles}> Hello fro end dev </h2>
<button onClick={changeDivColor} className='bg-red-500 px-4 py-2 my-5 text-white rounded-xl'> ChangeColor</button>
  </>

  </div>

  )
}
