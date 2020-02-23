/*Implementar area de usuario
boton resetear blog que borra local storage y repone posts por defecto
verificar en formulario si nombre de post existe */
import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[];
  id: number;

  constructor() {

    //Se comprueba si existe la entrada posts y si no está vacía en localStorage
    if (localStorage.getItem('posts') && JSON.parse(localStorage.getItem('posts')).length !== 0) {
      this.arrPosts = JSON.parse(localStorage.getItem('posts'))
    } else {
      this.arrPosts = [
        new Post(14, '¿Render o real?', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/1.jpg', new Date(2020, 2, 21, 13, 42)),
        new Post(13, 'Paredes chulas', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/2.jpg', new Date(2020, 2, 21, 13, 42)),
        new Post(12, 'Esquinas', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/3.jpg', new Date(2020, 2, 21, 13, 42)),
        new Post(11, 'Otro punto de vista', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/4.jpg', new Date(2020, 2, 21, 13, 42)),
        new Post(10, 'Perspectivas profundas', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/5.jpg', new Date(`2020-02-21T13:42`)),
        new Post(9, 'Luz y color en la hora dorada', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/6.jpg', new Date(`2020-02-21T13:42`)),
        new Post(8, 'Luz y color en la hora dorada II', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/7.jpg', new Date(`2020-02-21T13:42`)),
        new Post(7, 'Lo convexo desde dentro', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/8.jpg', new Date(`2020-02-21T13:42`)),
        new Post(6, 'Reflejos reflejados', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/9.jpg', new Date(`2020-02-21T13:42`)),
        new Post(5, 'La cornisa', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/10.jpg', new Date(`2020-02-21T13:42`)),
        new Post(4, 'Abstracción digital', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/11.jpg', new Date(`2020-02-21T13:42`)),
        new Post(3, 'Nuevas técnicas', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/12.jpg', new Date(`2020-02-21T13:42`)),
        new Post(2, 'Vidrieras contemporáneas', 'Jon Doe', 'categoria1',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/13.jpg', new Date(`2020-02-21T13:42`)),
        new Post(1, 'Espirales y otras cosas', 'Jon Doe', 'categoria2',
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?',
          '../assets/images/14.jpg', new Date(`2020-02-21T13:42`)),
      ];
    }

    //Las ID se almacenan en el storage para que cada vez que se refresque se conserve el contador de las ID
    if (localStorage.getItem('lastId')) {
      this.id = JSON.parse(localStorage.getItem('lastId'))
    } else {
      //Si no hay lastID en LS se usa la siguiente posición de arrPosts
      this.id = this.arrPosts.length + 1;
    }
  }


  getAll(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      console.log(this.arrPosts)
      resolve(this.arrPosts);
    });
    return prom;
  }

  getPosts(totalPosts: number): Promise<Post[]> {
    console.log(totalPosts)
    const prom = new Promise<Post[]>((resolve, reject) => {
      let posts: Post[] = [];
      if (totalPosts === 0 || totalPosts === undefined) {
        posts = this.arrPosts;
      } else {
        posts = this.arrPosts.slice(0, totalPosts);
      }
      console.log(this.arrPosts)
      resolve(posts);
    });
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
    });
    return prom;
  }

  addPost(post: Post): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const nuevoPost: Post = {
        id: this.id,
        titulo: post.titulo,
        autor: post.autor,
        categoria: post.categoria,
        texto: post.texto,
        imagen: ((post.imagen === null || post.imagen === '') ? 'https://picsum.photos/600/600' : post.imagen),
        fecha: new Date()
      };
      this.arrPosts.unshift(nuevoPost);
      resolve(this.arrPosts);
    })
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    this.id++;
    localStorage.setItem('lastId', JSON.stringify(this.id));
    return prom;

  }

  getPost(name): Promise<Post> {
    const prom = new Promise<Post>((resolve, reject) => {
      const thisPost = this.arrPosts.find(post => post.titulo === name);
      console.log(thisPost);
      resolve(thisPost);
    });
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    return prom;
  }

  deletePost(id) {
    const prom = new Promise<Post[]>((resolve, reject) => {
      this.arrPosts.splice(this.arrPosts.findIndex(post => post.id === id), 1);
      console.log('Borrado post con id ' + id);
      resolve(this.arrPosts);
    });
    localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    return prom;
  }

  resetBlog() {
    const prom = new Promise((resolve, reject) => {

      localStorage.clear();
      resolve(console.log('Blog reiniciado'))
    });
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
