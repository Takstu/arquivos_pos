var vogais;
var consoante;

String.prototype.numVogais = function(){
    let caixa = Array.from(this);
    vogais=0;
    consoante=0;
    caixa.forEach(element => {
        if(element=="a" || element=="e" || element=="i" || element=="o" || element=="u" || element=="A" || element=="E" || element=="I" || element=="O" || element=="U")
        {
            vogais++;
        }
        else
        {
            consoante++;
        }
    });
    return vogais+"/"+consoante;
};

// var nome = "Teste";
// console.log(nome.numVogais());

document.getElementById("texto").addEventListener('input', function(){
    let texto = document.getElementById('texto').value;

    document.getElementById('numVog').innerHTML = vogais;
    document.getElementById('numCons').innerHTML = consoante;
});

var colections = {
    lego: 'Bionicles',
    starwars: 'xwing',
    actionfigures: 'vader'
};

Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

Pessoa.prototype.apresentarPessoa = function(){
    console.log("nome: " + this.nome);
    console.log("idade: " + this.idade);
};

Fisica = function(nome, idade, cpf){
    Pessoa.call(this, nome, idade);
    this.cpf = cpf;
};

Fisica.prototype = Object.create(Pessoa.prototype);
Fisica.prototype.constructor = Fisica;

Fisica.prototype.apresentaFisica = function(){
    console.log("CPF: " + this.cpf);
};

pessoaFisica1 = new Fisica("Antonio", 22, "111.111.111-11");
console.log(pessoaFisica1);
pessoaFisica1.apresentarPessoa();
pessoaFisica1.apresentaFisica();