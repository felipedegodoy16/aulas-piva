// const numero1 = 0
// let numero3 = 5

// console.log("Olá mundo!")
// console.log(numero1 + numero3)
// Function normal
/* function somar(numero, numero2) {
    const resultado = numero + numero2
    console.log(resultado)
}

somar(5, 7) */

// Arrow function mais usado como back-end
const somar = (numero1, numero2, callback) => {
    const resultado = Number(numero1) + Number(numero2)
    callback(resultado)
}

// dentro dos parenteses é o parâmetro, posso deixar sem parênteses também quando tiver apenas um parâmetro
// resultado é o callback, pode ser qualquer nome
somar(5, 3, (resultado) => {
    console.log(resultado)
})

// Number(numero) -> para transformar texto em número

/*
somar(5, 3, (resultado) => {
    console.log(resultado.toString()) transforma o que estiver no resultado em uma string
}) 
*/

/*
somar(5, 3, function (resultado){
    
    console.log(`resultado: ${resultado}`)
})
*/


// callback é o que receberá de uma função
// dentro do placeholder posso usar o que quiser
// operador ternário condição ? true : false

// chamando outro arquivo
import Pessoa from "./Pessoa.js"

Pessoa.andar()

// instanciando
const pessoa = new Pessoa("Pedro", 17) // parâmetros que passei no construtor, parenteses para construir a classe, 
// para construir precisa da palavra new
// dentro da variável pois para projetos maiores não precisa construir toda vez é só chamar a variável
pessoa.correr()
pessoa.descrever() // variável.método

const resultado = await pessoa.caminhar()
console.log(resultado) // só se usa se o module estiver no código através do json ou se tiver uma função assíncrona, async

/*pessoa.caminhar().then((texto) => {
    console.log(texto)
})*/

// esquecer de colocar o await ele fala que a Promise está pendente
// .then() para executar o código assíncrono sem ser com o await
// async para deixar o bloco assíncrono - keyword reservada
// await -> continua rodando o código joga a promise para um outra linha paralela que está resolvendo a promise dps joga de volta para a linha de código certa. await -> chama a função assíncrona - keyword reservada 