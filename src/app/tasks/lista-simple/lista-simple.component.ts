import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'dvt-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit, OnDestroy {

  aTareas: Array<Task>;
  oTarea: Task;

  constructor() { }

  ngOnInit() {
    const store = JSON.parse(localStorage.getItem('tasks'));
    this.aTareas = (store) ? store : [];
    
    this.oTarea = new Task();
  }

  ngOnDestroy() {
    const store = JSON.stringify(this.aTareas);
    localStorage.setItem('tasks', store)
  }

  addTask() {
    this.aTareas.push(Object.assign({}, this.oTarea));
    console.log(this.aTareas);
  }

  deleteTask(i) {
    this.aTareas.splice(i, 1)
  }

  private setStore() {

  }
}
