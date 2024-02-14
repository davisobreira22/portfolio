/*===== MENU SHOW =====*/ 
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
}

/* Menu hidden */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
  const header = document.getElementById('header')
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*============== SERVICES MODAL ================*/
const modal = document.querySelectorAll('.services__modal'),
modalButton = document.querySelectorAll('.services__button'),
modalClose = document.querySelectorAll('.services__modal-close');

// Função para ativar um modal específico
let activeModal = (modalClick) => {
modal[modalClick].classList.add('active-modal');
}

// Adiciona um evento de clique para cada botão para abrir o modal correspondente
modalButton.forEach((button, i) => {
button.addEventListener('click', () => {
activeModal(i);
});
});

// Adiciona um evento de clique para fechar o modal ao clicar no ícone de fechar
modalClose.forEach((closeBtn) => {
closeBtn.addEventListener('click', () => {
modal.forEach((modal) => {
modal.classList.remove('active-modal');
});
});
});

 