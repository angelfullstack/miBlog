import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { Router} from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrPosts: Post[];
  constructor(private postService: PostService, private router:Router) {
  }

  async ngOnInit() {
    this.arrPosts = await this.postService.getAll();

  }

  async recogerCategoria($event) {
    const category = $event.target.value;
    this.arrPosts = await this.postService.getByCategory(category);
  }

  async manejarBorrar(id) {
    console.log(id);
    this.arrPosts = await this.postService.deletePost(id);
  }

  manejarEntrar(titulo) {
    const tituloUrl = titulo.replace(/ /g, '-');
    console.log(tituloUrl);
    this.router.navigate(['/blog', tituloUrl]);
  }
}
