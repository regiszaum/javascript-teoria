// o tipo UNDEFINED é retornado caso uma propriedade de um determinado objeta seja consultada e não exista.

var pessoa = {};
//undefined
pessoa
console.log(pessoa);//{}
console.log(pessoa.idade);// undefined

pessoa.nome = "Rodrigo"
console.log(pessoa.nome);// 'Rodrigo'

pessoa.idade = 30

console.log(pessoa);// {nome: 'Rodrigo', idade: 30 }

for(var propriedade in pessoa) {
    console.log(propriedade);
}
// nome
// idade
//undefined

pessoa.idade = undefined
console.log(pessoa.idade);// undefined

for(var propriedade in pessoa) {
    console.log(propriedade);
}

// nome
// idade
//undefined

// o tipo NULL indica a ausência de valor em uma determinada propriedade já existente

pessoa.idade = null;

console.log(pessoa);// { nome: 'Rodrigo', idade: null }