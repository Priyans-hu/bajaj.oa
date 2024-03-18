const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const { array } = req.body;
        if (!array || !Array.isArray(array)) {
            throw new Error('Invalid input. Expecting an array.');
        }

        const evenNumbers = array.filter(num => num % 2 === 0);
        const oddNumbers = array.filter(num => num % 2 !== 0);
        const alphabets = array.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

        const user_id = 'priyanshu_garg_2065';
        const email_id = 'priyanshu2065.be21@chitkara.edu.in';
        const roll_number = '2110992065';

        const response = {
            user_id,
            email_id,
            roll_number,
            is_success: true,
            even_numbers: evenNumbers,
            odd_numbers: oddNumbers,
            alphabets: alphabets
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
