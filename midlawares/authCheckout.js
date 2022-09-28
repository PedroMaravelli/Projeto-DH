const cookie = require('cookie-parser')


const authCheckout = (req,res,next) =>{
    if(req.cookies.nomeUsuario != undefined ){
        res.redirect('/login')
    }if(req.session.usuario == undefined){
        res.redirect('/cadastro')
    }
    next()
}

module.exports = authCheckout