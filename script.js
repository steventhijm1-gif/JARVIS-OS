document.addEventListener("DOMContentLoaded", () => {

    const statusText = document.getElementById("statusText");
    const reactor = document.getElementById("arc-reactor");

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

        if (event.key.toLowerCase() === "j") {

            reactor.animate(
                [
                    { transform: "scale(1)" },
                    { transform: "scale(1.1)" },
                    { transform: "scale(1)" }
                ],
                {
                    duration: 500
                }
            );

            statusText.textContent = "Ja Steven?";
        }

    });

});
