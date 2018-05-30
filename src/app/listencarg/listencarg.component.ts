import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-listencarg',
  templateUrl: './listencarg.component.html',
  styleUrls: ['./listencarg.component.css']
})
export class ListencargComponent implements OnInit {
  listaEncargado: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get( `http://localhost:8080/aja/rest/Encargado` ).subscribe( ( data ) => {
      this.listaEncargado = data;
      console.log(this.listaEncargado);
     });
  }

}
