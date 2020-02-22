import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[];
  id: number;

  constructor() {
    if (localStorage.getItem('posts')) {
      this.arrPosts = JSON.parse(localStorage.getItem('posts'))
    } else {
      this.arrPosts = [
        new Post(1, 'Titulo1', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          'https://picsum.photos/id/1/600/600',
          new Date(2020, 2, 21, 13, 42)),
        new Post(2, 'Titulo2', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          'https://picsum.photos/id/2/600/600',
          new Date(2020, 2, 21, 13, 42)),
        new Post(3, 'Titulo3', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          'https://picsum.photos/id/3/600/600',
          new Date(2020, 2, 21, 13, 42)),
        new Post(4, 'Titulo4', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          'https://picsum.photos/id/4/600/600',
          new Date(2020, 2, 21, 13, 42)),
        new Post(5, 'Titulo5', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          'https://picsum.photos/id/5/600/600',
          new Date(`2020-02-21T13:42`)),
      ];
    }
    this.id = 6;
  }


  getAll(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts);
    })
    return prom;

  }

  getByCategory(category: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      if (category !== '') {
        const arrFiltrado = this.arrPosts.filter(post =>
          post.categoria === category);
        resolve(arrFiltrado)
      } else {
        resolve(this.arrPosts)
      }
    })
    return prom;

  }

  addPost(post: any): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const nuevoPost: Post = {
        id: this.id,
        titulo: post.titulo,
        autor: post.autor,
        categoria: post.categoria,
        texto: post.texto,
        imagen: ((post.imagen === null) ? 'https://picsum.photos/600/600' : post.imagen),
        fecha: new Date()
      }
      console.log(nuevoPost);
      this.arrPosts.unshift(nuevoPost);
      console.log(this.arrPosts)
      resolve(this.arrPosts);
    })
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    this.id++;
    return prom;

  }

  deletePost(id) {
    console.log(id)
    const prom = new Promise<Post[]>((resolve, reject) => {
      this.arrPosts.splice(this.arrPosts.findIndex(post => post.id === id),1);
      resolve(this.arrPosts);
    })
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    return prom;
  }
}
/*
   id: number,
    titulo: string,
    autor: string,
    categoria: string,
    texto: string,
    imagen: string = 'https://picsum.photos/200/300',
    fecha: Date = new Date()

*/
