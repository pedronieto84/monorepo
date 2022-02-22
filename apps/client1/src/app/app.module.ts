import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginModule } from '@pedro/login';
import { ApiService } from 'libs/api/src/lib/api.service';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, LoginModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
