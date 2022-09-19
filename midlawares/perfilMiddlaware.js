const loginMiddlaware = (req,res,next) =>{
    let {senha, confirmeSenha} = req.body

    if(senha  == ''){
        res.redirect('/perfil')

    }
    if(confirmeSenha == ''){
        res.redirect('/perfil')
    }
    if(senha != confirmeSenha){
        res.redirect('/perfil')
    }

    return next()
}

module.exports = loginMiddlaware
    
