import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }
  profileAdmin(e){
    e.preventDefault();
    console.log(e);
   
     var id_administrador = e.target.elements[0].value;
     var nombres = e.target.elements[1].value;
     var apellidos = e.target.elements[2].value;
     var tipo_doc = e.target.elements[3].value;
    var num_doc = e.target.elements[4].value;
    var celular = e.target.elements[5].value;
    return this.http.post('http://localhost:8080/aja/rest/Encargado',{
     id_administrador: id_administrador,
     nombres: nombres,
	 apellidos: apellidos,
	 tipo_doc: tipo_doc,
   num_doc:num_doc,
   celular: celular
    
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
