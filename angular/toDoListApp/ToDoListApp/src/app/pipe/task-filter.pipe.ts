import {Pipe, PipeTransform} from "@angular/core";
import {Task} from "../models/task";


@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {
  transform(tasks: Task[], status: boolean): Task[] {
    return null;
  }
}
