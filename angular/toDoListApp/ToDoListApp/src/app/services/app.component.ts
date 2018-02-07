import { Component } from '@angular/core';
import {Task} from "../models/task";
import {TaskService} from "../task/task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private taskService: TaskService) {}
  /** On déclenche notre tableau de tâches
  **/
  tasks: Task[] = [];

  ngOnInit():void {
    this.tasks = this.taskService.getTasks();
  }

/**
   * Cette fonction se déclenche dans l'application lorsqu'une nouvelle tache est créée par l'utilisateur dans le composant app-addTask
   * @param newTaskEvent
   */

  newTask(newTaskEvent) {
    /** On ajoute la nouvelle tâche dans le tableau de tâche. Et on sauvegarde toutes les tâches en le LocalStorage.
this.tasks.push(newTaskEvent.task); */
    this.tasks.push(newTaskEvent.task);
    this.taskService.save(this.tasks);
  }

  taskIsDone(task: Task) {
    task.status = true;
    this.taskService.save(this.tasks);
  }

}
