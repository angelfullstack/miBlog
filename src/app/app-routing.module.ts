import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:postName', component: PostComponent },
  { path: 'nuevo', component: NuevoPostComponent },
  { path: '**', redirectTo: '/blog' }//404 si da tiempo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
