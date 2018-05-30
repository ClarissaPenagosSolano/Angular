import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs/Subscriber';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  loginUser(e){
    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    return this.http.post('http://localhost:8080/aja/rest/Cliente',{
    password: password,
    username: username
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
