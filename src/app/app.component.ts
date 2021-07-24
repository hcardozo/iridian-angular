import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AreaContactoService } from './services/areaContacto/area-contacto.service';
import { ContactoService } from './services/contacto/contacto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mensajeRespuesta = '';
  public contactoForm: FormGroup;

  public areaContactoList: Array<any>;
  constructor(private contactoService: ContactoService, private areaContactoService: AreaContactoService) {
    this.contactoForm = this.contactoService.getForm();
    this.areaContactoList = this.areaContactoService.getAll();
  }

  public enviarFormulario(): void {
    let body = {
      nombre: this.contactoForm.get('nombre')!.value,
      apellido: this.contactoForm.get('apellido')!.value,
      correo: this.contactoForm.get('correo')!.value,
      celular: this.contactoForm.get('celular')!.value,
      areaContacto: this.contactoForm.get('areaContacto')!.value,
      mensaje: this.contactoForm.get('mensaje')!.value
    }
    // Injeccion de http client y consumo de servicio
    // this.httpClient.post(body).subscribe((respuesta: any)=>{ console.log(respuesta)})
    this.mensajeRespuesta = 'Formulario enviado correctamente.';
    this.contactoForm = this.contactoService.getForm();
    setTimeout(() => {
      this.mensajeRespuesta = '';
    }, 3000);

  }
}
