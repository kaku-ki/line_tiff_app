// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
// import { useCart } from './CartContext';

// const ProductPage = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <Card sx={{ maxWidth: 600, margin: 'auto', mt: 3 }}>
//       <CardMedia
//         component="img"
//         height="300"
//         image={product.image}
//         alt={product.name}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h4" component="div">
//           {product.name}
//         </Typography>
//         <Typography variant="h6" color="text.secondary" gutterBottom>
//           ¥{product.price}
//         </Typography>
//         <Button 
//           variant="contained" 
//           color="primary" 
//           onClick={() => addToCart(product)}
//           sx={{ mt: 2 }}
//         >
//           Add to Cart
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductPage;




import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  FormGroup, 
  FormControlLabel, 
  Checkbox,
  Box,
  IconButton 
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from './CartContext';

const Product= ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [flavorOptions, setFlavorOptions] = useState({
    extraShot: false,
    whippedCream: false,
    syrup: false,
  });

  const handleFlavorChange = (event) => {
    setFlavorOptions({
      ...flavorOptions,
      [event.target.name]: event.target.checked,
    });
  };

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      flavorOptions,
      quantity
    };
    addToCart(productToAdd);
  };

  return (
    <Card sx={{ 
      maxWidth: 600, 
      margin: 'auto', 
      mt: 3, 
      boxShadow: 3, 
      border: '1px solid #e0e0e0', 
    }}>
      <CardMedia
        component="img"
        height="300"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          ¥{product.price}
        </Typography>
        <Box mt={2} mb={2}>
          <Typography variant="subtitle1" gutterBottom>
            Flavor Options:
          </Typography>
          <FormGroup>
          <Grid container spacing={0.5}>
              <Grid item size={{ xs: 4, sm: 4,md: 4,lg: 4 }}>
                <FormControlLabel
                  control={<Checkbox checked={flavorOptions.extraShot} onChange={handleFlavorChange} name="extraShot" />}
                  label="Extra Shot"
                />
              </Grid>
              <Grid item size={{ xs: 4, sm: 4,md: 4,lg: 4 }}>
                <FormControlLabel
                  control={<Checkbox checked={flavorOptions.whippedCream} onChange={handleFlavorChange} name="whippedCream" />}
                  label="Whipped Cream"
                />
              </Grid>
              <Grid item size={{ xs: 4, sm: 4,md: 4,lg: 4 }}>
                <FormControlLabel
                  control={<Checkbox checked={flavorOptions.syrup} onChange={handleFlavorChange} name="syrup" />}
                  label="Flavor Syrup"
                />
              </Grid>
            </Grid>
          </FormGroup>
        </Box>
        <Grid container justifyContent="center" spacing={2}>

        <Box display="flex" alignItems="center" mt={2} mb={2}>
          <Typography variant="subtitle1" mr={2}>数量:</Typography>
          <IconButton onClick={() => handleQuantityChange(-1)} size="small">
            <RemoveIcon />
          </IconButton>
          <Typography variant="body1" sx={{ mx: 2 }}>{quantity}</Typography>
          <IconButton onClick={() => handleQuantityChange(1)} size="small">
            <AddIcon />
          </IconButton>
        </Box>
        </Grid>
        <Grid container justifyContent="center" spacing={2}>

        <Button
          variant="contained"
          onClick={handleAddToCart}
          sx={{
            mt: 2,
            backgroundColor: '#FF4500',
            '&:hover': {
              backgroundColor: '#FF6347',
            },
          }}
        >
          Add to Cart
        </Button>
       </Grid>
      </CardContent>
    </Card>
  );
};

export default Product;