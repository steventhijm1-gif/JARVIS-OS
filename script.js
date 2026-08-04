document.addEventListener("DOMContentLoaded", () => {

    const statusText = document.getElementById("statusText");
    const reactor = document.getElementById("arc-reactor");
    const commandBar = document.getElementById("commandBar");
    const commandInput = document.getElementById("commandInput");

    statusText.textContent = "Initializing...";

    setTimeout(() => {
        statusText.textContent = "Loading AI Core...";
    }, 1500);

    setTimeout(() => {
        statusText.textContent = "Connecting Systems...";
    }, 3000);

    setTimeout(() => {
        statusText.textContent = "Awaiting command...";
    }, 5000);

    document.addEventListener("keydown", (event) => {

        // Activeer JARVIS
        if (event.key.toLowerCase() === "j") {

            reactor.animate([
                { transform: "scale(1)" },
                { transform: "scale(1.08)" },
                { transform: "scale(1)" }
            ], {
                duration: 500
            });

            statusText.textContent = "Yes, Steven.";

            commandBar.style.display = "block";
            commandInput.focus();
        }

    });

    commandInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            const command = commandInput.value.toLowerCase();

            if (command === "youtube") {

                statusText.textContent = "Opening YouTube...";

            } else if (command === "camera") {

                statusText.textContent = "Opening Camera...";

            } else {

                statusText.textContent = "Unknown command.";

            }

            commandInput.value = "";

        }

    });

});
