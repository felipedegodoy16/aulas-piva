class Pessoa {
    // construtor, parâmetros que quero para a classe
    // primeiro colocar os parâmetros 
    constructor(nome, idade) {
        this.nome = nome // valor depois do = é o que passei no parâmetro
        this.idade = idade
    }
    // função estática não preciso construir a classe 
    static andar() {
        console.log("andando...")
    }

    correr(){
        const nome = this.nome
        console.log(`${nome} correndo...`)
    }

    descrever() {
        console.log(`${this.nome} tem ${this.idade} anos`)
    }

    // função assíncrona
    /*caminhar() {
        return new Promise((resolve, reject) => {
            if(this.idade >= 18) {
                resolve("maior de idade")
            } else {
                reject("menor de idade")
            }
        }) // pode ser qualquer nome, mas saber que primeiro é o resolve e o segundo o reject, mais usado res e rej
    }*/

    caminhar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("caminhada concluída")
            }, 4000)
            // posso também passar a função que esteja fora
            // setTimeout(this.resolverPromessa, 4000) resolverPromessa seria a função
        })
    }
}

// para exportar o que está aqui para outro arquivo

export default Pessoa

// module.exports = Pessoa
// para typescript  = export default Pessoa também usado com module no json
// escopo é o que está dentro das chaves de uma função
// escopo global é tipo a classe, que abrange tudo