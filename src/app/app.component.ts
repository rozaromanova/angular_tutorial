import { Component } from '@angular/core';
import {TodoItem} from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Very warm welcome to {{ title }}!
    </h1>

    <todo-input-button-unit></todo-input-button-unit>
    <ul>
      <li *ngFor="let item of todoList">
        <todo-todo-item [item]="item"></todo-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}

