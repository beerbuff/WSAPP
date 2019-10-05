import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoListPage } from './todo-list';
import { TaskPage } from '../task/task';

@NgModule({
  declarations: [
    TodoListPage,
    TaskPage

  ],
  imports: [
    IonicPageModule.forChild(TodoListPage),
  ],
})
export class TodoListPageModule {}
