const form = document.getElementById('formsRegistros')
const inputEmail = document.getElementById('email-form')
const inputSenha = document.getElementById('senha-form')
const labelEmail = document.getElementById('labelEmail')
const labelSenha = document.getElementById('labelSenha')
const erroEmail = document.getElementById('erroEmail')
const erroSenha = document.getElementById('erroSenha')




form.addEventListener('submit', (event) =>{

    if(inputEmail.value == ''){

        erroEmail.innerHTML = `<img src="/images/erroIcon.png" > Digite um Email`
        erroEmail.style.display = 'flex'
        
        inputEmail.style.border = '1px solid red'
        labelEmail.style.color =  'red'
        event.preventDefault()
    }
    if(inputSenha.value == ''){

        erroSenha.innerHTML = `<img src="/images/erroIcon.png" > Digite uma Senha`
        erroSenha.style.display = 'flex'

        inputSenha.style.border = '1px solid red'
        labelSenha.style.color = 'red'
        event.preventDefault()
    }


    

})







