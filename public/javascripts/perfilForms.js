const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmeSenha')
const error = document.getElementById('error')
const form = document.getElementById('formUpdateSenha')
const errorConfirmarSenha = document.getElementById('errorConfirmarSenha')

form.addEventListener('submit', (event) =>{
    console.log(senha.value);
    if(senha.value == ''){
        error.style.display = 'flex'
        error.innerHTML = `<img src="/images/erroIcon.png" >DIGITE UMA NOVA SENHA `
        error.style.color = 'red'
        senha.style.border = '1px solid red'


        
        event.preventDefault()
    }
    if(confirmarSenha.value == ''){
        errorConfirmarSenha.style.display = 'flex'
        errorConfirmarSenha.innerHTML = `<img src="/images/erroIcon.png" >CONFIRME SUA NOVA SENHA`
        errorConfirmarSenha.style.color = 'red'
        confirmarSenha.style.border = '1px solid red'
       

        event.preventDefault()
    }
})