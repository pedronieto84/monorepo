import { Component } from '@angular/core';
import { User } from 'interfaces/interfaces';
import { ApiService } from 'libs/api/src/lib/api.service';

@Component({
  selector: 'pedro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public api: ApiService){
    console.log(this.api.getData())
  }
  title: User = { email: 'adf', password: 'adfasdf' };
}
