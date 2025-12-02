# 🛒 React Shopping Cart Simulation

This project is a **React-based shopping cart simulation** that demonstrates how to manage state, perform API requests, handle forms with validation, and simulate a real checkout flow using modern React tools.

The project includes:
- Product fetching from an external API
- A dynamic cart with quantity controls
- A checkout form with validation
- A payment loading simulation
- A confirmation page with delivery details

---

## Features

- Fetches product data using **Axios**
- Controls product quantity with min/max limits
- Calculates total price dynamically
- Navigates between pages using **React Router**
- Checkout form with **real-time validation**
- Simulated payment processing with a spinner
- Order confirmation with generated order number
- Delivery data stored using **Context API**

---

## What This Project Teaches

This project is ideal for practicing:

- `useState` for component state
- `useEffect` for API calls
- `useNavigate`, `useParams`, and `useLocation` from React Router
- Passing data between routes
- Controlled form inputs
- Custom form validation
- Global state using `useContext`
- Loading states and UI feedback

---

## Tech Stack

- **React**
- **React Router DOM**
- **Axios**
- **React Bootstrap (Spinner)**
- **JavaScript**
- **CSS**

---

## Main Flow

### 1. Home Page (Product & Cart)

- Fetches a product from an external API
- Controls quantity using `+` and `-` buttons
- Calculates total price dynamically
- Sends product data to checkout page via route state

### 2. Checkout Page

- Displays product summary
- Collects delivery details
- Collects payment details
- Validates all required fields
- Shows error messages when inputs are invalid
- Simulates payment processing using a loading spinner

### 3. Confirmation Page

- Displays random order number
- Shows delivery confirmation
- Displays customer name and email
- Button to return home

---

## Screenshot

![Screenshot of Deployed Website](/src/assets/Screenshot1.png)

![Screenshot of Deployed Website](/src/assets/Screenshot2.png)

![Screenshot of Deployed Website](/src/assets/Screenshot3.png)

![Screenshot of Deployed Website](/src/assets/Screenshot4.png)

---

## How to Run This Project

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Enter the project folder
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
