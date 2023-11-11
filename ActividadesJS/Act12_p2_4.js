// Declaración de variables
let numero = 7;
let numeroDeIntento = 1;

// Verificación del número
let esValido = numero >= 1 && numero <= 10;

while (!esValido) {
  console.log("El usuario ingresó el número " + numero + " en su intento " + numeroDeIntento);
  numero = prompt("Ingrese un número entre 1 y 10: ");
  numeroDeIntento++;

  esValido = numero >= 1 && numero <= 10;
}

console.log("El número ingresado es correcto.");
