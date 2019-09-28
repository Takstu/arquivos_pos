var bombas = [];
var tentativas = 0;
var recorde = 0;
var nome;

for(let i = 0; i<10; i++)
{
    let numero = Math.floor(Math.random()*100) + 1;
    if(bombas.includes(numero))
    {
        i--;
    }
    else
    {
        bombas.push(numero);
    }
}

console.log(bombas);

function avalia(id){
    let numero = Number(id);
    if(bombas.includes(numero))
    {
        document.getElementById(id).style.backgroundColor = "red";
        for(let i=0;i<100;i++)
        {
            document.getElementById(i+1).disabled = true;
        }
        tentativas++;
        document.getElementById('numTent').innerHTML=tentativas;
        let temp = Number(document.getElementById('numRec').innerHTML);
        if(temp<recorde)
        {
            document.getElementById('numRec').innerHTML=recorde;
        }
        document.getElementById('name').innerHTML=prompt("Digite seu nome");
    }
    else
    {
        document.getElementById(id).style.backgroundColor = "green";
        document.getElementById(id).disabled = true;
        recorde++;
    }
}

function reset(){
    bombas = [];
    for(let i = 0; i<10; i++)
    {
        let numero = Math.floor(Math.random()*100) + 1;
        bombas.push(numero);
    }
    console.log(bombas);
    recorde=0;
    for(let i=0;i<100;i++)
    {
        document.getElementById(i+1).disabled = false;
        document.getElementById(i+1).style.backgroundColor='';
    }
}