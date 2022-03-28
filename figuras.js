// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadradon miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//perimetroCuadrado()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado +"cm");

function areaCuadrado(lado){
    return lado * lado;
}
//areaCuadrado()

//console.log("El área del cuadrado es: " + areaCuadrado +"cm^2");
//console.groupEnd();

// Código del triángulo
//console.group("Ttriángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triágulo miden: " 
//     + ladoTriangulo1
//     + "cm,"
//     + ladoTriangulo2
//     + "cm," 
//     + baseTriangulo 
//     + "cm"
// );

//const alturaTriangulo = 5.5;
//console.log("La altura de un triángulo es de: " + alturaTriangulo +"cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
    
} 

//creada por mi para cumplir con ejercicio video 8
function perimetroTriangulox(base){
    return base * 3;
    
}

//console.log("El perímetro de un triángulo es: " + perimetroTriangulo +"cm");

//const areaTriangulo =  (baseTriangulo * alturaTriangulo) / 2;
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// Esta función noooooooo essss correcta 
function AreaTriangulox (base){
    const alturax = Math.sqrt(base * 3) 
    return  altura / 2;
}
//console.log("El área de un triángulo es: " + areaTriangulo +"cm");

//console.groupEnd();

// Código del círculo
//console.group("Círculos")
// Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo +"cm");
function diametroCirculo(radio){
    return radio * 2;
}
//Circunferencia
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es: " + diametroCirculo +"cm");

const PI = Math.PI;
console.log("PI es: " + PI);

//const perimetroCirculo =  diametroCirculo * PI;
//console.log("El perímetro de un círculo es: " + perimetroCirculo +"cm");
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Ejercicio viedeo 8 para sacar ejercicio

//const areaCirculo =  (radioCirculo * radioCirculo) * PI;
//console.log("El área de un círculo es: " + areaCirculo +"cm");
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

function perimetroCirculox(radio){
    return (radio * 2) * PI
}
console.groupEnd();


//Aquí interactuamos con el HTML 
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado (value);
    alert(perimetro);
}

// Para el tríangulo (actualmente no están correctas estos calculos 18/03/2022)
function calcularPerimetroTrianguloEquilatero() {
    const input = document.getElementById("InputrianguloEquilatero");
    const value = input.value;

    const perimetro = perimetroTriangulox(value)
    alert(perimetro);
}
function calcularAreaTrianguloEquilatero() {
    const input = document.getElementById("InputrianguloEquilatero");
    const value = input.value;

    const area = AreaTriangulox(value)
    alert(area);
}


// funciones para el círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetrox = perimetroCirculox(value)
    alert(perimetrox);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areax = areaCirculo(value)
    alert(areax);
}

// Ejercicio del punto 09 platzi
//function ladoinclinadoAlCuadrado(c){
    //return c * c;
//}
// function baseEntreDos(b){
//     return b / 2;
// }
// function baseEntredosAlcuadrado(baseEntreDos){
//     return baseEntreDos * baseEntreDoss;
// }
// function restasDeCyB(){
//     return ladoinclinadoAlCuadrado - baseEntredosAlcuadrado;
// }
    
function calcularAltura(){
    const input = document.getElementById("InputladoInclinado");
    const altura = input.value;
    
     const input2 = document.getElementById("InputrianguloBase");
     const base = input2.value;



     const b = value2/2;
     const c = value * value

     const resultado = Math. sqrt(value);

    const altura = resultado; 
    alert (altura);
    
}


