const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
//parse porque itens está recebendo uma string e agora eu quero um objeto

itens.forEach( (elemento ) => {
    criarElemento(elemento);
}) 

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); //interrompe o comportamento padrão do formulário
    
    const name = evento.target.elements['nome'];
    const qtd = evento.target.elements['quantidade'];

    const itemAtual = {
        "nome" : name.value,
        "quantidade": qtd.value,
    }

    const existe = itens.find( (elemento) => elemento.nome === name.value);

    if(existe) {
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);
    }
    else {
        itemAtual.id = itens.length;

        criarElemento(itemAtual);    
   
        itens.push(itemAtual);
    }


    localStorage.setItem("itens", JSON.stringify(itens));

    name.value = "";
    qtd.value = "";
  
})

function criarElemento(item) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;

    newItem.appendChild(numeroItem);
    newItem.innerHTML += item.nome;

    lista.appendChild(newItem);
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}