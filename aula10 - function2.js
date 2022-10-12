// vamos criar um contador

var counter = {
    value: 0,
    add: function() {
        return ++this.value;
    }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

//VAI IMPRIMIR ASSIM:
//1
//2
//3

// OUTRA MANEIRA DE CRIAR UM CONTADOR

var itens = {
    value: [],
    add: function (item) {
        this.value.push(item);
        return this.value;
    }
};

console.log(itens.add('A'));
console.log(itens.add('B'));
console.log(itens.add('C'));

//VAI IMPRIMIR ASSIM:
// ['A']
// ['A','B']
// ['A','B','C']


//FACTORY FUNCTION

var createrCounter = function() {
    var value = 0;
    return {
        add: function(){
            return ++value;
        }
    };
};

var counter = createrCounter();
counter.value;// undefined
counter.add();//1
counter.add();//2
counter.add();//3

//CONSTRUCTOR FUNCTION

var Counter = function() {
    var value = 0;
    this.add = function(){
        return ++value;
    };
};

var counter = new Counter();
counter.add();//1
counter.add();//2
counter.add();//3

// IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION