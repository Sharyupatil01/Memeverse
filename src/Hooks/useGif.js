import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

const REACT_APP_GIF_KEY=process.env.REACT_APP_GIF_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_GIF_KEY}`;

const useGif = (tag) => {
  const[gif,setGif]=useState('');
  const[loading,setloading]=useState(false);
  async function fetchData()
    {
        try{
        setloading(true);
      
        // console.log(url);
        const {data}=await axios.get(tag ? `${url}&tag=${tag}`:url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setloading(false);
        }
        catch(error)
        {
            console.log('failed to fetch gif:',error);
        }
        finally{
            setloading(false);
        }
    }
    useEffect(()=>{
         fetchData('car');
    },[])
    return {gif,loading,fetchData};
};

export default useGif