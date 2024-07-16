const axios = require('axios');
const BASE_URL = 'https://bp-json-server.onrender.com';

const updateFoodInCategory = async (categoryName, foodId, updatedFields) => {
  try {
    // Fetch the category
    const { data: categories } = await axios.get(`${BASE_URL}/categories`);
    const category = categories.find(cat => cat.categoryName === categoryName);

    if (!category) {
      throw new Error(`Category ${categoryName} not found`);
    }

    // Find the food item in the category
    const foodItem = category.allfoods.find(food => food.id == foodId);

    if (!foodItem) {
      throw new Error(`Food item with ID ${foodId} not found in category ${categoryName}`);
    }

    // Update the food item
    Object.assign(foodItem, updatedFields);

    // Send a PUT request to update the category
    const response = await axios.put(`${BASE_URL}/categories/${category.id}`, category);
    console.log('Category updated:', response.data);
  } catch (error) {
    console.error('Error updating food in category:', error);
  }
};

// Category name, food ID, and updated fields
const categoryName = 'Highlights';
const foodId = 1;
const updatedFields = {
  imageUrl: 'https://www.allrecipes.com/thmb/UhPUZBO9xWeCmjr6pcBr-7fl8F0=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/50347-indian-tandoori-chicken-DDMFS-4x3-3035-205e98c80b2f4275b5bd010c396d9149.jpg'
};

// Update the food item in the category
updateFoodInCategory(categoryName, foodId, updatedFields);