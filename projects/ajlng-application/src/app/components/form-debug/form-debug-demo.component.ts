import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-debug-demo',
  templateUrl: './form-debug-demo.component.html',
  styleUrls: ['./form-debug-demo.component.css']
})
export class FormDebugDemoComponent implements OnInit {

  public form: FormGroup;

  constructor() { 
    this.form = new FormGroup({});
  }

  ngOnInit(): void {

    this.form.addControl(
      'name',
      new FormControl({})
    );

    this.form.addControl(
      'birthDate',
      new FormControl()
    );

    this.form.addControl(
      'address',
      new FormGroup({})
    );

    (<FormGroup>this.form.get('address')).addControl(
      'city',
      new FormControl()
    );

    (<FormGroup>this.form.get('address')).addControl(
      'country',
      new FormControl()
    );
  }

}
