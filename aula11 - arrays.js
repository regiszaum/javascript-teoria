// Os arrays são apenas objetos especiais que oferecem meios para acessar e manipular suas propriedades por meio de índices.

// criando array

var carros = [];

// adicionar elementos no array

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

// Inicilizando array com elementos

var carros = ["Ka","Corsa","Peugeot"];

// outra possibilidade de criar um array, é com new

var carros = new Array();

// continuando o array passando os elementos de forma inline

var carros = new Array("Ka","Corsa","Peugeot");

// segunda possibilidade é passar um tamanho

var carros = new Array(10);

// ATENÇÃO -- NÃO SE ESQUEÇA QUE O ARRAY NÃO TEM TAMANHO FIXO E O TAMANHO INICIAL É APENAS UMA FORMA DE INICIALIZÁ-LO

// valueOF(); para saber o valor do array

var carros = ["Ka","Corsa","Peugeot"];

carros.valueOf()// ["Ka","Corsa","Peugeot"]

carros.toString(); //'Ka','Corsa','Peugeot'

//consultando o tamanho do array com .length

carros.length();// 3

// ADICIONAR ELEMENTO NO ARRAY COM PUSH

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

carros.push("Gol");// tamanho 4 - indice 3
carros.toString();// ["Ka","Corsa","Peugeot","Gol"]


// REMOVER ELEMENTO COM POP

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

carros.pop();// Ele remove o ultimo elemento
carros.toString();// ["Ka","Corsa"]

// INSERINDO NOVOS ELEMENTOS NO INICIO COM UNSHIFT, E COM SHIFT ELE REMOVE DO INICIO

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

carros.unshift("Gol");// tamanho 4 
carros.toString();// ["Gol","Ka","Corsa","Peugeot"]

// LOCALIZANDO ELEMENTOS COM inderOF

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

carros.indexOf("Corsa")// 1

// REMOVENDO ELEMENTOS EM UMA POSIÇÃO COM SPLICE

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

var pos = carros.indexOf("Corsa");// 1
carros.splice(pos,1);// ["Corsa"]
carros.toString();// ["Ka","Peugeot"]

// OU

console.log(carros);// ["Ka","Corsa","Peugeot"]
carros.splice(1,1)// ele remove o "Corsa", os parametro do splice (posicao no indice, quantidade)

// SUBSTITUINDO ELEMENTOS EM UMA POSIÇÃO COM SPLICE

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

var pos = carros.indexOf("Corsa");// 1
carros.splice(pos,1,"Ferrari");// ["Corsa"]
carros.toString();// ["Ka","Ferrari","Peugeot"]

// ITERANDO EM UM ARRAY COM forEach

var carros = [];

a[0] = "Ka";
a[1] = "Corsa";
a[2] = "Peugeot";

carros.forEach(function (elemento){

});

// FILTRANDO O ARRAY COM FILTER

var carros = [];

carros[0] = {marca:"Ford",modelo:"Ka"};
carros[1] = {marca:"Chevrolet",modelo:"Corsa"};
carros[2] = {marca:"Peugeot",modelo:"206"};

carros.filter(function (elemento) {
    return elemento.marca === "Ford";
}); // [{marca:"Ford",modelo:"Ka"}]

// FILTRANDO O ARRAY COM FILTER

var carrosFord = carros.filter(function (elemento){
    return elemento.marca === "Ford";
});

console.log(carrosFord);

// DECOBRIR OS ELEMENTOS DE ARRAY COM EVERY

var carros = [];

carros[0] = {marca:"Ford",modelo:"Ka"};
carros[1] = {marca:"Chevrolet",modelo:"Corsa"};
carros[2] = {marca:"Peugeot",modelo:"206"};

carros.every(function (elemento) {
    return elemento.marca === "Ford";
}); // [{marca:"Ford",modelo:"Ka"}]

// MAPEANDO OS ELEMENTOS DO ARRAY COM MAP

var carros = [];

carros[0] = {marca:"Ford",modelo:"Ka"};
carros[1] = {marca:"Chevrolet",modelo:"Corsa"};
carros[2] = {marca:"Peugeot",modelo:"206"};

carros.map(function (elemento) {
    return elemento.marca;
}); // ["Ford","Chevrolet","Fiat"]