import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox'; // importing LightBox

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngxLightBox';
  wallpapers = [
    'assets/images/pic1.jpg',
    'assets/images/pic2.jpg',
    'assets/images/pic3.jpg',
    'assets/images/pic4.jpg',
  ]

  albums: Array<any> = [];

  constructor(private _lightbox: Lightbox){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for (let i=0; i < this.wallpapers.length; i++){
      const src = this.wallpapers[i];
      const caption = 'Caption Image ' + (i+1);
      const thumb = this.wallpapers[i];

      const album = {
        src: src,
        caption: caption,
        thumb: thumb
     };

     this.albums.push(album);
    }

  }

  open(index: number): void {
    // open lightbox with required options
    this._lightbox.open(this.albums, index, {
      wrapAround: true,
      showImageNumberLabel: true,
      showZoom: true,
      showRotate: true,
      centerVertically: true
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
