const schoolContainers = document.querySelectorAll(".school");

for (let i = 1; i < schoolContainers.length; i++) {
    schoolContainers[i].classList.add("hidden");
}

const buttons = document.querySelectorAll(".schools-card__container-btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach((button)=>{
            button.classList.remove('schools-card__container-btn--active');
        });
        button.classList.add('schools-card__container-btn--active');
        toggleSchoolDisplay(index);
    });
});

function toggleSchoolDisplay(index) {
    schoolContainers.forEach((container) => {
        container.classList.add("hidden");
    });
    schoolContainers[index].classList.remove("hidden");
}
