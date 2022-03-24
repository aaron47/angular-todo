import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistItemComponent } from './todolist-item/todolist-item.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtodoFormComponent } from './addtodo-form/addtodo-form.component';
import { TodosService } from './shared/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistItemComponent,
    TodolistComponent,
    AddtodoFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [TodosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
