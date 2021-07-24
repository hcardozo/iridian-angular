import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class ContactoService {

  constructor(private formBuilder: FormBuilder) { }

  public getForm(): FormGroup {
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      celular: ['', Validators.required],
      areaContacto: ['', Validators.required],
      mensaje: ['', Validators.required],

    })
  }
}
