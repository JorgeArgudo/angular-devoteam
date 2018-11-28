import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'dvt-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() oTarea: Task;
  @Input() index: number;
  @Output() onDeleteTask: EventEmitter<number>;

  constructor() {
    this.onDeleteTask = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  sendDeleteTask() {
    this.onDeleteTask.next(this.index)
  }
}
