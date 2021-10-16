import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomHighlightDirective } from './customhighlightDirective/customhighlight.directive';
import { BetterDirectiveDirective } from './betterCustomDirective/better-directive.directive';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomHighlightDirective,
    BetterDirectiveDirective,
    CustomStructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
