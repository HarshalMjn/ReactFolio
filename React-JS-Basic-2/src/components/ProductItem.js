import React ,{ useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';


const ProductItem = (props) => {

  const [title, setTitle]  =    useState (props.title);
   
  // let title = props.title;

  function clickHandler() {
    // title = "Popcorn"
    setTitle("popcorn");
    console.log("button clicked");
  }




  
 return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Card</button>
     </Card>
  );
}

export default ProductItem;