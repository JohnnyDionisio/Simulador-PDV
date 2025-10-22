/* Carregando dados do local storage para a tabela */

function carregarTabela(){
    const tabela = document.getElementById('dadosProdutos');
    tabela.innerHTML = '';

    //Obtendo os dados de produtos do local storage
    const dados = JSON.parse(localStorage.getItem('Produtos')) || [];

    //Inserindo os dados obtidos na tabela
    for (let i=0; i<dados.length; i++){
        tabela.innerHTML += 
        `<tr>
            <td>${dados[i].nome}</td>
            <td>${dados[i].estoque}</td>
            <td>${dados[i].preco.toFixed(2)}</td>
            <td>${dados[i].categoria}</td>
            <td>
                <i class="fa-solid fa-trash apagar" onclick="apagarProduto(${dados[i].id})">
                </i>
            </td>
        </tr>`;
    }
}
/* Carregando os dados da tabela */
carregarTabela();

//Função para obter o próximo Id de produto a ser salvo
function proximoId(){
    const dados = JSON.parse(localStorage.getItem('Produtos')) || [];
    dados.reverse();
    return dados[0].id + 1;
}


/* Salvar dados do form para a tabela e local storage */
function salvarDados(){
    //Validar as entradas de dados
    if (
        frmProd.inNome.value.trim() == '' || parseInt(frmProd.inEstoque.value) < 1 || parseFloat(frmProd.inPreco.Value) < 0.01 
    ) {
        return false;
    }

    //Pegando os dados do local Storage
    const produtos = JSON.parse(localStorage.getItem('Produtos')) || [];

    //Criar novo objeto de produto
    let prod = {
        id: proximoId(),
        nome: frmProd.inNome.value,
        estoque: parseInt(frmProd.inEstoque.value),
        preco: parseFloat(frmProd.inPreco.value),
        categoria: frmProd.inCategoria.value
    }

    //Adicionar o novo produto ao vetor de dados
    produtos.push(prod);

    //Salvando o vetor atualizado no local storage
    localStorage.setItem('Produtos', JSON.stringify(produtos));
}

/* Apagando produtos da tela e do local storage */
function apagarProduto(id){
    //obter os dados do produto
    let produtos = JSON.parse(localStorage.getItem('Produtos')) || [];

    //confirmar antes de excluir
    const item = produtos.filter(produto => produto.id == id);

    const confirmacao = confirm(`Tem certeza que deseja excluir ${item[0].nome}`);

    if (!confirmacao){return false;}

    //Obtendo todos os produtos exceto o que deve ser apagado
    produtos = produtos.filter(produto => produto.id != id);

    //salvando no local storage
    localStorage.setItem('Produtos', JSON.stringify(produtos));

    //Recarregar os dados na tabela
    carregarTabela();
}