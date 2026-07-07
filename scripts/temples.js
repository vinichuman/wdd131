// ===== Rodapé dinâmico: ano atual e última modificação =====
const anoAtual = document.querySelector('#anoatual');
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector('#ultimaModificacao');
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

// ===== Menu hambúrguer responsivo =====
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  const aberto = navMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', aberto);
  hamburger.textContent = aberto ? '✕' : '☰';
});