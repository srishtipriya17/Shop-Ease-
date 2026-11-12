// Base URL of Fake Store API
const API_URL = "https://fakestoreapi.com";

// Function to fetch all products
export const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data;
};

// Function to fetch a single product
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  const data = await response.json();

  return data;
};

// Function to fetch all categories
export const getCategories = async () => {
  const response = await fetch(`${API_URL}/products/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();

  return data;
};