import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: any; 
  constructor(
    private http: HttpClient  
  ) { }

  ngOnInit() {

    /*

    ES6, typescript -> javascript es5

    function nombreFuncion() { } === () => { }
    `${ una_variable } - string`

    this.http.post( url. cabeceras, informacion).susbcribe();
    */

    this.http.get( `http://localhost:8080/aja/rest/Cliente` ).subscribe( ( data ) => {
      this.listaClientes = data;
      console.log(this.listaClientes);
     });
  }

}
