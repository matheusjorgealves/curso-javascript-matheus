function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var resptxt = window.document.getElementById('txtnasc')
    var resp = Number(resptxt.value)
    var res = window.document.getElementById('res')
    if (resp.length == 0 || resp > ano) {
        window.alert('[Erro] verifique os dados e tente novamente!')       
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - resp
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
    }
    }