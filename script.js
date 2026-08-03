/* ==========================================
   JARVIS OS Build 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const statusText = document.getElementById("statusText");
    const reactor = document.getElementById("arc-reactor");

    let jarvisAwake = false;

    // ==========================
    // Startup Sequence
    // ==========================

    setTimeout(() => {
        statusText.textContent = "Loading AI Core...";
    }, 1500);

    setTimeout(() => {
        statusText.textContent = "Connecting Systems...";
    }, 3000);

    setTimeout(() => {
        statusText.textContent = "Awaiting command...";
    }, 5000);

    // ==========================
    // Reactor Click Animation
    // ==========================

    reactor.addEventListener("click", () => {

        reactor.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 400
        });

    });

    // ==========================
    // Test Wake Word (J)
    // ==========================

    document.addEventListener("keydown", (event) => {

        if (event.key.toLowerCase() === "j") {

            jarvisAwake = true;

            statusText.textContent = "Listening...";

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

});
