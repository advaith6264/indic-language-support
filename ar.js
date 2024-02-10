function transliterate() {
    var inputText = document.getElementById("inputText").value;
    var outputDiv = document.getElementById("output");

    // Check if the input text is a word that should not be transliterated
    var forbiddenWords = ["hi", "hello", "world"]; // Add more words as needed
    if (forbiddenWords.includes(inputText.toLowerCase())) {
        outputDiv.innerHTML = "<strong>Output:</strong><br>" + inputText;
        return;
    }

    // Perform transliteration using a transliteration API or library
    // For demonstration, let's assume a transliteration function is available
    var transliteratedText = transliterateToHindi(inputText);

    outputDiv.innerHTML = "<strong>Transliterated Text (Hindi):</strong><br>" + transliteratedText;
}

// Example transliteration function (replace with actual implementation)
function transliterateToHindi(text) {
    // Dummy implementation: Just return the input text as is
    return text;
}