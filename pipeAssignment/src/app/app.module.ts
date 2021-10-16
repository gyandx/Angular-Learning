import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SortFilter } from './sort.filter';
import { ReversePipePipe } from './reverse-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortFilter,
    ReversePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
