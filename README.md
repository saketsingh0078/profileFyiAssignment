This is an E-Commerce Shopping Cart application built as part of the assignment for the Frontend Engineer position. The application is designed to showcase various products on a product listing page, allowing users to add products to a virtual shopping cart, manage the items in the cart, and view a summary of the total cost.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Demo
You can view the live demo of the application [https://profile-fyi-assignment-psi.vercel.app/](#).

### Image
![Screenshot 2024-08-14 030105](https://github.com/user-attachments/assets/0d4aad75-7bc0-4ea6-b3a3-30a9b46ed4e9)

## Features

### Product Listing Page

- Display of  products using a grid layout.
- Each product card includes:
  - Product image
  - Product name
  - Product price (formatted for currency)
  - "Add to Cart" button

### Add to Cart Functionality

- Adds the chosen product to a virtual shopping cart.
- Updates the cart icon or a dedicated counter to reflect the number of added items.
- Provides visual feedback confirming the item's addition.

### Cart Page

- Displays all added products with:
  - Product image
  - Product name
  - Product price
  - Quantity selector to adjust the amount of each item.
  - "Remove Item" button to delete a specific product from the cart.
- Cart summary section:
  - Subtotal calculation based on the quantity and price of items.

## Tech Stack

- **Frontend Framework**: Next.js 
- **Styling**: Tailwind CSS =
- **Data Source**: 
  - Open-source API for dynamic product data fetching.

## Getting Started

### Prerequisites

- Node.js (version >= 14.x)
- npm or yarn package manager

### Installation
```bash
git clone [https://github.com/your-repo/profileFyiAssignment]
cd profileFyiAssignment
npm install
npm run dev
```
### Usage
Product Listing Page: Browse the available products and add them to your cart.
Cart Page: Manage your selected items, adjust quantities, and view the total price

### Folder Structure
```bash
profileFyi-app/
├── public/
├── src/
│   ├── components/      # Reusable components (ProductCard, CartItem, etc.)
│   ├── app/
         ├── cart    
├── README.md
├── package.json
└── tailwind.config.js
```
