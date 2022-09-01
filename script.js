//Declaro las variables principales

let iva = 0.21
let rg = 0.45
let impDigital = 0.08

//Selecciono el div donde pondre el resultado
const muestraResultado = document.getElementById("muestraResultado")
async function Datos() {

//Traigo el valor del dolar oficial de Criptoya y lo almaceno 
const response = await fetch("https://criptoya.com/api/dolar")
const inf = await response.json()

const dolarOficial = inf.oficial

const casillero = document.getElementById("casillero")


casillero.addEventListener('submit', (event) => {
event.preventDefault()
const valorEnDolar = document.getElementById("valorEnDolar").value


//Algunos calculos que ayudan a mostar luego los resultados
const tax = iva + rg + impDigital + 1
const precioConImpo = (tax * valorEnDolar * dolarOficial).toFixed(2);
const preciosinImpo = valorEnDolar * dolarOficial;
    
const ivae = (preciosinImpo * iva).toFixed(2);
const impDigitale = (preciosinImpo * impDigital).toFixed(2);
const rge = (preciosinImpo * rg).toFixed(2);

//Lo que se va a mostrar
const mostrarData = () => {
    muestraResultado.innerHTML = ''
    muestraResultado.innerHTML = `
    <h5>Costo en USD: $${valorEnDolar}</h5>
    <h4>Costo en ARS sin Impuestos: $${preciosinImpo}</h4>
    <h4>Impuesto País (21%): $${ivae}</h4>
    <h4>Impuesto Digital (8%): $${impDigitale}</h4>
    <h4>Impuesto Ganancias (45%): $${rge}</h4>
    <h5>precio final: $${precioConImpo}ARS</h5>`
    }
    mostrarData()
    casillero.reset()
})}


//se ejectua
Datos()


//Toastify Alert en boton Eliminar
botonE = document.getElementById("botonE")
botonE.addEventListener("click", () =>{
    Toastify({
        text: "Valor Eliminado🎮",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#090748 40%",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

