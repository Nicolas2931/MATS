import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Menú hamburgesa
  showMenu: boolean = false;
  constructor(private loginService: LoginService){}
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  
  //Mensaje de loguearse
  estalogueado(){
    return this.loginService.estaLogueado();
  }
  logout(){
    this.loginService.logout();
  }
}

