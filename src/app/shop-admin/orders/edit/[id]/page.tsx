// pages/order.js
"use client"
import { Box, Container, Grid, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const ViewOrderPage = () => {
  // Dummy Data
  const orderData = {
    orderId: '12345',
    orderDate: '2025-02-21',
    totalAmount: 199.99,
    status: 'Processing',
    shop: {
      shopName: 'Super Shop',
      address: '123 Market St, City',
    },
    user: {
      userName: 'John Doe',
      contact: '(123) 456-7890',
    },
    products: [
      { productName: 'Product 1', quantity: 2, price: 50 },
      { productName: 'Product 2', quantity: 1, price: 99.99 },
    ],
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Order Details
        </Typography>

        {/* Order Summary */}
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
          <Typography variant="h6">Order ID: {orderData.orderId}</Typography>
          <Typography variant="body1">
            <strong>Order Date:</strong> {orderData.orderDate}
          </Typography>
          <Typography variant="body1">
            <strong>Total Amount:</strong> ${orderData.totalAmount.toFixed(2)}
          </Typography>
          <Typography variant="body1">
            <strong>Status:</strong> {orderData.status}
          </Typography>
        </Paper>

        {/* Shop Details */}
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
          <Typography variant="h6">Shop Information</Typography>
          <Typography variant="body1">
            <strong>Shop Name:</strong> {orderData.shop.shopName}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {orderData.shop.address}
          </Typography>
        </Paper>

        {/* User Details */}
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
          <Typography variant="h6">User Information</Typography>
          <Typography variant="body1">
            <strong>User Name:</strong> {orderData.user.userName}
          </Typography>
          <Typography variant="body1">
            <strong>Contact:</strong> {orderData.user.contact}
          </Typography>
        </Paper>

        {/* Product Details */}
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Product Details
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderData.products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.productName}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>${(product.quantity * product.price).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Container>
  );
};

export default ViewOrderPage;
