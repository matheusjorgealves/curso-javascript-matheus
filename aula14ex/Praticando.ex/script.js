    function tabuada(){

        var num = window.document.getElementById('numero')
        var tab = window.document.getElementById('tab')

        if (num.value.length == 0){
            window.alert(`[ERRO] faltam dados!`)
        } else {
            var n = Number(num.value)
            var c = 1
            tab.innerHTML =``

            while (c <= 10){
                var item = window.document.createElement('option')
                item.text =`${n} X ${c} = ${n*c}`
                item.value =`tab${c}`
                tab.appendChild(item)
                c++
            }
        }
    }