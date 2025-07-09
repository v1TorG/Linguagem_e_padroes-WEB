let inputResultado = document.getElementById('inputCalculadora')

let calculo = {
valorSalvo: null,
funcaoParaCalcular: null
}

window.addEventListener('load', function(){atribuirEventos()})

function atribuirEventos(){
    document.getElementById("btnValor0").addEventListener("click", inserirNumero)
    document.getElementById('btnValor1').addEventListener('click', inserirNumero)
    document.getElementById('btnValor2').addEventListener('click', inserirNumero)
    document.getElementById('btnValor3').addEventListener('click', inserirNumero)
    document.getElementById('btnValor4').addEventListener('click', inserirNumero)
    document.getElementById('btnValor5').addEventListener('click', inserirNumero)
    document.getElementById('btnValor6').addEventListener('click', inserirNumero)
    document.getElementById('btnValor7').addEventListener('click', inserirNumero)
    document.getElementById('btnValor8').addEventListener('click', inserirNumero)
    document.getElementById('btnValor9').addEventListener('click', inserirNumero)

    document.getElementById('btnPonto').addEventListener('click', inserirPonto)
    document.getElementById('btnSoma').addEventListener('click', clicarOperador)
    document.getElementById('btnDividir').addEventListener('click', clicarOperador)
    document.getElementById('btnMultiplicar').addEventListener('click', clicarOperador)
    document.getElementById('btnSubtrair').addEventListener('click', clicarOperador)
    document.getElementById('btnLimpar').addEventListener('click', limparDados)
    document.getElementById('btnResultado').addEventListener('click', clicarResultado)
}

function inserirNumero(){
    if (isNaN(inputResultado.value)){
        inputResultado.value = event.target.textContent
    } else {
        if(inputResultado.value == 0){
            inputResultado.value = event.target.textContent
        } else {
            inputResultado.value += event.target.textContent
        }
    }
}

function somar(valor1, valor2){
    return valor1 + valor2
}

function subtrair(valor1, valor2){
    return valor1 - valor2
}

function multiplicar(valor1, valor2){
    return valor1 * valor2
}

function dividir(valor1, valor2){
    if(valor2 == 0){
        return 'erro, não é possivel dividir um numero por zero'
    }else{
        return valor1 / valor2
    }
}

function limparDados(){
    inputResultado.value = ""
    calculo.valorSalvo = null
    calculo.funcaoParaCalcular = null
}

function inserirPonto(){
    if(inputResultado.value == "" || isNaN(inputResultado.value)){
        inputResultado.value = "0."
    }else if(!inputResultado.value.includes(".")){
        inputResultado.value = inputResultado.value + "."
    }
}

function atribuirOperacao(operador){
    if(operador === '+'){
        calculo.funcaoParaCalcular = somar
    } else if(operador === '-'){
        calculo.funcaoParaCalcular = subtrair
    } else if(operador === '*'){
        calculo.funcaoParaCalcular = multiplicar
    } else{
        calculo.funcaoParaCalcular = dividir
    }
}

function clicarOperador(){
    if(!isNaN(inputResultado.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo = Number(inputResultado.value)
        }else if(calculo.funcaoParaCalcular != null){
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))
        }
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador)
    inputResultado.value = operador
}

function clicarResultado(){
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value))
        inputResultado.value = resultado
        calculo.valorSalvo = resultado
        calculo.funcaoParaCalcular = null
    }
}