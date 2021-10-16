import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {

  // the input decorator name will always be same as the director selector name.
  @Input() set appCustomStructuralDirective(condition: boolean){
    if(!condition){
      this.viewController.createEmbeddedView(this.templateRef);
    }else{
      this.viewController.remove();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewController: ViewContainerRef) { }

}
