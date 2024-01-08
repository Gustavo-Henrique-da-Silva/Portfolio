// Obtém o idioma preferido do navegador do usuário
//const userLanguage = navigator.language || navigator.userLanguage;

// Verifica o idioma preferido e redireciona para a versão correspondente do site

//document.getElementById('en') == undefined
/*if (userLanguage.startsWith('en')) {
  window.location.href = '/indexEn.html'; // Redireciona para a versão em inglês
} else if (userLanguage.startsWith('pt-BR') || userLanguage.startsWith('pt-BR')) {
  window.location.href = '/index.html'; // Redireciona para a versão em português
} else {
  // Se o idioma preferido não for inglês nem português, redireciona para uma página padrão ou mantém a atual
  // window.location.href = '/default'; // Redireciona para uma página padrão
  window.location.href = '/index.html';
}*/


let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");
let overlay = document.getElementById("overlay");

btnMenu.addEventListener("click", () =>{
    menu.classList.add("abrir-menu");
})

menu.addEventListener("click", () =>{
    menu.classList.remove("abrir-menu");
})

overlay.addEventListener("click", () =>{
    menu.classList.remove("abrir-menu");
})

// Seu código JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Adiciona o efeito de rolagem suave
            });
        }
    });
});


// darkmode.js
//const favicon = document.querySelector('link[rel="shortcut icon"]');
const sun = document.querySelector('.bi-sun');
const moon = document.querySelector('.bi-moon');

// Função para alternar o modo dark
window.toggleDarkMode = function() {
  // Obtém o elemento <body>
  const body = document.querySelector('body');

  // Verifica se a classe 'dark-mode' já está presente no <body>
  const isDarkMode = body.classList.contains('light-mode');

  // Adiciona ou remove a classe 'dark-mode' dependendo do estado atual
  changeMode(body.classList.contains('light-mode'));

  // Armazena o estado do modo dark no armazenamento local
  localStorage.setItem('lightMode', isDarkMode);
}
  
// Verifica o estado do modo dark armazenado e aplica-o ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const isDarkMode = localStorage.getItem('lightMode') === 'true';
  // Aplica o modo dark ou claro com base no estado armazenado
  changeMode(localStorage.getItem('lightMode') !== 'true');
});
  
// Armazena o estado do modo dark ao fechar a página
window.addEventListener('beforeunload', function() {
  const isDarkMode = document.querySelector('body').classList.contains('light-mode');
  localStorage.setItem('lightMode', isDarkMode);
});

function changeMode(isDarkMode){
  if (!isDarkMode) {
    document.querySelector('body').classList.add('light-mode');
    
  } else {
    document.querySelector('body').classList.remove('light-mode');
    
  }
}

