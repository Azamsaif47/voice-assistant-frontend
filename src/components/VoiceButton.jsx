import React, { useState } from 'react';
import '../styles/VoiceButton.scss';

const VoiceButton = () => {
    const [listening, setListening] = useState(false);

    // Function to handle button click and start the voice recognition process
    const handleClick = () => {
        setListening(true);
        startListening();
    };

    // Function to start voice recognition
    const startListening = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = async (event) => {
            const voiceInput = event.results[0][0].transcript;
            console.log('Voice Input:', voiceInput);

            // Send the voice input to the backend for processing
            const responseText = await sendQueryToBackend(voiceInput);

            // Convert the response text to speech
            speakText(responseText);

            // Stop the spinning animation once processing is done
            setListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error detected:', event.error);
            alert('Error occurred in speech recognition: ' + event.error);
            setListening(false);
        };
    };

    // Function to send the text query to the backend
    const sendQueryToBackend = async (inputText) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/process_query", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input_text: inputText }),
            });

            const data = await response.json();
            return data.response_text;
        } catch (error) {
            console.error('Error sending query to backend:', error);
            return "Sorry, there was an error processing your request.";
        }
    };

    // Function to convert text to speech
    const speakText = (text) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        synth.speak(utterance);
    };

    return (
        <div className="voice-button-container">
            <button
                className={`voice-button ${listening ? 'spinning' : ''}`}
                onClick={handleClick}
                disabled={listening}  // Disable the button while it's processing
            >
                <div className="voice-button__icon">
                    {/* You can add an icon or SVG here if desired */}
                </div>
            </button>
        </div>
    );
};

export default VoiceButton;
