import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!: FormGroup;

  constructor(private _fb: FormBuilder){};

  ngOnInit(): void {
    this.loginform = this._fb.group({
      email: this._fb.control(null, [Validators.required, Validators.email]),
      password: this._fb.control(null, [
        Validators.required,
      ]),
    })
  }

  get loginControl() {
    return this.loginform?.controls;
  }

  onSubmit() {
    console.log(this.loginform.value);
  }

}
