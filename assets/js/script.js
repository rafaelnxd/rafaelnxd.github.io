const faqHeaders = document.querySelectorAll(".faq-header");

/* Criacao do FAQ */
faqHeaders.forEach(function(faqHeader) {
    faqHeader.addEventListener("click", function() {
        /*Interage com cada box do FAQ*/
        const faqContent = faqHeader.nextElementSibling;

        faqContent.classList.toggle("hide");
    });
});

/* Pop-up */ 
console.log("O que você está fazendo por aqui?");

document.addEventListener("DOMContentLoaded", function () {
    const videoButton = document.querySelector(".video");
    const popup = document.querySelector(".popup");
    const closeButton = document.querySelector("#close");

    // Função para mostrar o popup
    function showPopup() {
        popup.classList.remove("hide");
    }

    // Função para ocultar o popup
    function hidePopup() {
        popup.classList.add("hide");
    }

    videoButton.addEventListener("click", showPopup);
    closeButton.addEventListener("click", hidePopup);
})

const sidebar = document.querySelector('.sidebar-menu-mobile');
const btnMenu = document.querySelector('.menu-mobile');
const close = document.querySelector('.close');

btnMenu.addEventListener('click', () => {
  sidebar.classList.remove('none');
})

close.addEventListener('click', () => {
  sidebar.classList.add('none');
})
