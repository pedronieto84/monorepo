import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from '@pedro/login';
import { ApiService } from 'libs/api/src/lib/api.service';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, CommonModule, LoginModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
