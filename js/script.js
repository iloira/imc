
const calcular = document.getElementById('calcular')


function imc (){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value        
    const result = document.getElementById('result')

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura))
        result.textContent = valorIMC


    }else {
        result.textContent = 'Preencha todos os campos!'
    }

}

calcular.addEventListener('click', imc)