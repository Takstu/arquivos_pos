var num1;
var num2;
var resultado;

function operacao(opera){
    pegaNumero();
    switch(opera){
        case "somar":
            resultado=num1+num2;
            apresenta(resultado);
        break;
        case "subtarir":
            resultado=num1-num2;
            apresenta(resultado);
        break;
        case "multiplicar":
            resultado=num1*num2;
            apresenta(resultado);
        break;
        case "dividir":
            resultado=num1/num2;
            apresenta(resultado);
        break;
        case "mediar":
            resultado=(num1+num2)/2;
            apresenta(resultado);
        break;
    }
    //return resultado;
}
//document.getElementById("resultado").value= resultado != undefined ? resultado : ' ';

function apresenta(valor){
    document.getElementById("resultado").value=valor;
}

function pegaNumero(){
    num1=Number(document.getElementById("entrada1").value);
    num2=Number(document.getElementById("entrada2").value);
}