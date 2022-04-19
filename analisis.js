//Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista
    }


// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad; 
    }
}



// Mediana General
const salariosVen = venezuela.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosVenSorted = salariosVen.sort(
    function(salarioA, salarioB) {
        return salarioA - salarioB;
    }
);


const medianaGeneralVen = medianaSalarios(salariosVenSorted)

// Mediana del top 10%
// se una porcentaje ( 120 * (100 - 15 -> 85) ) / 100

const spliceStart = (salariosVenSorted.length * 90) / 100;
const spliceCount = salariosVenSorted.length - spliceStart;

const salariosVenTop10 = salariosVenSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Ven = medianaSalarios(salariosVenTop10)

 console.log({
    medianaGeneralVen,
    medianaTop10Ven,
 });