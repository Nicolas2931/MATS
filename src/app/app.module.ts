import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoticiasGeneralesComponent } from './noticias-generales/noticias-generales.component';
import { NoticiasUDComponent } from './noticias-ud/noticias-ud.component';
import { NoticiasInteresComponent } from './noticias-interes/noticias-interes.component';
import { MesaAyudaComponent } from './mesa-ayuda/mesa-ayuda.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login-guardian';
import { NoticiasComponent } from './noticias/noticias.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { NoticiasService } from './noticias.service';

const appRoutes:Routes=[
  {path: '',component: NoticiasGeneralesComponent},
  {path:'Noticias_UD',component: NoticiasUDComponent,canActivate: [LoginGuardian]},
  {path:'Noticias_Interes',component: NoticiasInteresComponent,canActivate: [LoginGuardian]},
  {path:'Preguntas_Frecuentes',component: PreguntasFrecuentesComponent,canActivate: [LoginGuardian]},
  {path:'Mesa_Ayuda',component: MesaAyudaComponent, canActivate: [LoginGuardian]},
  {path:'login',component: LoginComponent},
  {path:'**',component: PaginaErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NoticiasGeneralesComponent,
    NoticiasUDComponent,
    NoticiasInteresComponent,
    MesaAyudaComponent,
    LoginComponent,
    NoticiasComponent,
    PreguntasFrecuentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [LoginService,NoticiasService, CookieService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
