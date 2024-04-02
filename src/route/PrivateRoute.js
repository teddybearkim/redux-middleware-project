import React from 'react'
import Detail from '../pages/Detail'
import { useSelector } from 'react-router-dom'

const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};