
# ShopEase - E-Commerce Website

## 1. Project Overview

ShopEase is a simple e-commerce website developed using React.js. It allows users to view products, search products, filter products by category and sort them according to price.

Users can also add products to the shopping cart, update product quantities and remove products from the cart.

The website uses the Fake Store API to get product information.

## 2. Features

- Display all products from the API.
- Search products by their title.
- Filter products by category.
- Sort products by price (Low to High and High to Low).
- View individual product details.
- Add products to the shopping cart.
- Increase and decrease product quantity.
- Remove products from the cart.
- Display total items and total price.
- Save cart data using localStorage.
- Responsive design for different screen sizes.
- Loading and error messages.

## 3. Technologies Used

- React.js
- JavaScript
- HTML
- CSS
- React Router DOM
- Fake Store API
- Vite
- Git and GitHub

## 4. API Used

This project uses the Fake Store API to fetch product data.

API Link: https://fakestoreapi.com

Endpoints used:

- /products
- /products/:id
- /products/categories


## 5. Screenshots

### Home Page
![Home Page](./screenshot/home.png)

### Product Details Page
![Product Details](./screenshot/product-details.png)

### Shopping Cart
![Shopping Cart](./screenshot/cart.png)



## 6. Cart Management

The shopping cart is managed using React useState.

Product quantities can be increased or decreased. Users can also remove products from the cart.

The cart data is stored in localStorage so that it remains available even after refreshing the page.



## Live Demo

Visit the live website: [ShopEase](https://shop-ease-gilt.vercel.app/)




## 8. Conclusion

ShopEase helped me understand React components, props, state management, React hooks, API integration and routing.

I also learned how to create reusable components and manage shopping cart functionality in a React application.
