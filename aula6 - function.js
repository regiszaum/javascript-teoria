// A linguagem JAVASCRIPT não tem:

// Classe
// Construtor
// Método
// Módulo

// Uma função é um objeto que contém um bloco de código executável. Esse block é isolado, não sendo possível acessá-lo externamente, na linguagem JavaScript
// as funções são de primeira classe.
// Função de primeira classe é aquela que pode ser atribuída a uma variavel, passada como parâmetro ou ser retornada de uma outra função.


// Function declaration
function soma(a,b) {
    return a + b;
}

console.log(soma);
console.log(soma(2,2));

// Function Expression -- É a mais comum e preferível

var soma = function (a,b) {
    return a + b;
}

console.log(soma);
console.log(soma(2,2));

// Named Function Expression - O nome da função pode ser útil pois aparece no stack trace, listas de breakpoints e demais ferramentas de debbuging.

var soma = function soma(a,b) {
    return a + b;
}

console.log(soma);
console.log(soma(2,2));

// Invocando uma função diretamente no escopo global
//Passa uma função como parâmetro

var produto = {nome: 'Sapato', preco: 150};

var formulaImpostoA = function (preco) {
    return preco*0.1;
};

var formulaImpostoB = function (preco) {
    return preco*0.2;
};

var calcularPreco = function (produto, formulaImpostoA) {
    return produto.preco + formulaImpostoA(produto.preco);
};

calcularPreco(produto, formulaImpostoA);//165
calcularPreco(produto, formulaImpostoB);//180

// Retornando uma função de uma outra função

var helloWorld = function () {
    return function () {
        return "Hello Word";
    };
};

console.log(helloWorld);// retorna uma funcao
console.log(helloWorld());// retorna uma funcao
console.log(helloWorld()());// retorna o "Hello World"

// Utilizando uma função como método, declarada dentro do objeto

var pessoa = {
    nome: "Régis",
    idade: 25,
    getIdade: function() {
        return this.idade;
    }
};

pessoa.getIdade();//25