const axios = require('axios');
const BASE_URL = 'https://bp-json-server.onrender.com';

// Function to update a food item
const updateFood = async (foodId, updatedFields) => {
  try {
    const response = await axios.patch(`${BASE_URL}/foods/${foodId}`, updatedFields);
    console.log('Food updated:', response.data);
  } catch (error) {
    console.error('Error updating food:', error);
  }
};

// Food ID and updated fields
const categoryName = 'Indian Rices';
const foodId = 30; // Replace with the actual ID of the food item
const updatedFields = {
  rate: 15,
  imageUrl: 'https://culinarybutterfly.com/wp-content/uploads/2019/10/Indian-rice-Pulau-square.png'
};

// Update the food item
updateFood(foodId, updatedFields);
