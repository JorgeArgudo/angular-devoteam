import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// import { TasksComponent } from './tasks/tasks.component';
// import { BlogComponent } from './blog/blog.component';
// import { CursosComponent } from './cursos/cursos.component';
import { LibrosComponent } from './libros/libros.component';
// import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'tasks', component: TasksComponent },
  { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
  // { path: 'blog', component: BlogComponent },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  // { path: 'cursos', component: CursosComponent },
  { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
  { path: 'libros', component: LibrosComponent },
  // { path: 'users', component: UsersComponent },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
