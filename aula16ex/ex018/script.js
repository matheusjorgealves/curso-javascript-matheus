    let num = window.document.getElementById('txtnumero')
    let lista = window.document.getElementById('flista')
    let res = window.document.getElementById('res')
    let valores = []


    function Énumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }


    function naLista(n, v){
        if (v.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }


    function adicionar(){
        if (Énumero(num.value) && !naLista(num.value, valores)) {
            valores.push/* o 'PUSH' serve para adicionar um elemento a um vetor*/(Number(num.value))
            let item = document.createElement/* o 'creatELEMENT' literalmente cria um novo elemento , basta você adiciona-lo onde quiser */('option')
            item.text = `O valor ${num.value} foi adicionado.`
            lista.appendChild/* o 'APPENDCHILD' adiciona um determinado elemento a uma determinada área, neste caso numa SECTION*/(item)
            res.innerHTML = '' // isso serve para que o resultado anterior não permaneça e confunda o usuário           
        } else {
            window.alert('Número inválido ou repetido!')
        }
        num.value = '' // isso serve para deixar o input vazio(visualmente) depois de executar a função 'ADICIONAR'
        num.focus() // o 'FOCUS' serve para deixar com que o mouse já retorne altomaticamente para ele (ele == num)
    }


    function finalizar(){
        if (valores.length == 0){
            window.alert(`Insira o(os) valor(valores) para continuar`)
        } else {


            let tot = valores.length
            let maior = valores[0]
            for (let pos in valores){
                if (valores[pos] > maior){
                    maior = valores[pos]
                }        
            } 
            let menor = valores [0]
            for (let pos in valores){
                if (valores[pos] < menor){
                    menor = valores[pos]
                }
            }    
            let soma = 0
                for (let pos in valores){
                    soma = soma + valores[pos]
                }
            let media = soma / tot


            res.innerHTML = ''
            res.innerHTML += `<p> Ao todo <strong>${tot}</strong> números foram cadastrados </p>`
            res.innerHTML += `<p> O <strong>maior</strong> valor cadastrado é o número <strong>${maior}</strong> </p>`
            res.innerHTML += `<p> O <strong>menor</strong> valor cadastrado é o número <strong>${menor}</strong> </p>`
            res.innerHTML += `<p> A <strong>soma</strong> dos valores cadastrados é igual a <strong>${soma}</strong> </p>`
            res.innerHTML += `<p> A <strong>média</strong> dos valores cadastrados é igual a <strong>${media}</strong> </p>`
        }
    }