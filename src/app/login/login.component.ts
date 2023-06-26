import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:boolean;
  usuario:string;
  constructor(private router: Router, private loginService:LoginService){
    this.error=false;
  }
  volverGeneral(){
    this.router.navigate(['']);
  }

  login(form:NgForm){
    const usuario=form.value.usuario;
    const password=form.value.password;
    if(this.loginService.login(usuario,password)!=''){
      this.router.navigate(['/Noticias_UD']);
    }
    else{
      this.error=true;
    }
  }
}