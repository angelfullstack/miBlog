export class Post {
  id: number;
  titulo: number;
  texto: string;
  autor: string;
  fecha: Date;
  categoria: string;
  constructor(
    id: number,
    titulo: number,
    texto: string,
    autor: string,
    fecha: Date,
    categoria: string, ) {
    this.id = id;
    this.titulo = titulo;
    this.texto = texto;
    this.autor = autor;
    this.fecha = new Date();
    this.categoria = categoria;
  }
}
