import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public formLogin!: FormGroup;

  email: string = 'edd@gmail.com';
  password: string = '12345678';

  islogin: boolean = true;
  
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }
  //metodo para inicializar el formulario de login
  formInit(){
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  
  //metodo para iniciar sesion
  iniciarSesion(){
    const data = this.formLogin.value;
    
    if (data.email != this.email || data.password != this.password) {
      this.islogin = !this.islogin;

      setTimeout(() => {
        this.islogin = !this.islogin;
      }, 2000);
     
    }
    else {
      sessionStorage.setItem('login', 'true');
      setTimeout(() => {
        this.router.navigate(['/pages/dashboard']);
      },2000);
    } 
  }  
}
