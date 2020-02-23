import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postName: string;
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private router: Router) {
    this.post = new Post(undefined, '', '', '', '', '');
    this.postName = '';
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => { this.postName = params.postName; })
    console.log(this.postName);
    this.postName = this.postName.replace(/-/g, ' ');
    this.post = await this.postService.getPost(this.postName);
  }

  async manejarBorrar(id) {
    console.log(id);
    await this.postService.deletePost(id);
    this.router.navigate(['/blog']);
  }

}
