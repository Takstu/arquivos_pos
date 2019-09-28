class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class pessoaFisica extends Pessoa{
    constructor(nome, idade, cpf){
        super(nome, idade);
        this.cpf = cpf;
    };
}

var pessoa1 = new pessoaFisica("Antonio", 22, "111.111.111-11");
console.log(Pessoa);
console.log(pessoa1);