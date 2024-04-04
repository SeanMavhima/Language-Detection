function startListening() {
    const recognition = new (webkitSpeechRecognition || SpeechRecognition)();
    
    recognition.lang = 'en-US'; // Set the default language to English
    
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript;
      
      // Call a function to detect the language
      detectLanguage(transcript);
    }
    
    recognition.start();
  }
  
  function detectLanguage(text) {
    // You can use any external library or service for language detection here
    // For example, you can use Google Cloud Translation API, Microsoft Azure Text Analytics API, or any other available pre-trained model
    
    // For demonstration purposes, let's simply assume English as the detected language
    const detectedLanguage = 'English';
    
    document.getElementById('result').innerText = `Detected language: ${detectedLanguage}`;
  }
  