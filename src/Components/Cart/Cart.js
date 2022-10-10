import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props

    return (
        <div className='cart-sticky'>
            <h2>Selected Phone</h2>
             <h3>select Product: {cart.length}</h3>
             {
                cart.map((name,index)=> {
                    return(
                        <div className='cart-details'>
                            <small>{index+1}</small>
                            <img src={name.img} alt=""/>
                            <p >{name.name}</p>
                        </div>
                    )
                })
             }
        </div>
    );
};

// function Display(detils,index){
    
//   return(
//     <div>
//         <div className='cart-details'> 
//             <img src={detils.img} alt="" />
//             <p>{detils.name}</p>
//         </div>
//     </div>
//   )

// }

export default Cart;