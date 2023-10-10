import React from "react"
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom"
import CartContextProvider from './CartContext'

import App from "./App"

const root = createRoot(document.getElementById('root'));
root.render(   
<CartContextProvider.CartContextProvider >
    <Router>
        <App />
    </Router>
</CartContextProvider.CartContextProvider>
);

