import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './equals-form-controls-demo.component.html',
  styleUrls: ['./equals-form-controls-demo.component.css']
})
export class EqualsFormControlsDemoComponent implements OnInit {

  public formGroup: FormGroup;

  constructor() { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {

    this.formGroup.addControl(
      'password',
      new FormControl()
    );

    this.formGroup.addControl(
      'repeatPassword',
      new FormControl()
    );
  }

}
