import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Very warm welcome to {{ title }}!
    </h1>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
}
