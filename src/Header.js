import React from 'react'
import './Header.css'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { Link } from 'react-router-dom';
import { selectBook } from './features/bookSlice';


const Header = () => {
    const book=useSelector(selectBook)
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const Logout=()=>{
        dispatch(logout())
    }
    return (
        <div className='header'>
        <Link to="/">
            <div className='header_left'>
                <img className="header_logo" src='https://digitallibrary.nlpl.ca/images/digitalLibrary-banner.png' alt=''/>
            </div>
            </Link>
            <div className='header_right'>
                <div className='header_rightitems'>
                <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasketIcon />
            <span className="header_optionlinetwo header_basketcount">
              {book?.length}
            </span>
          </div>
        </Link>
        <div onClick={Logout} className="header_option">
            <span className="header_optionlineone">
              Hello {user.name}
            </span>
            <span className="header_optionlinetwo">
              {"Sign Out"}
            </span>
          </div>
                </div>
            </div>
        </div>
    )
}

export default Header
