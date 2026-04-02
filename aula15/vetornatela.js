    var valores = [9, 3, 12, 15, 4, 1, 50]
    valores.sort()

    /*
    for (var pos = 0; c < valores.length; c++){
        console.log(` A posição ${pos} tem o valor ${valores[c]}`)
    }
    */
   
    for (var pos in valores){
        console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
    }