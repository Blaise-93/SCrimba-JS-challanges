import React, {useState, useEffect, createContext, useContext} from "react"
import images from './components/Image'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const [allPhotos, setAllPhotos] = useState([])


        const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    
        const fetchPhoto = () => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return setAllPhotos(data)}
                )
        }

        useEffect(() => {
            fetchPhoto()
        }, [])


 

   
    function toggleFavorite(id) {
        const updatedPhotos = allPhotos.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setAllPhotos(updatedPhotos)
    }
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    function removeFromCart(itemToRemove) {
        setCartItems(prevItems => {
            const filteredItems = prevItems.filter(item => item.id !== itemToRemove.id)
            return filteredItems
        })
    }
    
    function emptyCart() {
        
        setCartItems([])
    }
    
  

    return (
        <CartContext.Provider value={{
            allPhotos, 
            cartItems, 
            toggleFavorite, 
            addToCart, 
            removeFromCart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default {CartContextProvider, CartContext}
//export const  useCartContext = () => useContext(CartContext)