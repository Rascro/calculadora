function multiplicação(valor1, valor2){
    const resultado = valor1 * valor2
    return resultado
}
function divisão(valor1, valor2){
    const resultado = valor1 / valor2
    return resultado
}
function soma(valor1, valor2){
    const resultado = parseInt(valor1) + parseInt(valor2)
    return resultado
}
function subtração(valor1, valor2){
    const resultado = valor1 - valor2
    return resultado
}

function handleBtMultiplicar(){
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = multiplicação(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}
function handleBtDividir(){
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = divisão(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}
function handleBtSomar(){
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = soma(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}
function handleBtSubtrair(){
    const v1 = document.getElementById('valor1').value
    const v2 = document.getElementById('valor2').value
    const resultado = subtração(v1, v2)
    document.getElementById('resultado').innerHTML = resultado
}

document.getElementById('btnMultiplicar').addEventListener('click',handleBtMultiplicar)
document.getElementById('btnDividir').addEventListener('click',handleBtDividir)
document.getElementById('btnSomar').addEventListener('click',handleBtSomar)
document.getElementById('btnSubtrair').addEventListener('click',handleBtSubtrair)
