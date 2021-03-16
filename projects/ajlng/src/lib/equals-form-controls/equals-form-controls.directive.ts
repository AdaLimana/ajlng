import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ajlEqualsFormControls]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualsFormControlsDirective, multi: true}]
})
export class EqualsFormControlsDirective implements Validator{

  @Input('ajlEqualsFormControls') formControlName: string;

  public validate(formControlA: AbstractControl): ValidationErrors|null{

    const formControlB =  formControlA.parent?.get(this.formControlName);

    if(formControlA.value === null || formControlA.value === undefined){
      return null;
    }

    if(formControlB){

      const subscription: Subscription = formControlB.valueChanges
                                                     .subscribe(
                                                       () => {
                                                        formControlA.updateValueAndValidity();
                                                        subscription.unsubscribe();
                                                       }
                                                     );
    }
    
    return formControlB && formControlB.value !== formControlA.value ?{'ajlNotEqualsFormControls': true} :null;

  }
}