import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaphilightModule } from 'ng-maphilight';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaphilightModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
