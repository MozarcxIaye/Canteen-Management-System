# 🍔 MERN Canteen Management System (CMS)

A full-stack web application designed to digitize food ordering in university and corporate canteens. This system streamlines the process by connecting customers (students/employees) and vendors through a real-time dashboard, reducing queue times and eliminating manual cash handling.

## 🚀 Features

### 👤 Customer Portal
- **Digital Menu:** Browse food items by category with availability status.
- **E-sewa Payment Integration:** Secure and seamless online payments using Nepal's popular digital wallet.
- **Real-time Tracking:** Track order status from "Preparing" to "Ready for Pickup".
- **Order History:** View past orders and spending.

### 👨‍🍳 Vendor Dashboard (Admin)
- **Live Order Feed:** Kanban-style dashboard to manage incoming orders in real-time.
- **Menu Management:** Add, edit, delete items, and toggle stock availability instantly.
- **Status Updates:** Update order stages (Pending -> Preparing -> Completed).

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS (Bento Grid UI)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Real-time:** Socket.io (for live order alerts)
- **Authentication:** JWT (JSON Web Tokens)

## 📂 Project Structure

- `/client` - React Frontend
- `/server` - Express Backend API

## 🏁 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/canteen-cms.git

2. **Install Dependencies:**
   ```Bash
npm install
cd client && npm install
cd ../server && npm install

3. **Run Application:**
   ```Bash
# From root directory
npm run dev