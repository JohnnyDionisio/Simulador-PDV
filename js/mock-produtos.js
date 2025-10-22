/* Adicionando dados fictícios de produtos ao local storage */

function gerarProdutosMock(){
    //Verificar se a chave 'produtos' já existe no local storage
    const produtosExistem = localStorage.getItem('Produtos');

    //Se não existir, adiciona produtos fictícios
    if (!produtosExistem){
        const produtosMock = [
            {id: 1, nome: "Camiseta Básica Branca", estoque: 120, preco: 39.90, categoria: "Roupas"},
            {id: 2, nome: "Calça Jeans Slim", estoque: 60, preco: 129.90, categoria: "Roupas"},
            {id: 3, nome: "Tênis Nike Jordan", estoque: 80, preco: 499.90, categoria: "Calçados"},
            {id: 4, nome: "Tênis de Vôlei Dynaflex v300", estoque: 50, preco: 269.97, categoria: "Calçados"},
            {id: 5, nome: "Relógio Smartwatch", estoque: 45, preco: 1000, categoria: "Acessórios"},
            {id: 6, nome: "Óculos de Sol Ray-Ban", estoque: 30, preco: 750, categoria: "Acessórios"},

        ];

        //Salvando os dados de produtos no local storage
        localStorage.setItem('Produtos', JSON.stringify(produtosMock));
    }
}
gerarProdutosMock();