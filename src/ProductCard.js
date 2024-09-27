import React, { useState } from 'react';
const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-md" style={{backgroundColor:"#EFF1DB"}}>
      <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        View Details
      </button>
      {showModal && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-[#EFF1DB] p-8 rounded-lg shadow-lg w-full max-w-lg relative">
      <span
        onClick={() => setShowModal(false)}
        className="absolute top-4 right-4 cursor-pointer bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-red-800 transition duration-200"
      >
        &times;
      </span>
      <h2 className="text-xl font-bold mb-4 text-center">{product.title}</h2>
      <img
        src={product.image}
        alt={product.title}
        className="h-60 w-full object-cover rounded-md mb-4"
      />
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-4">Available Quantity: {product.quantity}</p>
    </div>
  </div>
)}


    </div>
  );
};

export default ProductCard;
