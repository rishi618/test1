// Handle surprise button click
document.getElementById("surpriseButton").addEventListener("click", function() {
    var surpriseMessage = document.getElementById("surpriseMessage");
    
    // Remove hidden class to show the message
    surpriseMessage.classList.remove("hidden");

    // Trigger fade-in effect by setting opacity to 1
    setTimeout(function() {
        surpriseMessage.style.opacity = 1; // Fade in the surprise message
    }, 100);
});
