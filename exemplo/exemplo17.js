const display = document.getElementById('display');

var valorAtual = '0';
var valor1 = 0;
var operacao = '';
var resetAtual = false;

function limpar() {
    valorAtual = '0';
    valor1 = 0;
    operacao = '';
    resetAtual = false;

    display.textContent = valorAtual;
}

function setOperacao(sinal) {
    valor1 = parseFloat(valorAtual);
    operacao = sinal;
    resetAtual = true;
}

function inputValue(value) {
    //numeros
    if (value >= '0' && value <= '9') {

        if (resetAtual) {
            valorAtual = '0';
            resetAtual = false;
        }

        if (valorAtual.length < 8) {
            if (valorAtual == '0') {
                valorAtual = value
            } else {
                valorAtual += value;
            }
        }
    }

    //separador decimal
    if (value == '.') {
        if (valorAtual.indexOf('.') == -1) {
            valorAtual += value;
        }
    }

    //inverter o sinal
    if (value == '+/-') {
        if (valorAtual.indexOf('-') == -1) {
            valorAtual = '-'+ valorAtual;
        } else {
            valorAtual = valorAtual.substr(1,8);
        }
    }

    //percentual
    if (value == '%') {
        var novoValor = parseFloat(valorAtual) / 100;
        valorAtual = novoValor.toString();
    }

    display.textContent = valorAtual;
}

function calcular() {
    var resultado = 0; 

    //adicao
    if (operacao == '+') {
        resultado = valor1 + parseFloat(valorAtual);
    }

    //subtraçao
    if (operacao == '-') {
        resultado = valor1 - parseFloat(valorAtual);
    }

    //multiplicação
    if (operacao == 'x') {
        resultado = valor1 * parseFloat(valorAtual);
    }

    //divisão
    if (operacao == '/') {
        resultado = valor1 / parseFloat(valorAtual);
    }

    //Garante que o próximo digitar irá sobrepor o valor
    resetAtual = true;

    //Atualizar o display
    valorAtual = resultado.toString();
    display.textContent = valorAtual;

    //Limpa a variavel operacao
    operacao = '';
}