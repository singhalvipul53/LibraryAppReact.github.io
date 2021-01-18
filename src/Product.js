import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoBasket, selectBook } from './features/bookSlice'
import './Product.css'
const Product = ({id,title,quantity,rating,image}) => {
    const book=useSelector(selectBook)
    const [quan,setQuan]=useState(quantity)
    const [time,setTime]=useState(1)
    const [disable,setDisable]=useState(false)
     const dispatch = useDispatch()
    const addtobasket=()=>{
        if(quan>0 && (time===1)){
            setQuan(quan-1)
            setTime(time-1)
            dispatch(addtoBasket({
                id:id,
                title:title,
                image:image,
                quantity:quantity,
                rating:rating,
        }))
        } else{
            alert('Cant borrow book')
        }
        
    }
    useEffect(()=>{
        if(book?.length>=2){
            setDisable(true)
        }
    })

    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>Quantity{"  "}</small>
                    <strong>{quan}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_,i)=>

                    <p>⭐</p>
                    )}
                    
                </div>
            </div>
            <img src={image} alt=''></img>
            <button disabled={disable} onClick={addtobasket}>{(disable===true)?("Cant borrow more Books"):("Borrow Book")}</button>
        </div>
    )
}

export default Product
