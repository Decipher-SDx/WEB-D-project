const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// POST endpoint to handle orders
app.post('/orders', (req, res) => {
    const order = req.body;
    console.log("New order received:", order);

    // Respond to the client
    res.status(201).json({ message: "Order received!", orderId: Date.now() });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
