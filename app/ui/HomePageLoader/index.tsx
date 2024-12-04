'use client';

import React, {useState, useEffect} from 'react'

const HomePageLoader = () => {
    console.log("Loader Called-----------------");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        },2000);
        return () => {
            clearTimeout(timer);
        }
    })
    
    if(!loading){
        return null;
    }

  return (
    <div>loading....</div>
  )
}

export default HomePageLoader