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
const articles = document.querySelectorAll(".organization");


for (let i = 1; i < articles.length; i++) {
    articles[i].style.display = "none";
}


const buttons = document.querySelectorAll(".organizations__container button");


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        buttons.forEach((button)=>{
            button.classList.remove('organizations__container-btn--active')
        })
        button.classList.add('organizations__container-btn--active')
        toggleArticleDisplay(index);
    });
});

// Fonction pour afficher ou masquer un article en fonction de son index
function toggleArticleDisplay(index) {
    // Cachez tous les articles
    articles.forEach((article) => {
        article.style.display = "none";
    });
    // Affichez l'article spécifié par son index
    articles[index].style.display = "block";
}
///////
//////
/////

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