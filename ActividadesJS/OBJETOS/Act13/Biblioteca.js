// a) Creación de objetos y arrays

// Define el objeto Libro
class Libro {
    constructor(titulo, autor, anioPublicacion, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.anioPublicacion = anioPublicacion;
      this.genero = genero;
    }
  
    // Método para imprimir un resumen del libro
    imprimirResumen() {
      console.log("Título: ", this.titulo);
      console.log("Autor: ", this.autor);
      console.log("Año de publicación: ", this.anioPublicacion);
      console.log("Género: ", this.genero);
    }

    imprimirTitulo() {
        console.log("Título: ", this.titulo);
      }
  }
  
  // Crea un array llamado biblioteca que contiene varios objetos Libro
  const biblioteca = [
    new Libro("El señor de los anillos", "J.R.R. Tolkien", 1954, "Fantasía"),
    new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997, "Fantasía"),
    new Libro("El código da Vinci", "Dan Brown", 2003, "Suspense"),
    new Libro("1984", "George Orwell", 1949, "Distopia"),
    new Libro("El principito", "Antoine de Saint-Exupéry", 1943, "Infantil"),
    new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "Realismo mágico"),
  ];
  
  // b) Uso de Métodos de Array
  
  // Listar Todos los Libros
  biblioteca.forEach((libro) => libro.imprimirResumen());
  
  // Buscar Libros por Autor
  const LibrosAutor = biblioteca.filter((libro) => libro.autor === "J.R.R. Tolkien");
  console.log("Libros de J.R.R. Tolkien:");
  LibrosAutor.forEach((libro) => libro.imprimirTitulo());
  
  // Encontrar el Libro Más Antiguo
  const libroMasAntiguo = biblioteca.reduce((libroActual, libroSiguiente) => {
    return libroActual.anioPublicacion < libroSiguiente.anioPublicacion ? libroActual : libroSiguiente;
  }, biblioteca[0]);
  console.log("Libro más antiguo:");
  libroMasAntiguo.imprimirTitulo();
  
  
  // Mostrar Información con Object.keys y Object.values


// Mostrar Información con Object.keys y Object.values
const titulosDeLosLibros = biblioteca.map((libro) => libro.titulo);
const autoresDeLosLibros = biblioteca.map((libro) => libro.autor);


const aniosDePublicacion = biblioteca.map((libro) => libro.anioPublicacion);
const generos = biblioteca.map((libro) => libro.genero);

// Combinar Información
const informacion = [...titulosDeLosLibros, ...autoresDeLosLibros, ...aniosDePublicacion, ...generos];

console.log("Información de los libros: ", informacion);