let num = [5, 8, 9, 2] // a primeira posição não é a posição 1, mas sim a posição 0
num.push(1) // adicionar um numero ao vetor
num.sort() // ordenar por crescente
console.log(num)
console.log(` O vetor tem ${num.length} elementos`)
console.log(` O primeiro elemento do vetor é ${num[0]}`)
var pos = num.indexOf(4) // ele está querendo saber se o valor dentro dos "()" está em alguma posição
if (pos == -1){ //quando o js diz que ele está na posição "-1" ele quer dizer que este valor não existe em nenhuma posição
    console.log(`O valor digitado não foi encontrado`)
} else {
    console.log(` O valor 4 está na posição ${pos}`)
}