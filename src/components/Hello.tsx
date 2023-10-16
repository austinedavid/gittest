"use client"
import React from 'react'
import { useAppSelector } from '@/redux/Store'
import {useDispatch} from "react-redux"
import { addUser } from '@/redux/slice/Posts'
interface Iallpost{
  pid:string;
  name:string;
  image:string;
  savedids:string[];
}
const Hello = () => {
  const authenticatedUser = "egbo"
  const allPost = useAppSelector((state)=> state.postReducer.allpost)
  const dispatch = useDispatch()
  
  const handleUpdate = (item:Iallpost)=>{
    const runs = {
      pid:item.pid,
      user:authenticatedUser
    };
    dispatch(addUser(runs))
  }
  return (
    <div>
      <p>there is no post yet</p>
      {
        allPost?.map((item, index)=><div key={index}>
          <p className={`${item.savedids.includes(authenticatedUser)?"text-red-600":"text-white"}`}>{item.name}</p>
          <button onClick={()=>handleUpdate(item)} className=' px-2 py-1 rounded-md bg-orange-500'>add user</button>
        </div>)
      }
    </div>
  )
}

export default Hello