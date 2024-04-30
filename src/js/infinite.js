const container = document.querySelector(".languages__container");
const items = document.querySelectorAll(".languages__item");
const totalWidth = container.scrollWidth;
function moveItems() {
    const firstItem = container.firstElementChild;
    const lastItem = container.lastElementChild;
    const rect = firstItem.getBoundingClientRect();
    if (rect.right <= 0) {
        container.appendChild(firstItem);
    }
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = "translateX(-100%)";
    setTimeout(() => {
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
        container.appendChild(firstItem);
    }, 5);
}
setInterval(moveItems, 900);
