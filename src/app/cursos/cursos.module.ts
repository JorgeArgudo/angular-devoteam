import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [CursosComponent, FormTdComponent, FormMdComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
