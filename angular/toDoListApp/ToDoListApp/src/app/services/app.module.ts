import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import {FormsModule} from "@angular/forms";
import {TaskService} from "../task/task.service";


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
