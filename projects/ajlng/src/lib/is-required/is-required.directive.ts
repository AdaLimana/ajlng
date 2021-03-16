import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[ajlIsRequired]'
})
export class IsRequiredDirective {

  @Input('ajlIsRequired') set validatorFn(validatorFn :ValidatorFn){
    
    if(validatorFn){
      const validator = validatorFn({} as AbstractControl);
      if (validator && validator.required) {
        this.render.addClass(this.elementRef.nativeElement, 'ajl-required');        
      }
      else{
        this.render.removeClass(this.elementRef.nativeElement, 'ajl-required');
      }
    }
    else{
      this.render.removeClass(this.elementRef.nativeElement, 'ajl-required');
    }
  }

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) {}
}
