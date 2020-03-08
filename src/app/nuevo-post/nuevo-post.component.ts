import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  textoHTML: string;
  nuevoPostForm: FormGroup;
  constructor(private postService: PostService, private router: Router) {
    this.nuevoPostForm = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
      ]),
      autor: new FormControl(''),
      categoria: new FormControl('', [
        Validators.required,
      ]),
      imagen: new FormControl(''),
      texto: new FormControl('', [
        Validators.required,
      ]),
      textoHTML: new FormControl(),
    });
    this.textoHTML = '';
  }

  ngOnInit() {
  }

  async manejarNuevoPost() {
    try {
      await this.postService.addPost(this.nuevoPostForm.value);
      this.router.navigate(['/blog']);
    } catch (err) {
      console.log('El error es:' + err);
    }


  }



}
/* id: number;
  titulo: string;
  autor: string;
  fecha: Date;
  categoria: string;
  imagen: string;
  texto: string; */
