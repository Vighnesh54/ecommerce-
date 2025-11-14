# React E-Commerce CRUD Application

### Internship Technical Test – React Frontend Developer

This project is a fully functional, responsive e-commerce CRUD (Create,
Read, Update, Delete) application built using **React.js**. It was
developed as part of the **React Frontend Developer Internship Technical
Test**.

All product data is fetched from the **Fake Store API**, and CRUD
operations are maintained in the **client-side state** as required.

------------------------------------------------------------------------

## 🚀 Features (CRUD)

### ✔ READ

-   Fetches product data from **Fake Store API**
    (`https://fakestoreapi.com/`).
-   Displays all products on the home page.
-   Each product card shows:
    -   Image
    -   Title
    -   Price
-   Clicking a product opens a **Product Details** page using dynamic
    routing (`/product/:id`).

------------------------------------------------------------------------

### ✔ CREATE

-   Includes an **Add Product** page with a full form:
    -   Title
    -   Description
    -   Price
    -   Category
    -   Image URL
-   Client-side validation:
    -   Required fields cannot be empty.
    -   Price must be a valid number.
-   On submit, the product is added to the **React state** and displayed
    in the product list.

------------------------------------------------------------------------

### ✔ UPDATE

-   Product Details page contains an **Edit Product** button.
-   Opens an update form with all fields pre-filled.
-   User can update any field.
-   Changes instantly reflect in:
    -   Product list
    -   Product details page
-   Changes are maintained in client-side React state.

------------------------------------------------------------------------

### ✔ DELETE

-   Product Details page includes a **Delete** button.
-   On delete:
    -   Product is removed from the React state.
    -   User is redirected back to the Home page.

------------------------------------------------------------------------

## 🧱 Technical Implementation

### ⚛ React Features Used

-   Functional Components  
-   React Hooks:
    -   `useState`
    -   `useEffect`
    -   `useContext`
-   React Router:
    -   Dynamic routes for `ProductDetails`
    -   Routes for Add / Edit pages



### 🧹 Clean Code Practices

-   Clear component separation  
-   Meaningful variable & function names  
-   Reusable components  
-   Well-organized folder structure  
-   Comments added where necessary

------------------------------------------------------------------------

## 🎨 UI & User Experience

### ✔ Responsive Design

The application is fully responsive for: - Desktop  
- Tablet  
- Mobile

------------------------------------------------------------------------

### ✔ Form Validation

Implemented for Create and Update: - Required fields validation -
Numeric validation for price - Real-time error messages near inputs

------------------------------------------------------------------------

### ✔ Loading & Error Handling

-   Shows **Loading…** while API fetch occurs  
-   If API fails, shows a friendly error message  
-   Error boundaries for missing product ID or invalid routes

------------------------------------------------------------------------

## 📦 Installation & Running the Project

### 1️⃣ Clone the repository

``` sh
git clone https://github.com/Vighnesh54/ecommerce-.git
```

### 2️⃣ Move into project folder

``` sh
cd ecommerce-
```

### 3️⃣ Install dependencies

``` sh
npm install
```

### 4️⃣ Run the development server

``` sh
npm start
```

The project will open at:

    http://localhost:3000

------------------------------------------------------------------------

## 🧪 API Used

All data is fetched from:

https://fakestoreapi.com/

No product data is hardcoded.

------------------------------------------------------------------------

## 💡 Technical & Design Decisions

-   Used **Fake Store API** to simulate real e-commerce backend.
-   Stored CRUD output in **React state**, as API does not save
    mutations.
-   Used **Context API** for global product state management.
-   Used **React Router** for clean navigation & REST-like URLs.
-   Chose a clean and minimal UI to fulfill the aesthetic requirements.
-   Ensured responsive design to satisfy test expectations.
-   Added form validation for better UX.

------------------------------------------------------------------------

## 📤 Submission Requirements (Fulfilled)

-   Public GitHub repository ✔  
-   Clean commit history ✔  
-   Fully working CRUD app ✔  
-   Responsive UI ✔  
-   Error & loading handling ✔  
-   README documentation ✔

