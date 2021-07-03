//CÓDIGO DEL CUADRADO
//Comando para agrupar mensajes
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm.");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm.");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es " + areaCuadrado + "cm2.");
console.groupEnd();

//CÓDIGO DEL TRIÁNGULO
console.group("Triángulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log("Los lados del triángulo miden " + ladoTriangulo1+ " cm, " + ladoTriangulo2 + " cm y " + baseTriangulo + " cm.");

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo mide " + alturaTriangulo + " cm.");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del triángulo es " + perimetroTriangulo + " cm.");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//console.log("El área del triángulo es " + areaTriangulo + " cm2.");
console.groupEnd();

//CÓDIGO DEL CÍRCULO
console.group("Círculo");
//const radioCirculo = 4;
//console.log("Valor del radio: " + radioCirculo + " cm.");

function diametroCirculo(radio) {
    return radio * 2;
}
//console.log("Valor del diámetro: " + diametroCirculo + " cm.");

const PI = Math.PI;
console.log("Valor de PI: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("El perímetro del círculo es " + perimetroCirculo + " cm.");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//console.log("La área del círculo es " + areaCirculo + " cm2.");
console.groupEnd();

//Interacción con HTML
//Para el CUADRADO:
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

//Para el TRIANGULO:
// function calcularPerimetroTriangulo() {
//     const input = document.getElementById("Lado1");
//     const lado1 = input.value;
//     const input = document.getElementById("Lado2");
//     const lado2 = input.value;
//     const input = document.getElementById("Base");
//     const base = input.value;
//     const perimetro = perimetroTriangulo(lado1, lado2, base);
//     alert(perimetro);
// }

// function calcularAreaTriangulo() {
//     const input = document.getElementById("Base");
//     const base = input.value;
//     const input = document.getElementById("Altura");
//     const altura = input.value;
//     const area = areaTriangulo(base, altura);
//     alert(area);
// }

// //Para el CIRCULO
// function calcularPerimetroCirculo() {
//     const input = document.getElementById("InputRadio");
//     const radio = input.value;
//     const perimetro = perimetroCirculo(radio);
//     alert(perimetro);
// }

// function calcularAreaCirculo() {
//     const input = document.getElementById("InputRadio");
//     const radio = input.value;
//     const area = areaCirculo(radio);
//     alert(area);
// }

//Reto: matemáticas con JavaScript
function calcularAlturaTriangulo(lado1, lado2, lado3){
    //Verificar que se trata de un triángulo isósceles
    if(lado1 === lado2 && lado3 != lado1 || lado2 === lado3 && lado1 != lado2 || lado1 === lado3 && lado2 != lado1){
        //Conocer qué dos lados son iguales y el restante
        if(lado1 === lado2){//Lado 3 es diferente (base)
            return Math.sqrt((lado1 * lado1) - ((lado3 * lado3) / 4));
        }
        if(lado1 === lado3){//Lado 2 es diferente (base)
            return Math.sqrt((lado1 * lado1) - ((lado2 * lado2) / 4));
        }
        if(lado2 === lado3){//Lado 1 es diferente (base)
            return Math.sqrt((lado2 * lado2) - ((lado1 * lado1) / 4));
        }
    }
    else{
        console.log("Los lados no corresponden a los de un triángulo isósceles");
    }
}