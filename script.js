
const botaoScrow = document.getElementById('botao-scrow');


const footer = document.querySelector('footer');


function verificarProximidade() {
const distancia = footer.getBoundingClientRect().top - botaoScrow.getBoundingClientRect().bottom;
if (distancia <= 100) { 
botaoScrow.style.transform = 'rotateZ(-180deg)';
} else {
botaoScrow.style.transform = 'none';
}
}

window.addEventListener('scroll', verificarProximidade);

