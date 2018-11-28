import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'dvt-lista-plus',
  templateUrl: './lista-plus.component.html',
  styleUrls: ['./lista-plus.component.css']
})
export class ListaPlusComponent implements OnInit, OnDestroy {

  aTareas: Array<Task>;

  constructor() { }

  ngOnInit() {
    const store = JSON.parse(localStorage.getItem('tasksPlus'));
    this.aTareas = (store) ? store : [];
  }

  ngOnDestroy() {
    const store = JSON.stringify(this.aTareas);
    localStorage.setItem('tasksPlus', store);
  }

  addTask(tarea) {
    this.aTareas.push(tarea);
    console.log(this.aTareas);
  }

  deleteTask(i) {
    this.aTareas.splice(i, 1);
  }
}
