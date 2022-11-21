let massa = document.getElementById("massa");
let altura = document.getElementById("altura");
let resultado = document.getElementById("resultado");

let imc = massa / (altura - altura) 

if(imc<17)
{
    resultado = "Muito abaixo do peso";
}