import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, ListaComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
