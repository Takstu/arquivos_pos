const numero = parseInt(Math.random()*100);
console.log(numero);
var entrada;
var diferenca;
var contador=0;
 
function verificar(){
    contador++;
    if(contador<10)
    {
    entrada = Number(document.getElementById("entrada").value);
    diferenca = entrada<numero ? (numero-entrada) : (entrada-numero);
    
    if(diferenca==0)
    {
        document.getElementById("texto").value="Acertou";
        document.getElementById("dica").style.backgroundColor="green";
        document.getElementById("botao").style.visibility="hidden";
    }
    else if(diferenca>=1 && diferenca<=9)
    {
        document.getElementById("texto").value="Queimando";
        document.getElementById("dica").style.backgroundColor="red";
    }
    else if(diferenca>=10 && diferenca<=19)
    {
        document.getElementById("texto").value="Fervendo";
        document.getElementById("dica").style.backgroundColor="orange";
    }
    else if(diferenca>=20 && diferenca<=29)
    {
        document.getElementById("texto").value="Quente";
        document.getElementById("dica").style.backgroundColor="yellow";
    }
    else if(diferenca>=30 && diferenca<=39)
    {
        document.getElementById("texto").value="Morno";
        document.getElementById("dica").style.backgroundColor="cyan";
    }
    else if(diferenca>=40 && diferenca<=49)
    {
        document.getElementById("texto").value="Frio";
        document.getElementById("dica").style.backgroundColor="blue";
    }
    else
    {
        document.getElementById("texto").value="Gelado";
        document.getElementById("dica").style.backgroundColor="white";
    }
    }
    else{
        alert("Fim das tentativas");
        document.getElementById("texto").value="Que pena, o número era: "+numero;
        document.getElementById("dica").style.backgroundColor="gray";
        document.getElementById("botao").style.visibility="hidden";
    }
}