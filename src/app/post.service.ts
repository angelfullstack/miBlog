import { Injectable } from '@angular/core';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      new Post(1, 'Titulo1', 'Jon Doe', 'categoria1',
        'https://picsum.photos/id/237/200/300',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?'),
      new Post(2, 'Titulo1', 'Jon Doe', 'categoria1',
        'https://picsum.photos/id/237/200/300',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?'),
      new Post(3, 'Titulo1', 'Jon Doe', 'categoria1',
        'https://picsum.photos/id/237/200/300',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?'),
      new Post(4, 'Titulo1', 'Jon Doe', 'categoria1',
        'https://picsum.photos/id/237/200/300',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?'),
      new Post(5, 'Titulo1', 'Jon Doe', 'categoria1',
        'https://picsum.photos/id/237/200/300',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis soluta cumque quasi laboriosam tempore similique exercitationem molestiae magnam, perspiciatis dicta, neque sint. Laboriosam dicta nisi esse cupiditate maiores officia, quibusdam cumque! Voluptatem cupiditate aut rem molestiae quis cumque eos eius vel earum maxime sequi ex dolor numquam sunt vero et veniam, ipsum libero! Dolorum voluptas, rerum labore modi aliquam architecto eaque impedit officiis libero nam, totam asperiores mollitia magni voluptate? Reprehenderit enim totam dolorem, voluptatem laboriosam temporibus corporis deleniti. Culpa consequatur suscipit corrupti inventore placeat vero laudantium debitis facilis consequuntur delectus nulla, commodi illo, adipisci provident labore doloremque eius qui. Dolorem quam voluptates eaque enim in et, hic exercitationem reiciendis optio expedita, cum ex ab voluptatem sint nulla magni tempora officia harum error. Enim ex sint exercitationem fugit delectus nulla dignissimos, vel, nesciunt sunt omnis, quibusdam reprehenderit corrupti ipsa cum?'),
    ]
  }

  addPost(post){

  }

  getAll(){

  }

  getAllByCategory(category){

  }

}
/*
    id: number,
    titulo: number,
    autor: string,
    categoria: string,
    imagen:string;
    texto: string,

*/
