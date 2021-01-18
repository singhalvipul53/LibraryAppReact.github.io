import React from 'react'
import { useDispatch } from 'react-redux'
import './CheckoutProduct.css'
import { removefromBasket } from './features/bookSlice';
const CheckoutProduct = ({id,image,title,quantity,rating,hidebutton}) => {
    const dispatch=useDispatch();
    const removefrombasket=()=>{
        dispatch(removefromBasket(
            {id}))
    }

    return (
        <div className='checkoutproduct'>
            <img alt='' className='checkoutproduct_image' src={image}/>
            <div className='checkoutproduct_info'>
                <p className='checkoutproduct_title'>{title}</p>
                
                <div className='checkoutproduct_rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                {!hidebutton && (
                <button onClick={removefrombasket}>Return The Book</button>)}
            </div>
        </div>
    )
}

export default CheckoutProduct
