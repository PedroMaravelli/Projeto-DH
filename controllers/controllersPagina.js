const controllersPagina = {
    home: (req,res) =>{
    res.render('homePage')
    },
    cadastro: (req,res) => {
        res.render('cadastro')
    }
}

module.exports = controllersPagina