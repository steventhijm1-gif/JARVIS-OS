// ==========================================
// JARVIS Build 002
// Startup Sequence
// ==========================================

window.addEventListener("load", () => {

    const status = document.getElementById("statusText");

    setTimeout(() => {
        status.textContent = "Awaiting command...";
    }, 2500);

});
