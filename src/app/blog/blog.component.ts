import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  arrPosts: Post[];
  constructor(private postService: PostService) {
  }

  async ngOnInit() {
    this.arrPosts = await this.postService.getAll();
    console.log(this.arrPosts)
  }

  async recogerCategoria($event) {
    const category = $event.target.value;
    this.arrPosts = await this.postService.getByCategory(category);

  }
}
