// Un caso de uso de la media ponderada ees el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes "créditos"
//Esta es la fórmula:
// [(n1*c1)+(n2*c2)+(n3*c3)]  / (c1 + c2 + c3)
//Donde
//n = Note
//c = Credit

const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
]
//Multiplicar cada número de la lista por su peso
//Vamos a usar de nuevo el método map de los array. Crearemos un nuevo arreglo de solo números a partir de multiplicar cada nota con su créditos.
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit; 
});

// Sumar tosos los elementos del arreglo de elementos multiplicado por su peso
//Vamos a usar de nuevo the method reduce de los arrays.

//Crearemos una nueva variable notesWithCredit que tenga como resultado la suma de todos los elementos del arreglo sumOfNotesWithCredit. Recuerda que la función reduce recibe una función con dos parámetros: el valor acumulado (que para evitar errores debemos inicializar con 0 ) y el nuevo elemento de los arrays. 

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function( sum = 0, newVa1){
        return sum + newVa1;
    }
);

//. Sumar todos los peasos (créditos)
// Si otra vez map y reduce. Vamos a crear un nuevo arreglo credits únicamnete con los créditos de cada materia y otra nueva variable sumOfCredits que recorra el arreglo credits y sume sus eleentos.

const credits = notes.map(function(noteObject){
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVa1) {
        return sum + newVa1;
    }
);

//.Hacer la división entre ambas "sumas"
//Lo último que nos falta es dividir nuestra variable sumOfNotesWithCredit sobre la variable sumOf Credits.

const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

//En este caso, el promedio ponderado de una nota de 10 con crédito de 2, otra nota con un crédito de 5 y una última nota de 7 con créditos de 5 nos da como resultado 7.916

// la media aritmética sin tener en cuenta el peso de cada nota hábría sido 8.333.