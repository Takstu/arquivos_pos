var num1;
var num2;
var resultado;

function somar(){
    pegaNumero();
    resultado=num1+num2;
    console.log(resultado);
}

function subtrair(){
    pegaNumero();
    resultado=num1-num2;
    console.log(resultado);
}

function multiplicar(){
    pegaNumero();
    resultado=num1*num2;
    console.log(resultado);
}

function dividir(){
    pegaNumero();
    resultado=num1/num2;
    console.log(resultado);
}

function mediar(){
    pegaNumero();
    resultado=(num1+num2)/2;
    console.log(resultado);
}

function pegaNumero(){
    num1=Number(document.getElementById("entrada1").value);
    num2=Number(document.getElementById("entrada2").value);
}