import React from 'react'
import { useSelector } from 'react-redux'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { selectBook } from './features/bookSlice'

const Checkout = () => {
    const book=useSelector(selectBook)
    return (
        <div className='checkout'>
            <h1>Your Borrowed Books</h1>
            <div className='checkout_left'>
                
                <div>
                    
                    {book?.map(item=>(
                    <CheckoutProduct
                        key={item.id}
                        id={item.id} 
                        title={item.title}
                        image={item.image}
                        quantity={item.quantity} 
                        rating={item.rating}
                    />

                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Checkout
