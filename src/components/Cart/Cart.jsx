import React from 'react';
import { Container, Typography, Button, Grid, TableContainer, Table, TableBody, TableCell, TableHead, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import useStyles from './styles';
import { TableRow } from 'semantic-ui-react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

  const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Não tem items no carrinho,
      <Link className={classes.link} to="/">volte à página principal!</Link>
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <div container sx={{ backgroundColor: '#5a5aff', height: '100vh' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ display: 'flex', justifyContent: 'center' }}>
              <TableCell>Produto</TableCell>
              <TableCell>Imagem do Produto</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Preço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cart.line_items.map((row) => (
                <TableRow key={row.id} item={row} sx={{ '&:last-child td, &last:child th': { border: 0 }, margin: 'auto' }}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    <Box
                      component='img'
                      sx={{
                        width: '70px',
                        height: '70px',
                        borderRadius: '100%',
                      }}
                      src={row.image.url}
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{ display: 'flex' }}>
                      <Button sx={{ color: '#5a5aff' }} type="button" size="small" onClick={() => handleUpdateCartQty(row.id, row.quantity - 1)} >
                        <RemoveIcon sx={{ color: '#a5e300' }} />
                      </Button>
                      <Typography sx={{ fontSize: '50px' }}>&nbsp;{row.quantity}&nbsp;</Typography>
                      <Button type="button" size="small" onClick={() => handleUpdateCartQty(row.id, row.quantity + 1)}>
                        <AddIcon sx={{ color: '#a5e300' }} />
                      </Button>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.line_total.formatted_with_symbol}</Typography>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" type="button" sx={{ backgroundColor: '#a5e300' }} onClick={() => handleRemoveFromCart(row.id)}>Remover</Button>
                  </TableCell>

                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      <div className={classes.cardDetails}>
        <Typography variant="h5" className={classes.title}>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" style={{ backgroundColor: '#a5e300' }} onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" style={{ backgroundColor: '#a5e300' }}>Checkout</Button>
        </div>
      </div>
    </div>
  );

  return (
    <Container sx={{ backgroundColor: '#a5e300 !imporant', height: '100%' }}>
      <div className={classes.toolbar} sx={{ backgroundColor: '#a5a5ff' }} />
      <Typography className={classes.title} variant="h3" gutterBottom>O seu carrinho de compras</Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
