export class Post {
  id: number;
  titulo: string;
  autor: string;
  fecha: Date;
  categoria: string;
  imagen: string;
  contenido: string;
  constructor(
    id: number,
    titulo: string,
    autor: string,
    categoria: string,
    contenido: string,
    imagen: string,
    fecha: Date = new Date()
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.contenido = contenido;
    this.imagen = imagen;
    this.fecha = fecha;
  }
}

