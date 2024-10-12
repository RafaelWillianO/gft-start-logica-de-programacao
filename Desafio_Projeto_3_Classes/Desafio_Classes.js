// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

//classe
class char {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe

    }

    atacar() {
        if (this.classe == "Mago") {
            return "magia"
        }
        else if (this.classe == "Guerreiro") {
            return "espada"
        }
        else if (this.classe == "Moge") {
            return "artes marciais"
        }
        else if (this.classe == "Ninja") {
            return "shuriken"
        }
    }

    escrever() {
        console.log(`O ${this.classe} atacou usando ${this.atacar()}`)

    }
}


//objeto
let boneco = new char("rafawill", "29 anos", "Mago")


boneco.escrever()






//console.log(boneco)(`o nome do personagem é ${nome}, ele tem ${idade} e está com a classe: ${classe}`)
