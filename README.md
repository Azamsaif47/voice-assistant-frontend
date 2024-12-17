# Voice Assistant Frontend for Supervised LLM

A sleek and responsive React-based frontend for a voice assistant powered by supervised Large Language Models (LLMs). This application provides an intuitive interface for users to interact with the voice assistant, leveraging speech-to-text and text-to-speech technologies.

![Voice Assistant](src/assets/voice_assistant.png)

## 🚀 Features
- **Voice Input**: Captures user input via microphone and converts it into text.
- **Backend Integration**: Sends the transcribed text to a backend API for processing.
- **Voice Output**: Receives the backend's response as text and speaks it out using text-to-speech.
- **Intuitive Interface**: Clean and user-friendly React interface for seamless interaction.

## 🛠️ Technology Stack
- **Frontend**: React.js
- **Speech-to-Text**: Browser-based Web Speech API or a library of your choice.
- **Text-to-Speech**: Browser-based Speech Synthesis API or a library of your choice.
- **Backend Communication**: REST API integration.

## 📂 Project Structure
. ├── src │ ├── components # React components for UI │ ├── assets # Images, icons, and other static assets │ │ └── voice_assistant.png │ ├── utils # Utility functions for speech-to-text and text-to-speech │ └── App.js # Main application entry point ├── public │ └── index.html # HTML template ├── package.json # Dependencies and scripts └── README.md


## ⚙️ How It Works
1. **Input**: The user speaks into the microphone.
2. **Processing**: The speech is converted to text using the Web Speech API.
3. **Backend Communication**: The transcribed text is sent to the backend API for processing.
4. **Response**: The backend returns a response, which is displayed on the screen.
5. **Output**: The response is read out to the user using text-to-speech technology.

## 🧩 Setup Instructions
1. Clone the repository:
   ```
   git clone https://github.com/your-username/voice-assistant-frontend.git
   cd voice-assistant-frontend
   ```
2. install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.



