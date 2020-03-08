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
      contenido: new FormControl('', [
        Validators.required,
      ]),
    });
    this.textoHTML = '';
  }

  ngOnInit() {
  }

  async manejarNuevoPost() {
    console.log(this.nuevoPostForm.value);
    try {
      await this.postService.create(this.nuevoPostForm.value);
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
