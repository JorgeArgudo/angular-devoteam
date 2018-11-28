import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'dvt-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  oTarea: Task;
  @Output() onNewTask: EventEmitter<any>;

  constructor() {
    this.onNewTask = new EventEmitter(); // EventEmitter se inicializan siempre en el constructor
  }

  ngOnInit() {
    this.oTarea = new Task();
    
  }

  sendAddTask() {
    this.onNewTask.next(Object.assign({}, this.oTarea));    
    this.oTarea.nombre = '';
  }
}
