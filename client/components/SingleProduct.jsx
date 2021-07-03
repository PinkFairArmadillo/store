import React from 'react'


const SingleProduct = (props) => {
  return (
   <div className="singleitem">
    <p>{props.itemName}</p>
    <img src={props.url}></img> 
  </div>  
  )
}



export default SingleProduct;









