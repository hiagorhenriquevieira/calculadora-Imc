let calcularImc = function(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc = peso/altura**2
    document.getElementById("resultado").innerText = imc
}