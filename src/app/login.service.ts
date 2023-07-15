import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private token:string;
  private tipo_usuario:string;
  constructor(private route:Router, private cookies:CookieService, private cookie_usuario:CookieService) {
    this.token="";
    this.tipo_usuario="";
  }
  login(usuario:string, password:string){
    //consulta en la base de datos
    //generar Token
    if(usuario=='20202578024' && password=="20202578024"){
      //solo si encuentra el usuario le genero token
      this.token = usuario;
      this.tipo_usuario="Estudiante";
      
    }
    if(usuario=='20202578025' && password=="20202578025"){
      //solo si encuentra el usuario le genero token
      this.token = usuario;
      this.tipo_usuario="Profesor";
      
    }
    if(usuario=='20202578026' && password=="20202578026"){
      //solo si encuentra el usuario le genero token
      this.token = usuario;
      this.tipo_usuario="Administrador";
      
    }
    this.cookies.set("tipo_usuario",this.tipo_usuario);
    this.cookies.set("token", this.token);
    return this.cookies.get("token");
  }
  //Esto debería volver la cookie
  getTipoUsuario(){
    return this.cookies.get("tipo_usuario");
  }

  estaLogueado(){
    return this.cookies.get("token");
  }
  logout(){
    this.token="";
    this.tipo_usuario="";
    this.cookies.set("token",this.token);
    this.cookie_usuario.set("tipo_usuario",this.tipo_usuario);
    this.route.navigate(['/']);
    location.reload();
  }
}
