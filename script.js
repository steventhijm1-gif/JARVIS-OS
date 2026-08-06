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

    // Activeer JARVIS met J
    document.addEventListener("keydown", (event) => {

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

    // Verwerk commando's
    commandInput.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            const command = commandInput.value.toLowerCase();

            if (command === "youtube") {

                statusText.textContent = "Opening YouTube...";
                document.getElementById("youtubeWindow").style.display = "block";

            } else if (command === "camera") {

                statusText.textContent = "Opening Camera...";

            } else {

                statusText.textContent = "Unknown command.";

            }

            commandInput.value = "";

        }

    });

    // Sluit YouTube
    document.getElementById("closeYoutube").addEventListener("click", () => {

        document.getElementById("youtubeWindow").style.display = "none";

    });

});
