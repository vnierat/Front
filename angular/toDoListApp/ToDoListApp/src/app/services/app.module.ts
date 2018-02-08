import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

import {AddtaskComponent} from "../addtask/addtask.component";
import {TaskStorageService} from "../task/task-storage.service";
import {TaskFilterPipe} from "../pipe/task-filter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
