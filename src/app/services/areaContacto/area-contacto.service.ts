import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AreaContactoService {

  constructor() { }

  public getAll(): any{
    // consumo http hacia api
    return [
      {
        'id':'1',
        'nombre_area':'Sistemas'
      },
      {
        'id':'2',
        'nombre_area':'Atencion al Cliente'
      },
      {
        'id':'3',
        'nombre_area':'Gerencia'
      }
    ]
  }
}
