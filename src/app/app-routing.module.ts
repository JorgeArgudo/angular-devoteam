import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { BlogComponent } from './blog/blog.component';
import { CursosComponent } from './cursos/cursos.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
