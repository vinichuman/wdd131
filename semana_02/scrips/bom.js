// Referências aos elementos input, button e list
const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

// Ouvinte de evento de clique no botão "Adicionar Capítulo"
botao.addEventListener('click', function () {

  // Só executa o restante se o campo não estiver em branco
  if (input.value.trim() !== '') {

    // Cria o item da lista e o botão de exclusão
    const li = document.createElement('li');
    const botaoExcluir = document.createElement('button');

    // Preenche o li com o valor digitado
    li.textContent = input.value;

    // Preenche o botão de exclusão
    botaoExcluir.textContent = '❌';
    botaoExcluir.setAttribute('aria-label', 'Excluir capítulo');

    // Anexa o botão de exclusão dentro do li, e o li dentro da lista
    li.append(botaoExcluir);
    lista.append(li);

    // Ouvinte de evento de clique no botão de exclusão
    botaoExcluir.addEventListener('click', function () {
      lista.removeChild(li);
      input.focus();
    });

    // Limpa o campo de entrada
    input.value = '';
  }

  // Independente de ter criado o item ou não, devolve o foco ao input
  input.focus();
});