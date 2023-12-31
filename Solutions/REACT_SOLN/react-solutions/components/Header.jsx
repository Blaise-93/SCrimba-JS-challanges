import React, {useContext} from "react"
import {Link} from "react-router-dom"
import CartContext from "../CartContext"

const Header = () => {
    const { cartItems } = useContext(CartContext.CartContext)
    
    console.log(cartItems)
    const cartClassName = cartItems.length ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart">
                <i className={`${cartClassName} ri-fw ri-2x`}></i>
            </Link>
        </header>
    )
}



export default Header
