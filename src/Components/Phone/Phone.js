import React from 'react';
import './Phone.css'
const Phone = (props) => {
    const {handleCartData,phone}=props
    const{name,img,price,id}=phone

    return (
        <div className='phone-container'>             
              <div className='card-text'>
              <img src={img} alt="" />
               <h4>name: {name}</h4>
               <p>Id: {id}</p>
               <p>price: {price}</p>
              </div>
               <button onClick={()=>handleCartData(props.phone)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Phone;