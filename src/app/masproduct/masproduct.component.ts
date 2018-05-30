import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-masproduct',
  templateUrl: './masproduct.component.html',
  styleUrls: ['./masproduct.component.css']
})
export class MasproductComponent implements OnInit {
 
  products = [
    {'id':'1', 'descripcion': 'Chocolate', 'Precio': '2550', 'Marca':'Sol', presentacion: '500gr', 'Categoria':'Alimentos' },
    {'id':'2', 'descripcion': 'Salchichas', 'Precio': '5400', 'Marca':'Rica', presentacion: '500gr', 'Categoria':'Carnes Frias' },
    {'id':'3', 'descripcion': 'Queso', 'Precio': '5200', 'Marca':'Alpina', presentacion: '250gr', 'Categoria':'Lacteos' },

  ];

    model:any={};
      addProducts():void{
      

      }
  deleteProducts():void{

  }
  editProducts():void{

  }
  updateProducts():void{

  }

  onClickMe() {

  }
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  masproduc(e){
    e.preventDefault();
    console.log(e);
   
     var id_producto = e.target.elements[0].value;
     var nombre_producto = e.target.elements[1].value;
     var precio_producto = e.target.elements[2].value;
     var marca = e.target.elements[3].value;
    var presentacion = e.target.elements[4].value;
    return this.http.post('http://localhost:8080/aja/rest/Producto',{
     id_producto: id_producto,
	 nombre_producto: nombre_producto ,
	 precio_producto: precio_producto,
	 marca: marca,
	 presentacion:presentacion,
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
