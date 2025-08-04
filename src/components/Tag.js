import React from 'react'
import { useState ,useEffect} from 'react';

import Spinner from './Spinner'
import useGif from '../Hooks/useGif';

const REACT_APP_GIF_KEY=process.env.REACT_APP_GIF_KEY;




const Tag = () => {

    const[tag,setTag]=useState("Dog");
    // const[loading,setloading]=useState(false);
    // const[gif,setgif]=useState("");

    // async function fetchData()
    // {
    //     try{
    //     setloading(true);
    //     const url=`https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_GIF_KEY}`;
    //     // console.log(url);
        
    //     const {data}=await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setgif(imageSource);
    //     setloading(false);
    //     }
    //     catch(error)
    //     {
    //         console.log('failed to fetch gif:',error);
    //     }
    //     finally{
    //         setloading(false);
    //     }
    // }
    // useEffect(()=>{
    //      fetchData();
    // },[]
    // )

    const {gif, loading, fetchData}=useGif(tag);



  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
       <h1 className="text-3xl uppercase underline font-bold">
        A random Gif
       </h1>
       {
          loading ? (<Spinner/>):(<img src={gif} width="450"/>)
       }
       <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event)=>setTag(event.target.value)} value={tag}></input>
       <button  className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold" onClick={()=>fetchData(tag)}>Generate</button>


    </div>
  )
}

export default Tag