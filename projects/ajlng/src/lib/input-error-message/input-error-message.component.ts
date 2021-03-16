import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'ajl-input-error-message',
  templateUrl: './input-error-message.component.html',
  styleUrls: ['./input-error-message.component.css']
})
export class InputErrorMessageComponent{

  @Input() form: AbstractControl = new FormControl();

  @Input() label: string = '';

  constructor(){}

  get errorMessage( ) {

		if (this.form !== undefined && this.form !== null) {
			for (const property_name in this.form.errors) {

				if ( this.form.errors.hasOwnProperty(property_name) && this.form.touched){
					return this.getErrorMessage(this.label, property_name, this.form.errors[property_name]);
				}
			}
		}
		return null;
	}

  private getErrorMessage(
    fieldName: string, 
    validiatorName: string,
    validatorValue?: any
  ):string {

    const config = {
        'email': `${fieldName} inválido. Favor informar um e-mail válido.`,
        'required': `${fieldName} é obrigatório.`,
        'minlength': `${fieldName} deve ter no mínimo ${validatorValue.requiredLength} caracteres.`,
        'maxlength': `${fieldName} deve ter no máximo ${validatorValue.requiredLength} caracteres.`,
        'min': `${fieldName} não pode ser menor que ${validatorValue.min}`,
        'max': `${fieldName} não pode ser maior que ${validatorValue.max}`,
        'equalsTo': 'Campos não são iguais',
        'pattern': 'Campo inválido',
    };

    return config[validiatorName]; 
  }
}
