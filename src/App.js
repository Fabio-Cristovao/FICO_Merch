import React, { useState, useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import useStyles from './styles';
import { Navbar, Products, Cart, Checkout, Footer, Modal } from './components';
import { commerce } from './lib/commerce';

const App = () => {

  const style = {
    backgroundColor: 'blue',
    width: '100px',
    height: '100px',
  }
  const classes = useStyles();
  const theme = createTheme({
    typography: {
      fontFamily: [
        'MontSerrat',
        'Roboto',
        'sans-serif',
      ].join(','),
    },
    backgroundColor: '#5a5aff',
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);



  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.backgroundColor}>
          <div className={classes.root}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
              <Switch>
                <Route exact path="/">
                  <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
                </Route>
                <Route exact path="/cart">
                  <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
                </Route>
                <Route path="/checkout" exact>
                  <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                </Route>
                <Route exact path='/item_description'>
                  <Modal />
                </Route>
              </Switch>
              <Footer />
            </ThemeProvider>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
