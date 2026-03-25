function addcarrinho(produto) {
    alert(produto + " adicionado ao carrinho!");
}
function addCarrinho(nomeProduto) {
    // 1. Aqui iria a sua lógica de salvar no carrinho (localStorage, etc)
    console.log("Adicionado: " + nomeProduto);

    // 2. Lógica do Aviso Visual
    const toast = document.getElementById("toast-carrinho");
    const spanNome = document.getElementById("nome-produto-toast");

    // Coloca o nome do produto no texto do aviso
    spanNome.innerText = nomeProduto;

    // Mostra o aviso adicionando a classe 'show'
    toast.classList.add("show");

    // Remove o aviso após 3 segundos
    setTimeout(function() {
        toast.classList.remove("show");
     } , 3000);
}