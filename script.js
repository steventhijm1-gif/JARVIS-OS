// ===============================
// JARVIS OS v1.1
// Main Script
// ===============================

console.log("JARVIS OS gestart.");

const micButton = document.getElementById("micButton");
const developerButton = document.getElementById("developerMode");
const chatBox = document.querySelector(".message");

function jarvisSay(text) {
    chatBox.innerHTML = `<strong>JARVIS:</strong><br>${text}`;
}

micButton.addEventListener("click", () => {
    jarvisSay("🎤 Voice System wordt voorbereid...");
});

developerButton.addEventListener("click", () => {
    jarvisSay("⚙️ Developer Mode wordt geladen...");
});

window.onload = () => {
    jarvisSay("Hallo Steven.<br><br>JARVIS is online en wacht op je commando.");
};
