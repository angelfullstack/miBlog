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
    imagen: string,
    texto: string,
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = new Date();
    this.categoria = categoria;
    this.imagen = imagen;
    this.texto = texto;
  }
}
