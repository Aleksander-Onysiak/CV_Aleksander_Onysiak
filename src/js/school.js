
/*const buttons = document.querySelectorAll(".schools-card__container-btn");

const cardContainers = document.querySelectorAll(".school");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        cardContainers.forEach((container) => {
            container.style.display = "none";
        });

        const buttonId = button.id;
        const containerClass = buttonId.replace("_school", "_school_container");

        const selectedContainer = document.getElementById(containerClass);
        if (selectedContainer) {
            selectedContainer.style.display = "block";
        }
    });
});*/

const buttons = document.querySelectorAll(".schools-card__container-btn");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonId = button.id;
        const containerId = buttonId + "_container";
        const container = document.getElementById(containerId);
        if (container) {
            const allContainers = document.querySelectorAll(".school");
            allContainers.forEach((item) => {
                item.style.display = "none";
            });
            container.style.display = "block";
        }
    });
});

