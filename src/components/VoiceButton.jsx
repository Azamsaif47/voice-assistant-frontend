import React, { useState } from 'react';
import '../styles/VoiceButton.scss';

const VoiceButton = () => {
    const [listening, setListening] = useState(false);

    const handleClick = () => {
        setListening(true);
        startListening();
    };

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
            const audioUrl = await sendQueryToBackend(voiceInput);

            // Play the audio response
            if (audioUrl) {
                playAudio(audioUrl);
            }

            setListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error detected:', event.error);
            alert('Error occurred in speech recognition: ' + event.error);
            setListening(false);
        };
    };

    const sendQueryToBackend = async (inputText) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/process_query", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input_text: inputText }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            return audioUrl;
        } catch (error) {
            console.error('Error sending query to backend:', error);
            return "";
        }
    };

    const playAudio = (audioUrl) => {
        const audio = new Audio(audioUrl);
        audio.play();
    };

    return (
        <div className="voice-button-container">
            <button
                className={`voice-button ${listening ? 'spinning' : ''}`}
                onClick={handleClick}
                disabled={listening}
            >
                <div className="voice-button__icon">
                    {/* Add an icon or SVG here if desired */}
                </div>
            </button>
        </div>
    );
};

export default VoiceButton;
