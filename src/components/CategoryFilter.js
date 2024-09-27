import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const CategoryFilter = () => {
  const { setCategory } = useContext(ProductContext);

  const categories = [
    { name: 'All', color: 'bg-gray-300' },
    { name: 'Electronics', color: 'bg-blue-300' },
    { name: 'Clothing', color: 'bg-pink-300' },
    { name: 'Home Appliances', color: 'bg-green-300' },
    { name: 'Fitness', color: 'bg-yellow-300' },
    { name: 'Photography', color: 'bg-purple-300' },
    { name: 'Travel', color: 'bg-red-300' },
    { name: 'Music', color: 'bg-indigo-300' },
    { name: 'Pets', color: 'bg-teal-300' },
    { name: 'Outdoor', color: 'bg-orange-300' },
    { name: 'Beach', color: 'bg-yellow-200' },

  ];

  return (
    <div className="mb-4 p-4 bg-gray-100 rounded shadow-md">
      {categories.map(({ name, color }) => (
        <button
          key={name}
          onClick={() => setCategory(name === 'All' ? '' : name)}
          className={`${color} hover:bg-opacity-80 text-black px-4 py-2 rounded mt-2 mr-4 last:mr-0 transition-colors`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
