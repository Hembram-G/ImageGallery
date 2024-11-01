import { useEffect, useState } from "react"
import { ImageCard } from "../Component/ImageCard";
import "../style/HomePage.css"


export const HomePage=()=>{

    const[data,setData]=useState([]);
    const getData=async()=>{
      const resp=await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
    // const resp=await fetch("https://api.slingacademy.com/v1/sample-data/photos");
      const {photos}=await resp.json();
      setData(photos)
      console.log(photos)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div id="parent">
           {
            data?.map((e,i)=>{
              return <ImageCard id={e.id} imageUrl={e.url} key={i}/>
            })
          }
        </div>
    )
}