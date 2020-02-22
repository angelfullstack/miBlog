export class Post {
  id: number;
  titulo: string;
  autor: string;
  fecha: Date;
  categoria: string;
  imagen: string;
  texto: string;
  constructor(
    id: number,
    titulo: string,
    autor: string,
    categoria: string,
    texto: string,
    imagen: string,
    fecha: Date = new Date()
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.categoria = categoria;
    this.texto = texto;
    this.imagen = imagen;
    this.fecha = fecha;
  }
}

