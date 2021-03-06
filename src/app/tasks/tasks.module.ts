import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { FormsModule } from '@angular/forms';
import { ListaPlusComponent } from './lista-plus/lista-plus.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ImportantDirective } from './important.directive';

@NgModule({
  declarations: [
    TasksComponent,
    ListaSimpleComponent,
    ListaPlusComponent,
    TaskComponent,
    NewTaskComponent,
    ImportantDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
