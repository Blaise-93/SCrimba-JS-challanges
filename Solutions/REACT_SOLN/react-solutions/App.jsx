import React from "react"
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"


{/* <Route path="/" element={<Home />} />
            <Route path="/">
            <Home />
            </Route>  */}

function App() {    
    return (
        <div>
            <Header />
            <Routes >
                <Route exact path="/" element={<Photos />}>
                </Route>
                
                <Route path="/cart" element={<Cart />}>
                 
                </Route>
            </Routes >
        </div>
    )
}

export default App