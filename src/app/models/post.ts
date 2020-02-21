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
    imagen: string = 'https://picsum.photos/200/300',
    fecha: Date = new Date()
  ) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = fecha;
    this.categoria = categoria;
    this.texto = texto;
    this.imagen = imagen;
  }
}
