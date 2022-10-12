// CALL E APPLY

//Toda função possui os métodos call() e apply().
//Eles são utilizados para indicar em qual escopo uma função deve ser executada.

// a diferença é basicamente a forma como é utilizado?

// funcao.call(escopo,parametro1,parametro2)
// funcao.apply(escopo,parametros)

var getIdade = function() {
    return this.idade;
}

var pessoa = {
    nome: "Régis",
    idade: 25,
    getIdade: getUdade
};

pessoa.getIdade();//25
getUdade();// undefined
getIdade.call(pessoa);//25
console.log(getIdade.call(pessoa));//25
console.log(getIdade.apply(pessoa));//25

// soma com o parametro
console.log(getIdade.call(pessoa, 2));// 27
// o apply é obrigatoriamente um array
console.log(getIdade.call(pessoa, [2]));// 25+2 = 27