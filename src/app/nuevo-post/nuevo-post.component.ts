import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  textoHTML: string;
  nuevoPostForm: FormGroup;
  constructor(private postService: PostService) {
    this.nuevoPostForm = new FormGroup({
      titulo: new FormControl(),
      autor: new FormControl(),
      categoria: new FormControl(),
      imagen: new FormControl(),
      texto: new FormControl(),
      textoHTML: new FormControl(),
    });
    this.textoHTML = '';
  }

  ngOnInit() {
  }

  manejarNuevoPost() {
    this.postService.addPost(this.nuevoPostForm.value);


  }



}
/* id: number;
  titulo: string;
  autor: string;
  fecha: Date;
  categoria: string;
  imagen: string;
  texto: string; */
