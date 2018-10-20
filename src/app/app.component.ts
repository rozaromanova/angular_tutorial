import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      {{ title }}
    </h1>
    <todo-list-manager></todo-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Too much to do';
}

