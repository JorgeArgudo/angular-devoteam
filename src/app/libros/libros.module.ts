import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrosByServiceComponent } from './libros-by-service/libros-by-service.component';

@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosGoogleComponent, LibrosByServiceComponent],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class LibrosModule { }
