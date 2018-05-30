import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {
  listaSucursal: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.http.get( `http://localhost:8080/aja/rest/Sucursales` ).subscribe( ( data ) => {
      this.listaSucursal = data;
      console.log(this.listaSucursal);
     });
  }

}
