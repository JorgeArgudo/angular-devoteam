import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { TasksModule } from './tasks/tasks.module';
import { AboutModule } from './about/about.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { BlogModule } from './blog/blog.module';
import { CursosModule } from './cursos/cursos.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LibrosModule } from './libros/libros.module';
import { HttpClientModule } from '@angular/common/http';
// import { CursosComponent } from './cursos/cursos.component';

// the second parameter 'es' is optional
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    // CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    HomeModule,
    TasksModule,
    AboutModule,
    BlogModule,
    CursosModule,
    LibrosModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
