// Función para aplicar descuentos
function aplicarDescuento(precioTotal) {
    if (precioTotal > 5) {
      return precioTotal * 0.9;
    } else {
      return precioTotal;
    }
  }
  
  // Función para calcular el precio
  function calcularPrecio(cantidad, precioUnidad) {
    return cantidad * precioUnidad;
  }
  
  // Reescribir las funciones calcularPrecio y aplicarDescuento como funciones flecha
  const calcularPrecioFlecha = (cantidad, precioUnidad) => cantidad * precioUnidad;
  const aplicarDescuentoFlecha = precioTotal => {
    if (precioTotal > 5) {
      return precioTotal * 0.9;
    } else {
      return precioTotal;
    }
  };
  
  // Función para personalizar helados
  function personalizarHelado(sabor) {
    console.log("Creando un helado de " + sabor);
  }
  
  // Función para saludar
  function saludarCliente() {
    console.log("Hola, bienvenido");
  }
  
  // Función precio final
  function precioFinal() {
    const cantidadHelados = 10;
    const precioUnidad = 20;
    const precioTotal = aplicarDescuentoFlecha(calcularPrecioFlecha(cantidadHelados, precioUnidad));
    saludarCliente();
    console.log("El total de su compra fue: " + precioTotal);
  }
  
  precioFinal();
  