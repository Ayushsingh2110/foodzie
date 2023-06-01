import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegister } from 'src/app/resources/interfaces/UserRegister';
import { checkPassword } from 'src/app/resources/validators/passwordValidator';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  SignUpForm !: FormGroup;
  registerReturnURI = '';
  isRegister = false;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.SignUpForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]],
      address: ['',[Validators.required, Validators.minLength(10)]]
    },
    {
      Validators: checkPassword('password','confirmPassword')
    }
    )

    this.registerReturnURI = this.activatedRoute.snapshot.queryParams.registerReturnURI;
  }

  get signControl(){
    return this.SignUpForm.controls;
  }

  submit(){
    this.isRegister = true;
    if(this.SignUpForm.invalid) return;

    const SignValue = this.SignUpForm.value;
    const NewUser:UserRegister = {
      name: SignValue.name,
      email: SignValue.email,
      password: SignValue.password,
      confirmPassword: SignValue.confirmPassword,
      address: SignValue.address
    }

    this.userService.register(NewUser).subscribe(_ => {
      this.router.navigateByUrl(this.registerReturnURI);
    });


  }

}
