import React from 'react'
import './Library.css'
import Product from './Product'

const Library = () => {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://previews.123rf.com/images/enterline/enterline1501/enterline150100200/35819047-the-word-library-written-in-vintage-wooden-letterpress-type-.jpg'
                    alt='' />
                {/* <img className='home_image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZf1Y58SRfiR-yE0jClI-6kOK7jffvcglqmA&usqp=CAU' 
                alt=''/> */}
                
                <div className='home_row'>
                    <Product id={1}
                    title='The Lean Startup'
                        quantity={1}
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                        rating={5}
                    />
                    <Product id={2}
                    title='The Fellow Ship of the Ring'
                    quantity={2}
                        image='https://i.insider.com/56eac77852bcd066018b6f6e?width=600&format=jpeg&auto=webp'
                        rating={5}
                    />

                </div>
                <div className='home_row'>
                    <Product id={3}
                    title='Harry Potter and the philosophers Stone'
                    quantity={2}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5YqnYtkZij2IaRIaxk7YCr8JfRVXPRw9DQ&usqp=CAU'
                        rating={5}
                    />
                    <Product id={4}
                    title='Men and the Dreams'
                    quantity={1}
                        image='https://i.pinimg.com/originals/d9/24/53/d924539281f497c43bb0af060a3ae0ed.jpg'
                        rating={5}
                    />
                    <Product id={5}
                    title='Works of Swami Vivekanand'
                    quantity={2}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwmLlhH9VlOuEb58BpdK92mmqNLV1RT_qlg&usqp=CAU'
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                <Product id={6}
                title='Life of Pie'
                quantity={1}
                        image='https://i.pinimg.com/originals/5a/9b/b0/5a9bb0b9ada80d6d4647ace23ba11e65.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Library
