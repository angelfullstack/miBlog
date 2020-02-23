import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit() {
  }

  async borrarLS(){
    await this.postService.resetBlog();

  }

}
