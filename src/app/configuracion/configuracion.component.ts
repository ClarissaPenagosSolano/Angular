import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  listaAdmin: any; 
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  configuracion(e){
    e.preventDefault();
    console.log(e);
   
     var id_encargado = e.target.elements[0].value;
     var nombres = e.target.elements[1].value;
     var apellidos = e.target.elements[2].value;
     var tipo_doc = e.target.elements[3].value;
    var num_doc = e.target.elements[4].value;
    var celular = e.target.elements[5].value;
    return this.http.post('http://localhost:8080/aja/rest/Encargado',{
     id_encargado: id_encargado,
	 nombres: nombres,
	 apellidos: apellidos,
	 tipo_doc: tipo_doc,
   num_doc:num_doc,
   celular:celular
    }
  )
    .subscribe ( 
      res => { 
        console. log (res); 
      }, 
      err => { 
        console.log ("Ocurrió un error"); 
      } )
    }

}
