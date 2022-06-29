import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Box, Button, Modal, Container } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@material-ui/icons/Close";

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {

  const [open, setOpen] = useState(false);

  const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent className={classes.cardContent}>
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price.formatted}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart
              fontSize='large'
              style={{ color: '#5a5aff' }}
            />
          </IconButton>
          <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />}>
            Detalhes
          </Button>
        </CardActions>
      </Card>

      <Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={classes.modalStyles}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box sx={style} style={{ display: 'flex', flexDirection: 'row' }}>
            <IconButton onClick={() => setOpen(false)} className={classes.cancelButton}>
              <CloseIcon />
            </IconButton>
            <Container>
              <Container>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Container>
              <Container>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Container>
            </Container>
          </Box>
        </Modal>
      </Container>
    </>

  );
};

export default Product;

