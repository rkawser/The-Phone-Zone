import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Phones.css'
const Phones = () => {
    const[phones,setPhones]=useState([])
    const [cart,setCart]=useState([])
    const [keys,setKeys]=useState([])
    useEffect(()=>{
        fetch('Fake-data.json')
        .then(res=>res.json())
        .then(data=> setPhones(data))
    },[])

   const handleCartData =(product)=>{
    const{id}= product

if(cart.length <4){
    if (!keys.includes(id)) {
        setCart([product, ...cart])
        setKeys([...keys,id])
    }else{
        alert('alreaday add')
    }
}else{
    alert('card is full')
}

   

    
    
   }

   const chooseOne =(data)=>{

       const item = data[Math.floor(Math.random()* data.length)]

       const addProduct =[]
       addProduct.push(...addProduct,item)
       setCart(addProduct)
   }

   const removeProduct=()=>{
    setCart([])
   } 
    return (
        <div>
            <div className='phones-container'>
            
                <div className='card-container'>
                    
                    {
                        phones.map(phone=> <Phone phone={phone} key={phone.id} handleCartData={handleCartData}></Phone>)
                    }
                </div>

                <div className='cart'>
                    <Cart cart={cart}></Cart>
                    <div className='btn-sticky'>
                    <button onClick={()=>chooseOne(cart)} className='choose-btn'>choose one</       button> <br />
                    <button onClick={()=>removeProduct()} className='remove-button'>remove</button>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default Phones;