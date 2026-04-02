    function fatorial(n) {
        let fat = 1
        for (var c = n;c > 1;c--){ // a 'var c' vai perder '1' a cada ciclo, e inicialmente terá o valor de 'n' (valor que será calculado seu vetorial)
            fat *= c // a 'var fat' vai ao final de cada ciclo receber ela mesma multiplicada pela 'var c' EX: FAT = 1(ELA MESMA) X c(5); 5(ela mesma) X c(4); 20(ela mesma) X c(3); ... 
        }
        return fat
    }
    console.log(fatorial(5))
    // programa desenvolvido para calcular o valor vetorial de determinado número