import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-error-message-demo',
  templateUrl: './input-error-message-demo.component.html',
  styleUrls: ['./input-error-message-demo.component.css']
})
export class InputErrorMessageDemoComponent implements OnInit {


  public formGroup: FormGroup;

  constructor() { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {

    this.formGroup.addControl(
      'name',
      new FormControl(
        null,
        [Validators.required, Validators.minLength(2)]
      )
    )

  }

}
