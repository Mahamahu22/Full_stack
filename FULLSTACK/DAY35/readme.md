Day35 -  Backend Task 
--------------------------------------


Folder Structure:
-----------------
backend/
├── app.js               => Express app setup
├── server.js            => Entry point to start the server
├── db.js                => MongoDB connection
├── models/              => Mongoose schemas
│   ├── User.js
│   ├── Product.js
│   └── Order.js
├── user/                => User routes and controller
│   ├── userRoutes.js
│   └── userController.js
├── admin/               => Admin routes and controller
│   ├── adminRoutes.js
│   └── adminController.js
├── helpers/             => Utility functions
│   └── wallet.js
└── middleware/
    └── error.js         => Error handler (optional)

Steps Completed:
----------------
1. Created all necessary folders and files based on the backend design.
2. Initialized Node project:
   > npm init -y

3. Installed required packages:
   > npm install express mongoose
   > npm install --save-dev nodemon

4. Updated package.json scripts:
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }

5. Connected to MongoDB (localhost:27017/backend).

6. Implemented:
   - User APIs:
     - Create User
     - Add Wallet Money
     - Check Wallet Balance
     - Create Order
     - Check Order Status
     - View Order History
     - Rate Product (optional)

   - Admin APIs:
     - Add/Edit/Delete/View Product
     - View All Orders
     - Accept Order
     - Mark Order Delivered

7. Ran the project using:
   > npm run dev

8. Tested all endpoints using Postman / Thunder Client.

Tech Used:
----------
- Node.js
- Express.js
- MongoDB (Mongoose)
- Nodemon (for dev)
