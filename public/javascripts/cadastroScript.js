
//Inputs do formulario de cadastro
const form = document.getElementById('formCadastro')
const nome = document.getElementById('nome')
const sobrenome = document.getElementById('last-name')
const email = document.getElementById('email')
const dataNascimento = document.getElementById('data-nascimento')
const cpf = document.getElementById('cpf')
const telefone = document.getElementById('telefone')
const senha = document.getElementById('senha')
const confirmeSenha = document.getElementById('Confirmesenha')


//divs de mensagem de erro
const erroNome = document.getElementById('erroNome')
const errosobrenome = document.getElementById('erroSobrenome')
const erroemail = document.getElementById('erroEmail')
const errodataNascimento = document.getElementById('erroDataNascimento')
const errocpf = document.getElementById('erroCpf')
const errotelefone = document.getElementById('erroTelefone')
const errosenha = document.getElementById('erroSenha')
const erroConfirmesenha = document.getElementById('erroConfirmeSenha')



//evento de submit do formulario
form.addEventListener('submit', (event) => {

     
    if(nome.value == ''){
    nome.style.border = '1px solid red'
    erroNome.style.color = 'red'
    erroNome.innerHTML = `<p>Digite um nome</p>`
     event.preventDefault()
    }
    if(email.value == ''){
        email.style.border = '1px solid red'
        erroemail.style.color = 'red'
        erroemail.innerHTML = `<p>Digite um email</p>`
        event.preventDefault()
    }
    if(sobrenome.value == ''){
        sobrenome.style.border = '1px solid red'
        errosobrenome.style.color = 'red'
        errosobrenome.innerHTML = `<p>Digite um sobrenome</p>`
        event.preventDefault()
    }
    if(dataNascimento.value == ''){
        dataNascimento.style.border = '1px solid red'
        errodataNascimento.style.color = 'red'
        errodataNascimento.innerHTML = `<p>Digite uma Data</p>`
        event.preventDefault()
    }
    if(cpf.value == ''){
        cpf.style.border = '1px solid red'
        errocpf.style.color = 'red'
        errocpf.innerHTML = `<p>Digite um cpf</p>`
        event.preventDefault()
    }
    if(senha.value == ''){
        senha.style.border = '1px solid red'
        errosenha.style.color = 'red'
        errosenha.innerHTML = `<p>Digite uma senha</p>`
        event.preventDefault()
    }
    if(confirmeSenha.value == ''){
        Confirmesenha.style.border = '1px solid red'
        erroConfirmesenha.style.color = 'red'
        erroConfirmesenha.innerHTML = `<p>Confirme sua senha </p>`
        event.preventDefault()
    }
    if(telefone.value == ''){
        telefone.style.border = '1px solid red'
        errotelefone.style.color = 'red'
        errotelefone.innerHTML = `<p>Digite um telefone </p>`
        event.preventDefault()
    }

})

