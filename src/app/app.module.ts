import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { BlogComponent } from './blog/blog.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PostComponent } from './post/post.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoPostComponent,
    BlogComponent,
    NavMenuComponent,
    PostComponent,
    FaqComponent,
    HomeComponent,
    FooterComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
