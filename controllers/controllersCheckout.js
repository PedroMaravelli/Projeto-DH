const cookie = require('cookie-parser')
const {Carrinho, sequelize} = require('../database/models')
const {Produto} = require('../database/models')
const {CarrinhoProduto} = require('../database/models')
const {Endereco} = require('../database/models')
const {Usuario} = require('../database/models')


const controllersCheckout = {

checkout: (req,res) =>{
    let carrinho = req.cookies.carrinho
        
        let totalProdutos = 0
        for (let produto of carrinho){            
            totalProdutos += produto.quantidade*produto.preco
        }
        

    

        //Lógica usuário logado
        let logado = req.cookies.perfilUsuario
        if(logado == undefined){
            logado = false            
        }     

    res.render('checkout', { produtos: carrinho, totalProdutos:totalProdutos,logado })
},
finalizaCarrinho: async (req,res) => {
    let {pais, estado, cidade, cep, rua, complemento, numero} = req.body
    let {nome, tamanho, quantidade} = req.cookies.carrinho

    const user = await Usuario.findOne({
        where: { email: req.cookies.nomeUsuario },raw:true
    });
    
    //Cria endereço na tabela Enderecos
    const endereco = await Endereco.create({
        pais,
        estado,
        cidade,
        cep,
        rua,
        complemento,
        numero,
        usuarios_id: user.id
    });

    //Pega os produtos de acordo com o carrinho
    let produtosAtualiza = []
    for(let produto of req.cookies.carrinho){
        let produtoEscolhido = await Produto.findOne({
            where: {nome: produto.nome, tamanho: produto.tamanho}, raw:true
        });
        
    // Atualiza quantidade de produtos no banco
        let novaQuantidade = produtoEscolhido.quantidade - produto.quantidade 
        let novoProduto = await Produto.update(
                    {quantidade: novaQuantidade},{
                        where: {nome: produto.nome, tamanho: produto.tamanho}
                    })

        produtosAtualiza.push(produtoEscolhido)            
    }            
        
    //Finaliza pedido na tabela Carrinho
    const carrinho = await Carrinho.create({
        status: "Aberto",
        usuarios_id: user.id
    });

    //Busca carrinho criado
    let carrinhoId = await Carrinho.findOne({
        where: {usuarios_id: user.id, status: "Aberto"},raw:true
    })
    console.log(carrinhoId)
    
    let criaCarrinhoQuantidade = req.cookies.carrinho
    
    //Cria pedido na tabela CarrinhoProduto
    for(let i = 0; i < produtosAtualiza.length; i++){
            let carrinhoProduto = await CarrinhoProduto.create({
                carrinhos_id: carrinhoId.id,
                produtos_id: produtosAtualiza[i].id,
                quantidade: criaCarrinhoQuantidade[i].quantidade
            });            
        }        
    
    //Fecha carrinho
    let carrinhoIdFechado = await Carrinho.update(
        {status:'Fechado'}, {where: {usuarios_id: user.id, status: "Aberto"}})

    //Esvazia carrinho
    let esvaziaCarrinho = []
    res.cookie('carrinho', esvaziaCarrinho)

    res.redirect('/')
}
}

module.exports = controllersCheckout