import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VentaComponent } from './venta/venta.component';
import { SucursalComponent } from './sucursal/sucursal.component';
import { ProducsucComponent } from './producsuc/producsuc.component';
import { ProductoComponent } from './producto/producto.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {Routes, RouterModule} from '@angular/router';
import { ReciboComponent } from './recibo/recibo.component';
import { ListencargComponent } from './listencarg/listencarg.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientesComponent } from './clientes/clientes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MasproductComponent } from './masproduct/masproduct.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const appRoutes: Routes = [
  {
    path: '', redirectTo: '/clientes', pathMatch: 'full'
  },
  { path: 'venta', component: VentaComponent},
  { path: 'sucursal', component: SucursalComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'producsuc', component: ProducsucComponent},
  { path: 'login', component: LoginComponent},
  { path: 'configuracion', component: ConfiguracionComponent},
  { path: 'recibo', component: ReciboComponent},
  { path: 'listencarg', component: ListencargComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'masproduct', component: MasproductComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    SucursalComponent,
    ProducsucComponent,
    ProductoComponent,
    ConfiguracionComponent,
    LoginComponent,
    RegistroComponent,
    ReciboComponent,
    ListencargComponent,
    ProfileComponent,
    ClientesComponent,
    MasproductComponent,
   
 
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
