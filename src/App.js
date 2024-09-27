import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

const App = () => {
  return (
    <ProductProvider >
      <div className="container mx-auto p-4" style={{backgroundColor:"#d7dca4"}} >
      <div className="flex items-center mb-6">
      <img 
        src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171109424/89209165-ecommerce-icon-isolated-on-orange-round-button-abstract-illustration.jpg" 
        alt="ECommerce Store"
        className="h-12 w-12 mr-2 object-cover rounded-full" 
      />
      <h1 className="text-4xl font-bold text-black-100 relative">
        ECommerce Store
      </h1>
    </div>
        <SearchBar />
        <CategoryFilter />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default App;
