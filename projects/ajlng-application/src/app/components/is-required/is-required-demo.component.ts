import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './is-required-demo.component.html',
  styleUrls: ['./is-required-demo.component.css']
})
export class IsRequiredDemoComponent implements OnInit {

  public formGroup: FormGroup;

  public nameRequired: boolean = false;

  constructor() { 
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {

    this.formGroup.addControl(
      'name',
      new FormControl(null, [])
    );
  }

  public changeRequired(value: any){
    if(value){
      this.formGroup.get('name')?.setValidators([Validators.required]);
    }
    else{
      this.formGroup.get('name')?.clearValidators();
    }
  }

}