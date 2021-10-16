import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngHighlight';

  config = {
    fade: true,

    // fill
    fill: true,
    fillColor: '#2F80ED',
    fillOpacity: 0.8,

    // stroke
    stroke: false,
    // strokeColor: '#4d0ec0',
    // strokeOpacity: 1,
    // strokeWidth: 1,

    // shadow:
    // shadow: true,
    // shadowColor: '#000000',
    // shadowOpacity: 0.8,
    // shadowRadius: 10
  }
}
