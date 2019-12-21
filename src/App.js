import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import useLocalStorage from './components/useLocalStorage';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
	// add the given item to the cart
		setCart([...cart, item]);
	};

	//remove item from cart
	const removeItem = id => {
		setCart(cart.filter(item => item.id !== id));
	}

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
						<div className="App">
							<Navigation  />

							{/* Routes */}
							<Route exact path='/' component={Products} />
								
							/>

							<Route path="/cart" component={ShoppingCart}/>
						</div>
			</CartContext.Provider>		
		</ProductContext.Provider>
	);
}

export default App;
