import React, { useState } from 'react'
import { StoreInputList } from './StoreInputList'
import "./StoreInput.css"


export const StoreInput = ({ inputStore, filterItem }) => {
  // const filterItem = (curcat) => {
  //   // event.preventDefault();
  //   const newItem = inputStore.filter((newVal) => {
  //     return newVal.id !== curcat; 
  //       	// comparing category for displaying data
  //   });
  //   // console.log("neweww ",curcat)
  //   // console.log("neweww ",newItem)
  //   // console.log(curcat)
  //   // se(newItem);
  //   // setInputStore(newItem);
  // };
  
  return (
    <div>
      <div className='store-row'>
        {
          inputStore.map((elem, index) => {
            return <StoreInputList filterItem={filterItem} inputStore={elem} key={index} />
          })
        }
      </div>
    </div>
  )
}
