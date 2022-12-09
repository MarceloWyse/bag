const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); //interrompe o comportamento padrão do formulário
    
    const name = evento.target.elements['nome'].value;
    const qtd = evento.target.elements['quantidade'].value;

    criarElemento(name, qtd);
})

function criarElemento(nome, quantidade) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    newItem.appendChild(numeroItem);
    newItem.innerHTML += nome;

    lista.appendChild(newItem);

}