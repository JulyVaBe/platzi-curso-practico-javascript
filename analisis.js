//Nuevo array que únicamente tenga los salarios de colombia
//Mediana General
const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

//Nuevo array que ordene de menor a mayor los salarios
const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

//Funciones helpers o utils
function esPar(numerito){
    //if(numerito % 2 === 0){
    //    return true;
    //}
    //else{
    //    return false;
    //}

    //El if-else que se encuentra arriba es el equivalente de esta instrucción:
    return (numerito % 2 === 0);
}

//Funciones helpers o utils
function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }
    else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart, 
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(
    medianaGeneralCol,
    medianaTop10Col,
);