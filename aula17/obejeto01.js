    let amigo = {
        nome: 'Fernando', 
        sexo: 'M', 
        idade: 15, 
        peso: 55.5,
        engordar(p=0){
            console.log('Engordou')
            this.peso += p
        }
    }
    amigo.engordar(5)
    console.log(`${amigo.nome} pesa ${amigo.peso}Kg e tem ${amigo.idade} anos de idade`)