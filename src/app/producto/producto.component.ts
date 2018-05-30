import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  listaProducto: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get( `http://localhost:8080/aja/rest/Producto` ).subscribe( ( data ) => {
      this.listaProducto = data;
      console.log(this.listaProducto);
     });
  }

}
