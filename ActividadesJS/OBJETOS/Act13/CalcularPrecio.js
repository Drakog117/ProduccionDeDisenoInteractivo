
// function calcularPrecio(cantidad, precioUnidad) {
//     return cantidad * precioUnidad;
//   }
  
//   function aplicarDescuento(precioTotal) {
//     if (cantidad >= 5) {
//       return precioTotal * 0.9;
//     } else {
//       return precioTotal;
//     }
//   }
  
//flechas
const aplicarDescuento = precioTotal => {
    if (cantidad >= 5) {
      return precioTotal * 0.9;
    } else {
      return precioTotal;
    }
  };
  
  const Precio = (cantidad, precioUnidad) => cantidad * precioUnidad;
  
  const personalizarHelado = sabor => `Creando un helado de ${sabor}`;
  
  const saludarCliente = () => `Hola, bienvenido a la heladería!`;
  
  const precioFinal = (cantidad, precioUnidad) => {
    const precioTotal = aplicarDescuento(Precio(cantidad, precioUnidad));
    console.log(saludarCliente());
    console.log(`El total de su compra fue: ${precioTotal}`);
    return precioTotal;
  };
  
  const cantidad = 20;
  const precioUnidad = 2;
  
  const resultado = precioFinal(cantidad, precioUnidad);
  
  console.log(resultado); 
  