"use client"
import React,{useEffect} from 'react'
import {useDispatch} from "react-redux"
import { addStar } from '@/redux/slice/Posts'


const Populate = () => {
    const dispatch = useDispatch()
   useEffect(()=>{
    const populate = async()=>{
        const response = await fetch("/api/post")
        if(response.ok){
            const res =  await response.json()
            dispatch(addStar(res))
        }
    }
    populate()
   },[])
  
  return (
    <div>
        <button  className=' p-2 rounded-md bg-green-700 text-white'>populate items</button>
    </div>
  )
}

export default Populate