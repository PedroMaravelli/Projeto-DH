const form = document.getElementById('formCheckout')
const pais = document.getElementById('pais')
const estado = document.getElementById('estado')
const cidade = document.getElementById('cidade')
const cep = document.getElementById('cep')
const rua = document.getElementById('rua')
const numero = document.getElementById('numero')

const erroPais = document.getElementById('erroPais')
const erroEstado = document.getElementById('erroEstado')
const erroCep = document.getElementById('erroCep')
const erroRua = document.getElementById('erroRua')
const erroNumero = document.getElementById('erroNumero')




console.log(estado.value.length);


form.addEventListener('submit', (event) =>{
    console.log(estado.length);
    if(pais.value == ''){
        event.preventDefault()
    }
    if(estado.value =='' ){
        event.preventDefault()
    }
     if(estado.value.length >2){
        event.preventDefault()
     }
    if(cidade.value ==''){
        event.preventDefault()
    }
    if(cep.value ==''){
        event.preventDefault()
    }
    if(rua.value ==''){
        event.preventDefault()
    }
    if(numero.value ==''){
        event.preventDefault()
    }
})
