    function tabuada(){
        var numero = window.document.getElementById('numero')
        var tab = window.document.getElementById('seltab')

        if (numero.value.length == 0){
            window.alert(`[ERRO:] faltam dados!`)
        } else {
            var num = Number(numero.value)
            var c = 1
            tab.innerHTML =``
            while (c <= 10){
                var item = document.createElement('option')
                item.text =`${num} X ${c} = ${num*c}`
                item.value =`tab${c}`
                tab.appendChild(item)
                c++
            }
        }
    }