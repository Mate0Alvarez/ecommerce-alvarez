import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from "../../context/CartContext";
import { Container } from '@mui/system';
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import ItemCheckout from './ItemCheckout';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { saveOrder } from '../../firebase/api';
import { serverTimestamp } from "firebase/firestore";
import CircularLoading from '../Utils/CircularLoading';
import Swal from 'sweetalert2';
import './checkout.css';

const Checkout = () => {
  const { addedProducts, clear } = useContext(MyContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false)

  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false
  });

  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    if (!e.target.value) {
      setFormErrors({ ...formErrors, [e.target.name]: true });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: false });
    }
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  }

  const handleBuyIt = () => {

    if (validateForm()) {
      setOrderCreated(true);
      setIsLoading(true);

      const order = {
        buyer,
        cart: addedProducts,
        totalAmount,
        status: 'CREATED',
        timestamp: serverTimestamp()
      }

      saveOrder(order).then(id => {
        setIsLoading(false);
        Swal.fire({
          title: 'Thank you!',
          html: `The order has been created successfully.<br><br>Your order ID is: ${id}<br><br>We will contact you to continue with the payment.`,
          icon: 'success',
          confirmButtonText: 'See my order',
          showDenyButton: true,
          denyButtonText: 'Back to the shop',
          confirmButtonColor: '#66bb6a',
          denyButtonColor: '#29b6f6',
          allowOutsideClick: false
        }).then((result) => {
          clear();
          if (result.isConfirmed) {
            return navigate(`/order/${id}`);
          }
          return navigate('/');
        })
      });

    }

  }

  const validateForm = () => {

    resetFormErrors();

    let validForm = true;
    let newFormErrors = {
      name: false,
      phone: false,
      email: false
    };

    if (buyer.name === '') {
      newFormErrors.name = true;
      validForm = false;
    }

    if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(buyer.phone)
    ) {
      newFormErrors.phone = true;
      validForm = false;
    }

    if (
      !buyer.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(buyer.email)
    ) {
      newFormErrors.email = true;
      validForm = false;
    }

    setFormErrors(newFormErrors);
    return validForm;
  }

  const resetFormErrors = () => {
    return setFormErrors({
      name: false,
      phone: false,
      email: false
    });
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (addedProducts.length === 0) {
      return navigate('/');
    }

    let total = 0;
    for (const product of addedProducts) {
      total += product.quantity * product.price;
    }
    return setTotalAmount(total);
  }, [navigate, addedProducts]);

  return (
    <Container
      maxWidth="md"
      sx={{
        flexGrow: 1,
        width: "90%",
        margin: "auto",
        mt: { sm: "105px", xs: "55px", md: "25px" },
        minHeight: "70vh",
      }}
    >
      {isLoading && (<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}><CircularLoading /></Grid>)}
      {!orderCreated && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" component="div" sx={{ mb: 3 }}>Personal information:</Typography>
            <TextField name='name' label="Name" color="info" helperText={formErrors.name && "Please enter your name"} sx={{ mb: 2 }} fullWidth error={formErrors.name} onChange={handleChange} value={buyer.name} />
            <TextField name='phone' label="Phone" color="info" helperText={formErrors.phone && "Please enter a valid phone number"} sx={{ mb: 2 }} fullWidth error={formErrors.phone} onChange={handleChange} value={buyer.phone} />
            <TextField name='email' label="E-mail" color="info" helperText={formErrors.email && "Please enter a valid e-mail address"} sx={{ mb: 2 }} fullWidth error={formErrors.email} onChange={handleChange} value={buyer.email} />
          </Grid>
          <Grid item container xs={12} sm={6} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" component="div">Your order:</Typography>
            </Grid>
            {addedProducts.map((product) => (
              <Grid item xs={12} key={product.id}>
                <ItemCheckout product={product} />
              </Grid>
            ))}
            <Grid item xs={7} sx={{ mt: { xs: 3, sm: 1 } }}>
              <Typography variant="h5" component="div">Total: ${totalAmount}</Typography>
            </Grid>
            <Grid item xs={5} sx={{ mt: { xs: 3, sm: 1 }, textAlign: "right" }}>
              <Button
                variant="outlined"
                color="success"
                startIcon={<ShoppingBagIcon />}
                onClick={handleBuyIt}
              >
                But it
              </Button>
            </Grid>
          </Grid>
        </Grid>)}
    </Container>
  )
}

export default Checkout