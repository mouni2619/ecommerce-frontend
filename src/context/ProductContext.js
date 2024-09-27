import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get("https://ecommerce-backend-7pzy.onrender.com/api/products")
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const result = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? product.category === category : true)
    );
    setFilteredProducts(result);
  }, [searchTerm, category, products]);

  return (
    <ProductContext.Provider value={{
      products: filteredProducts,
      setSearchTerm,
      setCategory,
    }} >
      {children}
    </ProductContext.Provider>
  );
};
