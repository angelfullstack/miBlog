import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() totalPosts: number;
  @Input() nombreSeccion:string;
  arrPosts: Post[];
  constructor(private postService: PostService, private router: Router) {
    if(this.totalPosts===undefined){
      this.totalPosts=0;
    }
    if (this.nombreSeccion === undefined) {
      this.nombreSeccion = 'Todos los posts';
    }
  }

  async ngOnInit() {
    this.arrPosts = await this.postService.getPosts(this.totalPosts);

  }

  async recogerCategoria($event) {
    const category = $event.target.value;
    this.arrPosts = await this.postService.getByCategory(category);
  }



  manejarEntrar(titulo) {
    const tituloUrl = titulo.replace(/ /g, '-');
    console.log(tituloUrl);
    this.router.navigate(['/blog', tituloUrl]);
  }
}
