import { Directive ,OnInit, ElementRef } from "@angular/core";

@Directive({
  selector:"[appHighLight]" // in the selector we have to use [] bracket as to make it attribute binding and we have to use selector
})

export class CustomHighlightDirective implements OnInit{
  //we can use any name in place of eleRef but the type should be of ElementRef
  constructor(private eleRef: ElementRef){}

  ngOnInit(){
    //by accessing the nativeElement we can change the style or other things but this is not the appropriate method
    this.eleRef.nativeElement.style.backgroundColor = "chocolate";
  }
}
