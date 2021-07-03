const lista1 = [
    100,
    200,
    300,
    500
];

function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    //Alternativa a los ciclos
    //Métodos dentro de los array para iterar por cada uno de los elementos.
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}