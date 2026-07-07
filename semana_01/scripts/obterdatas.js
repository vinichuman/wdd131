// Preenche o ano atual dinamicamente no rodapé
const anoAtual = document.querySelector('#anoatual');
anoAtual.textContent = new Date().getFullYear();

// Preenche a data da última modificação do documento
const ultimaModificacao = document.querySelector('#ultimaModificacao');
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;