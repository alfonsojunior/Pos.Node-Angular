import { Injectable } from '@angular/core';

import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: Http) {
  }

  consulta(): Promise<any> {
    return this.http.get( 'http://localhost:3000/produtos' ).toPromise();
  }

  add(data): Promise<any> {
    return this.http.post( 'http://localhost:3000/produtos', data ).toPromise();
  }

}
