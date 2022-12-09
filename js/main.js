const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); //interrompe o comportamento padrão do formulário
    
    const name = evento.target.elements['nome'];
    const qtd = evento.target.elements['quantidade'];

    criarElemento(name.value, qtd.value);

    name.value = "";
    qtd.value = "";
  
})

function criarElemento(nome, quantidade) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    newItem.appendChild(numeroItem);
    newItem.innerHTML += nome;

    lista.appendChild(newItem);

    
    localStorage.setItem("nome", nome);
    localStorage.setItem("quantidade", quantidade);
    
    const itemAtual = {
        "nome" : nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual);

    localStorage.setItem("item", JSON.stringify(itens));
}

