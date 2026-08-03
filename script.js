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
// ==========================================
// JARVIS Command Engine (Basis)
// ==========================================

let jarvisAwake = false;

document.addEventListener("keydown", (event) => {

    // Tijdelijke test (later wordt dit spraak)
    if (event.key.toLowerCase() === "j") {

        jarvisAwake = true;

        statusText.textContent = "Listening...";

        const reactor = document.getElementById("arc-reactor");

        reactor.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(1)" }
        ], {
            duration: 600
        });

        setTimeout(() => {
            statusText.textContent = "Ja Steven?";
        }, 700);

    }
   // ==========================================
// JARVIS Command Engine (Basis)
// ==========================================

let jarvisAwake = false;

document.addEventListener("keydown", (event) => {

    // Tijdelijke test (later wordt dit spraak)
    if (event.key.toLowerCase() === "j") {

        jarvisAwake = true;

        statusText.textContent = "Listening...";

        const reactor = document.getElementById("arc-reactor");

        reactor.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(1)" }
        ], {
            duration: 600
        });

        setTimeout(() => {
            statusText.textContent = "Ja Steven?";
        }, 700);

    }
// ==========================================
// JARVIS Command Engine (Basis)
// ==========================================

let jarvisAwake = false;

document.addEventListener("keydown", (event) => {

    // Tijdelijke test (later wordt dit spraak)
    if (event.key.toLowerCase() === "j") {

        jarvisAwake = true;

        statusText.textContent = "Listening...";

        const reactor = document.getElementById("arc-reactor");

        reactor.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.12)" },
            { transform: "scale(1)" }
        ], {
            duration: 600
        });

        setTimeout(() => {
            statusText.textContent = "Ja Steven?";
        }, 700);

    }

});
