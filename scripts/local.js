// ===== Rodapé dinâmico: ano atual e última modificação =====
const anoAtual = document.querySelector('#anoatual');
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector('#ultimaModificacao');
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;

// ===== Dados estáticos de clima (métrico: °C e km/h) =====
const temperatura = 8;
const velocidadeVento = 15;

document.querySelector('#temperatura').textContent = temperatura;
document.querySelector('#vento').textContent = velocidadeVento;

// ===== Função que calcula a sensação térmica (fórmula métrica de wind chill) =====
function calcularSensacaoTermica(temp, vento) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);
}

// ===== Só calcula a sensação térmica se as condições forem atendidas =====
const spanSensacaoTermica = document.querySelector('#sensacao-termica');

if (temperatura <= 10 && velocidadeVento > 4.8) {
  spanSensacaoTermica.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)} °C`;
} else {
  spanSensacaoTermica.textContent = 'N/A';
}