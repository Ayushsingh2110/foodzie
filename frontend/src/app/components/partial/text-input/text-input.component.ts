import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  @Input()
  label!:string
  @Input()
  control!:AbstractControl
  @Input()
  showError!:boolean
  @Input()
  placeHolder!:string
  @Input()
  type: 'text' | 'email' | 'password' = 'text';

  get Formcontrol(){
    return this.control as FormControl;
  }

  constructor() { }

  ngOnInit(): void {

  }

}
