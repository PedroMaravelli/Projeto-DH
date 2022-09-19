const senha = document.getElementById('senha')
const confirmarSenha = document.getElementById('confirmeSenha')
const error = document.getElementById('error')
const form = document.getElementById('formUpdateSenha')
console.log(form)
console.log(senha);
form.addEventListener('submit', (event) =>{
    console.log(senha.value);
    if(senha.value == ''){
        error.innerHTML = `<p>Confirme sua senha </p>`
        
        event.preventDefault()
    }
})