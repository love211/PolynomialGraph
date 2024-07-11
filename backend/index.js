const express = require('express');
const bodyParser = require('body-parser');
const Polynomial = require('poly-roots');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to solve polynomial
app.post('/solve', (req, res) => {
    const { coefficients } = req.body;

    console.log('Received coefficients:', coefficients);

    if (!coefficients || !Array.isArray(coefficients)) {
        console.log('Invalid input:', coefficients);
        return res.status(400).send({ error: 'Invalid input' });
    }

    try {
        const root = Polynomial(coefficients);
        // const rootsArray = Array.from(roots);
        const roots = root.map(root => root.toString()); 
     
        res.send({ roots });
    } catch (error) {
        console.error('Error solving polynomial:', error);
        res.status(500).send({ error: 'Failed to solve polynomial' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
