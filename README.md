# 🔮 Fortune Teller 🔮

Welcome to the **Fortune Teller**, an AI-powered web application that provides humorous, sarcastic, and slightly savage predictions based on your questions. Built with OpenAI's GPT-3.5 Turbo, this app combines humor, creativity, and AI to create a fun and engaging experience.

---

## Features
- **AI-Powered Predictions**: Get witty and absurd responses to your questions.
- **Interactive UI**: A visually appealing interface with a glowing crystal ball and animations.
- **Secure Backend**: A Node.js backend handles API requests securely, protecting your OpenAI API key.

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **AI**: OpenAI GPT-3.5 Turbo
- **Libraries**: Axios, CORS

---

## How to Set Up

### Prerequisites
1. **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **OpenAI API Key**: Get your API key from the [OpenAI Platform](https://platform.openai.com/).

---

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/fortune-teller.git
   cd fortune-teller

Install Dependencies:

bash
Copy
npm install express cors axios
Set Up the Backend:

Open server.js and replace the placeholder OpenAI API key with your actual key:

javascript
Copy
const OPENAI_API_KEY = 'your_openai_api_key_here';
Start the Backend Server:

bash
Copy
node server.js
You should see:

Copy
Server is running on http://localhost:5000
Open the Frontend:

Open the index.html file in your browser.

Enter a question and click Reveal Your Dark Fortune.
