var acumulo;
var valor;
var resultado;
var operado=0;
var digitado;

function insere(numero){
    valor = document.getElementById("tela").value;
    if(operado==0)
    {
        if(numero=="." && valor.indexOf('.')>-1)
        {
            
        }
        else
        {
            valor += numero;
            document.getElementById("tela").value = valor;
        }
    }
    else if(operado == 1)
    {
        document.getElementById("tela").value = numero;
        operado = 0;
    }
}

function conta(operador){
    acumulo = document.getElementById("tela").value;
    acumulo += operador;
    document.getElementById("tela").value = '';
}

function igual(){
    acumulo += document.getElementById("tela").value;
    resultado = eval(acumulo);
    operado = 1;
    document.getElementById("tela").value = resultado;
}

function bks(){
    digitado = document.getElementById("tela").value;
    document.getElementById("tela").value = digitado.substring(0, digitado.length-1);
}

function limpa(){
    document.getElementById("tela").value = '';
    acumulo = '';
    valor = '';
    operado = 0;
    digitado = '';
    resultado = '';
}