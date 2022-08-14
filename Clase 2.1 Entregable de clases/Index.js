class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = "Luciano";
      this.apellido = "Pascuali";
      this.libros = [];
      this.mascotas = [];
    }
    getFullName() {
      return `${this.nombre} ${this.apellido}`
    }
    addMascota(mascota) {
      this.mascotas.push(mascota);
    }
    countMascotas() {
      return `${this.mascotas.length}`
    }
    addBook(nombre, autor) {
      this.libros.push({ nombre, autor });
    }
    getBooks() {
      return this.libros.map((libro) => `${libro.nombre} `);
    }
  }
  
  const usuario = new Usuario("Luciano", "Pascuali", [], []);
  
  
  usuario.addMascota("Pepe");
  usuario.addMascota("Lala");
  usuario.addMascota("Mishi");
  
  
  usuario.addBook("Padre rico Padre pobre", "Robert Kiyosaki");
  usuario.addBook("Napoleon", "André Castelot");
  usuario.addBook("La llave del aguila","Elisa Roldan")
  
  console.log("El nombre completo es :");
  console.log(usuario.getFullName());
  console.log("Estos son los libros del usuario :");
  console.log((usuario.getBooks()));
  console.log("Cantidad de mascotas:");
  console.log(usuario.countMascotas());
  console.log("Nombres de sus mascotas:");
  console.log(usuario.mascotas);
    