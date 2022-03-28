// const precioOriginal = 120;
// const descuentoss = 18;


// function calcularPrecioConDescuento(precio, descuento) {
//     const porcentajePrecioconDescuento = 100 - descuento; 
//     const precioConDescuento = (precio * porcentajePrecioconDescuento) / 100;
    
//     return precioConDescuento;
// }

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice").value;
    //const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount").value;
    //const discountValue = inputDiscount.value;

    //const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

    var calcularPorcentajeAPagar = 100 - inputDiscount
    var montoAPagar = (inputPrice * calcularPorcentajeAPagar) / 100

    const resultP =  document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + montoAPagar;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioconDescuento,
//     precioConDescuento,
// });

