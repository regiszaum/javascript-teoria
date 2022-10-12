// CLOSURES

//VAMOS CRIAR UMA FUNÇÃO SIMPLES

var helloWorld = function() {
    return "Hello World!";
};

helloWorld;//[Function]
helloWorld();//'Hello World!'

// VAMOS COLOCAR UM FUNÇÃO DENTRO DELA

var helloWorld = function() {
    var message = "Hello World!";
    return function () {
        return message;
    }
};

var funcaoHelloWorld = helloWorld();
console.log(funcaoHelloWorld());

//SERÁ QUE VAI MOSTRAR A MENSAGEM?
// VAI SIM! POR CONTA DO MECANISMO DE CLOSURE
// PORQUE A INNERFUNCTION QUE ESTA DENTRO DA FUBÇÃO helloWord ela mantém a referencia da message(dentro do return function) da function com a referencia da var message.
// LOGO A REFERENCIA NAO SE PERDE, POR ISSO OS CALLBACKS FUNCIONAM TAO BEM NA LINGUAGEM JAVASCRIPT