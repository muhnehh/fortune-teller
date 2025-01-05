const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI API Key

// Proxy endpoint
app.post('/generate', async (req, res) => {
    try {
        const { question } = req.body;

        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a sarcastic, dark-humored fortune teller. Give short, witty, and slightly savage predictions. Keep responses under 100 words and maintain a mysterious yet humorous tone.',
                    },
                    {
                        role: 'user',
                        content: question,
                    },
                ],
                max_tokens: 100,
                temperature: 0.8,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        res.json({ response: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate fortune' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});