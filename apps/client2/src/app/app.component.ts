import { Component } from '@angular/core';
import { ApiService } from 'libs/api/src/lib/api.service';

@Component({
  selector: 'pedro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client2';
  show = '6'
  constructor(private api: ApiService){

  }

  getData(){
    const data = this.api.getData();
    this.show = data[0]
  }
}
