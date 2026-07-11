// Atualiza o ano atual no rodapé
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

// Mostra a data da última modificação
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Menu hambúrguer
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".hamburger");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
}