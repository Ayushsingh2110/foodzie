import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  LoginForm !: FormGroup;
  Submitted = false;
  URL_loginReturn = '';
  constructor(private FormBuilder:FormBuilder, private userService: UserService,
    private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.FormBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['',Validators.required]
    })

    this.URL_loginReturn = this.activatedRoute.snapshot.queryParams.URL_loginReturn;

  }

  get logcontrol(){
    return this.LoginForm.controls;
  }

  submit(){
    this.Submitted = true;
    if(this.LoginForm.invalid) return;

    this.userService.login({
      email:this.logcontrol.email.value,
      password: this.logcontrol.password.value
    }).subscribe(() => {
      this.router.navigateByUrl(this.URL_loginReturn)
    });
  }
}
