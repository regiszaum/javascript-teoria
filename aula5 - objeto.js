// um OBJETO é uma coleção dinâmica de chaves e valores de qualquer tipo de dado.
// É possível adicionar ou remover propriedades a qualquer momento.

var pessoa = {};
typeof pessoa// 'object'

var pessoa = {
    nome: "Régis",
    idade: 25,
    telefone: null,
    endereço: {
        logradouro: "Rua Goiania",
        bairro: "Jardim Diamantina"
    }
};

// atribuindo propriedades a um objeto
pessoa.nome = "Régis Adriano";
pessoa["nome"] = "Régis Adriano";
pessoa.endereço.bairro = "Centro";
pessoa["endereço"]["bairro"] = "Centro";
pessoa.endereço["bairro"] = "Centro";
pessoa.telefone = null;
pessoa.pessoa = undefined;

//clear

pessoa.telefone = "62994582484";

console.log(pessoa)
// {
//     nome: 'Régis Adriano',
//     idade: 25,
//     telefone: '62994582484'
// }

//atribuindo propriedade com nome de propriedade com espaços

//pessoa.cor dos olhos = "azul"; --------- ERRADO
pessoa["cor dos olhos"] = "azul";// ----------- CERTO

//atribuir um objeto dentro de um objeto

//pessoa.endereço.bairro = "Centro" ------- ERRADO
pessoa.endereço = {};
pessoa.endereço.bairro = "Centro";
console.log(pessoa);

// {
//     nome: 'Régis Adriano',
//     idade: 25,
//     telefone: '62994582484'
//     'cor dos olhos': 'azul',
//      endereço: { bairro: 'Centro'}
// }

// OU

pessoa["endereço"]["logradouro"] = "Rua Trajano";
console.log(pessoa);

// {
//     nome: 'Régis Adriano',
//     idade: 25,
//     telefone: '62994582484'
//     'cor dos olhos': 'azul',
//      endereço: { bairro: 'Centro',
//                  logradouro: 'Rua Trajano' 
//                 }
// }


// APAGANDO PROPRIEDADES DE UM OBJETO

delete pessoa.telefone;

for (var propriedade in pessoa) {
    console.log(propriedade);
}

// {
//     nome: 'Régis Adriano',
//     idade: 25,
//     'cor dos olhos': 'azul',
//      endereço: { bairro: 'Centro',
//                  logradouro: 'Rua Trajano' 
//                 }
// }

//OUTRA FORMA DE CRIAR OBJETO, que é uma função construtora usando o new

var pessoa = new Object();

//OUTRA FORMA DE CRIAR OBJETO, vamos ver no capitulo de herança

var pessoa = Object.create();