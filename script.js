/* ==========================================
   JARVIS OS Build 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const statusText = document.getElementById("statusText");
    const reactor = document.getElementById("arc-reactor");

    // Opstartanimatie
    setTimeout(() => {
        statusText.textContent = "Loading AI Core...";
    }, 1500);

    setTimeout(() => {
        statusText.textContent = "Connecting Systems...";
    }, 3000);

    setTimeout(() => {
        statusText.textContent = "Awaiting command...";
    }, 5000);

    // Kleine reactie als je op de reactor klikt
    reactor.addEventListener("click", () => {

        reactor.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 400
        });

        statusText.textContent = "Awaiting command...";

    });

});
