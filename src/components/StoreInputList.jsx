import React from 'react'
import "./StoreInputList.css"
import { IoMdClose } from "react-icons/io";

export const StoreInputList = ({inputStore,filterItem}) => {
  // function handleFilter(event){
  //   event.preventDefault();
  //   inputStore.filter((elem,index)=>{
  //     return 
  //   })
  // }
  function handlll(e){
    e.preventDefault();
    filterItem(inputStore.id);
    // console.log("iddd", inputStore.id);
  }
  return (
    <div className='showlist'>
        <div><img className='storeimg' src={inputStore.url} alt="" /></div>
        <div>{inputStore.name}</div>
        <IoMdClose onClick={handlll} />
    </div>
  )
}
