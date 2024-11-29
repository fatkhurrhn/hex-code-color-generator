// Get DOM elements
const colorPicker = document.getElementById('colorPicker');
const hexCodeInput = document.getElementById('hexCode');
const copyButton = document.getElementById('copyButton');
const copyMessage = document.getElementById('copyMessage');

// Function to update HEX code based on the color picker input
function updateHexCode() {
    const hexCode = colorPicker.value;
    hexCodeInput.value = hexCode.toUpperCase();
}

// Function to copy HEX code to clipboard
function copyHexCode() {
    hexCodeInput.select();
    document.execCommand("copy");

    // Show copy message
    copyMessage.textContent = 'HEX Code Copied!';
    
    // Remove the message after 2 seconds
    setTimeout(() => {
        copyMessage.textContent = '';
    }, 2000);
}

// Event listeners
colorPicker.addEventListener('input', updateHexCode);
copyButton.addEventListener('click', copyHexCode);

// Initialize the hex code on page load
updateHexCode();