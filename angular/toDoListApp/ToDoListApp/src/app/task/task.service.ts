import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  constructor() { }

  // -- récupérer la liste des tâches
getTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks !=null) {
    return tasks;
    } else {
    return[];
    }
  }

  // -- sauvegarder les tâches
  save(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

}
