/*const menu = document.getElementById("menu");
const btnBM = document.getElementById('btnBM');

btnBM.addEventListener('click', (event) => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
});
*/
const cards = document.querySelectorAll(".schools-cards");


for (let i = 1; i < articles.length; i++) {
    cards[i].style.display = "none";
}


const buttons = document.querySelectorAll(".schools-cards__container button");


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach((button)=>{
            button.classList.remove('schools-cards__container-btn--active')
        })
        button.classList.add('schools-cards__container-btn--active')
        toggleArticleDisplay(index);
    });
});

// Fonction pour afficher ou masquer un article en fonction de son index
function toggleArticleDisplay(index) {
    // Cachez tous les articles
    cards.forEach((card) => {
        card.style.display = "none";
    });
    // Affichez l'article spécifié par son index
    cards[index].style.display = "block";
}

