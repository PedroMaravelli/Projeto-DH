const cookie = require('cookie-parser')


const authCheckout = (req,res,next) =>{
    if(req.session.usuario == undefined){
        res.redirect('/login')
    }
    next()
}

module.exports = authCheckout