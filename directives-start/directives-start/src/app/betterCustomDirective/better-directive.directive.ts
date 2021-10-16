import { Directive, ElementRef, OnInit, Renderer2,
   HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit{

  /*Renderer2 is a better approach to access dom or to change any dom property.
  the setStyle of renderer takes 4 things(the element,type,value,flag)
  or
  Renderer2 is used to manipulate the dom property.*/
  constructor(private renderer: Renderer2, private eleRef: ElementRef) { }

  //dynamically change color from outside
  @Input() defaultColor:string = 'transparent';
  @Input() highLightColor:string = 'purple';

  //HostBinding is used to set the properties of the element that host the directives and it works same as renderer2
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background', 'purple');
    this.backgroundColor = this.defaultColor;
  }

  /*hostListener is a decorator that is used to listen the events or allows you to handle events of
  the host element in the directive class.*/
  @HostListener('mouseenter') mouseover(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background', 'purple');
    this.backgroundColor  = this.highLightColor;
  }

  @HostListener('mouseleave') mouseout(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
