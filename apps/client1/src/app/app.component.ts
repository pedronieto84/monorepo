import { Component } from '@angular/core';
import { User } from 'interfaces/interfaces';

@Component({
  selector: 'pedro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: User = { email: 'adf', password: 'adfasdf' };
}
