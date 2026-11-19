
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  // Inicializar formulario de registro
  formInit() {
    this.formRegister = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // Registrar usuario
  registrarUsuario() {

    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    }

    const data = this.formRegister.value;

    if (data.password !== data.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Datos del registro:', {
      nombre: data.nombre,
      email: data.email,
      password: data.password
    });

    alert('Registro realizado correctamente');
  }
}

