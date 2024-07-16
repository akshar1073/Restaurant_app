const axios = require('axios');
const BASE_URL = 'https://bp-json-server.onrender.com';

// Function to add a new food
const addFood = async (newFood) => {
  try {
    const response = await axios.post(`${BASE_URL}/foods`, newFood);
    console.log('Food added:', response.data);
  } catch (error) {
    console.error('Error adding food:', error);
  }
};

// New food item
const newFood = {
  name: "Pasta",
  imageUrl: "https://example.com/pasta.jpg",
  rate: 12,
  description: "Creamy Alfredo Pasta"
};

// Add the new food item
addFood(newFood);