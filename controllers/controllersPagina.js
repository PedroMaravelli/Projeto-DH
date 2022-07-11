let produtosMasculinos = [{nome: 'Camiseta Lisa Branca', valor: 49.99 }, {nome: 'Camiseta Lisa Cinza', valor: 49.99} , {nome: 'Camiseta Lisa Azul', valor: 49.99}]
let produtosFemininos = [{nome: 'Camiseta Feminina Branca', valor: 39.99 }, {nome: 'Camiseta Feminina Rosa', valor: 39.99} , {nome: 'Camiseta Feminina Azul', valor: 39.99}]


const controllersHomePage = {
    home: (req,res) =>{
    res.render('homePage', {produtos: produtosMasculinos , produtosfem: produtosFemininos})
    },
    cadastro: (req,res) => {
        res.render('cadastro')
    }
}

module.exports = controllersHomePage