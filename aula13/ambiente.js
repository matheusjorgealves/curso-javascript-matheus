var c = 1 // c = contador
var numero = 4 // numero = número para ver a taboada até o limite desejado
var lim = 89 // lim = limite para se ver as multiplicações
    do {
        var resul = numero * c
        console.log(`${numero} X ${c} = ${resul}`)
        c++
    } while (c <= lim)