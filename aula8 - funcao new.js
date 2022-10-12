// Vai ficar chateado de toda vez ter que repitir um obj...
var pessoaA = {
    nome: "Pedro",
    idade: 20
};

var pessoaB = {
    nome: "Maria",
    idade: 30
};

// Funções construtoras vs. Funções Fábrica

//Funções Fábrica:
//um dos conceitos mais usados na criacao de objetos

var criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Pedro", 30));

// Reparou que facilitou na criação?

// Funções construtora:
// Ela começam com letras maiusculas

var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
};

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Maria", 30));

// A diferença é que não enxergamos as operações que eles ta fazendo...
//Vamos tentar decompor para aprender na pratica?

var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 30);
console.log(maria);

// ALERTA - NÃO ESQUEÇA DE UTILIZAR O OPERADOR NEW QUANDO UTILIZAR FUNÇÕES CONSTRUTORAS
// SE VOCE ESQUECER O OPERADOR NEW, VOCE VAI ESTAR CHAMANDO A FUNCAO DIRETAMENTE E SOBREESCREVENDO OU DEFININDO NOME IDADE NO ESCOPO GLOBAL,
// JÁ QUE O THIS VAI SE REFERIR A ELE.