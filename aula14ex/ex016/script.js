    function contar(){
        let ini = window.document.getElementById('inicio')
        let fim = window.document.getElementById('fim')
        let passo = window.document.getElementById('passo')
        let res = window.document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            window.alert('[ERRO:] faltam dados!')
            res.innerHTML =`Impossivel contar`
        } else {
            res.innerHTML =`Contando: <br>`
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            if (p <= 0){
                window.alert('Passo inválido! considere passo 1')
                p = 1
            }
            if (i < f){
                for (let c = i;c <= f;c += p) {
                    res.innerHTML +=` ${c} \u{1F449}`
                }
            } else {
                for (let c = i;c >= f; c -= p){
                    res.innerHTML +=` ${c} \u{1F449}`
                }         
            }
            res.innerHTML += ` \u{1F3C1}`
        }
    }