// Adiciona variáveis para armazenar campos necessários
let campoAltura = null;
let campoMassa = null;
let botaoQueCalcula = null;
let paragrafoExibeIMC = null;
let paragrafoExibeSituacao = null;
let divExibeResultado = null;

// Armazena altura e massa
let dadosUsuario = {
    altura: null,
    massa: null
}

// Chama Setup quando o DOM for carregado
document.addEventListener("DOMContentLoaded", setup);

function setup() {
    // Obtém os campos necessários
    campoAltura = document.getElementById("alturaUsuario");
    campoMassa = document.getElementById("massaUsuario");
    botaoQueCalcula = document.getElementById("botaoCalcular");
    paragrafoExibeIMC = document.getElementById("exibeIMC");
    paragrafoExibeSituacao = document.getElementById("exibeSituacao");
    divExibeResultado = document.getElementById("exibeCalculos");

    // Quando o campoAltura muda, o valor nele é armazenado na propriedade "altura" do objeto dadosUsuário
    campoAltura.addEventListener("change", () => dadosUsuario.altura = Number(campoAltura.value));

    // Quando o campoMassa muda, o valor nele é armazenado na propriedade "massa" do objeto dadosUsuário
    campoMassa.addEventListener("change", () => dadosUsuario.massa = Number(campoMassa.value));

    // Quando o usuário clica no botão que calcula, o IMC é calculado, a situação é averiguada e os resultados são exibidos
    botaoQueCalcula.addEventListener("click", () => {
        if (dadosUsuario.altura != 0 && dadosUsuario.massa != 0) {
        const valorIMC = (dadosUsuario.massa / (dadosUsuario.altura ** 2)).toFixed(2);
        const situacaoUsuario = testaSituacao(valorIMC);

        paragrafoExibeIMC.innerText = `${valorIMC} kg/m².`;
        paragrafoExibeSituacao.innerText = `${situacaoUsuario}`;
        divExibeResultado.hidden = 0;
        }
    });
}

function testaSituacao(valorIMC) {
    // Assegura que o valor de IMC usado será numérico
    let IMC = Number(valorIMC)

    // Averigua a situação do usuário
    switch (true) {
        case (IMC < 17):
            return "Muito abaixo do peso.";

        case (IMC < 18.5):
            return "Abaixo do peso."
        
        case (IMC < 25):
            return "Peso normal.";

        case (IMC < 30):
            return "Acima do peso.";

        case (IMC < 35):
            return "Obesidade.";

        case (IMC < 40):
            return "Obesidade severa.";

        case (IMC >= 40):
            return "Obesidade mórbida.";

        default:
            return "Um erro ocorreu.";
    }
}
