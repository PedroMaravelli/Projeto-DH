const cookie = require('cookie-parser')


const auth = (req, res, next) => {
    if(req.cookies.nomeUsuario != undefined && req.session.usuario == undefined){
        res.redirect('login')
    }else{
        next()
    }
}

module.exports = auth