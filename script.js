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

});// ==========================
// Command Bar
// ==========================

const commandBar = document.getElementById("command-bar");
const commandInput = document.getElementById("commandInput");

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        commandBar.style.display = "block";

        commandInput.focus();

    }

});

commandInput.addEventListener("keydown", (event) => {

    if (event.key !== "Enter") return;

    const command = commandInput.value.toLowerCase().trim();

    if(command === "open youtube"){

        statusText.textContent = "Opening YouTube...";

    }

    else if(command === "open camera"){

        statusText.textContent = "Opening Camera...";

    }

    else if(command === "toon bedieningspaneel"){

        statusText.textContent = "Opening Control Panel...";

    }

    else{

        statusText.textContent = "Unknown command";

    }

    commandInput.value = "";

});
