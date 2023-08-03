const form = document.getElementById('form-contato');
const contatos = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaContato();
    atualizaTabela();

    form.reset();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');
    const inputApelidoContato = document.getElementById('apelido-contato'); // Alteramos o ID do campo para "apelido-contato"

    const contato = {
        nome: inputNomeContato.value,
        telefone: inputTelefoneContato.value,
        apelido: inputApelidoContato.value // Alteramos a propriedade "email" para "apelido" no objeto "contato"
    };

    contatos.push(contato);
};

function atualizaTabela() {
    const tabelaContatos = document.getElementById('tabela-contatos');
    tabelaContatos.innerHTML = '';

    contatos.forEach((contato, index) => { // Adicionamos o índice do contato como segundo parâmetro da função forEach
        let linha = '<tr>';
        linha += `<td>${contato.nome}</td>`;
        linha += `<td>${contato.telefone}</td>`;
        linha += `<td>${contato.apelido}</td>`; // Alteramos para exibir o apelido do contato
        linha += `<td><button onclick="deletarContato(${index})">Deletar</button></td>`;
        linha += '</tr>';

        tabelaContatos.innerHTML += linha;
    });
};

function deletarContato(index) {
    contatos.splice(index, 1);
    atualizaTabela();
}
