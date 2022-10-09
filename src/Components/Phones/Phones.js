import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Phones.css'
const Phones = () => {
    const[phones,setPhones]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('Fake-data.json')
        .then(res=>res.json())
        .then(data=> setPhones(data))
    },[])

   const handleCartData =(product)=>{
    console.log(product)
   }

    return (
        <div>
            <div className='phones-constainer'>
            
                <div className='card-container'>
                    
                    {
                        phones.map(phone=> <Phone phone={phone} key={phone.id} handleCartData={handleCartData}></Phone>)
                    }
                </div>

                <div className='cart'>
                    <h2>All Sumary</h2>
                </div>

            </div>
        </div>
    );
};

export default Phones;