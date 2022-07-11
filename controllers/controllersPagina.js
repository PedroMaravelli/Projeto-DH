const controllersPagina = {
    home: (req,res) =>{
    res.render('homePage')
    },
    cadastro: (req,res) => {
        res.render('cadastro')
    },
    produtos: (req,res) => {
        res.render('produtos')
    },
}

module.exports = controllersPagina