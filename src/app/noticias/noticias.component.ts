import { Component, OnInit} from '@angular/core';
import { LoginService } from '../login.service';
import { Noticia } from '../noticia.model';
import { NoticiasService } from '../noticias.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit{
  imagenActual = '../../assets/images/estrella.png';
  imagenNueva = '../../assets/images/estrella_activa.png';
  imagenOriginal = '../../assets/images/estrella.png';
  imagenes: string[] = [];
  noticias:Noticia[]=[];
  ejemplo:string;
  cantidad_notc:number;
  inicio:number;
  fin:number;
  num_pag:string;

  desactivar1: boolean = true;
  desactivar2: boolean = true;
  desactivar3: boolean = true;
  desactivar4: boolean = true;
  desactivar5: boolean = true;

  usuario:string;
  tam:number;
  recibirBusqueda(texto: string) {
    // Hacer algo con el texto recibido
    this.ejemplo=texto;
  }
  texto:string;
  cargar_notc(tam:string){
    if(tam!="null"){
      this.cantidad_notc =parseInt(tam);
    }
  }
  constructor(private loginService:LoginService, private servicioNoticias:NoticiasService, private router:Router){
    this.tam=this.noticias.length;
  }
  ngOnInit(): void {
    this.tam=this.noticias.length;
    if(this.tam==0){
      this.texto='Entro 1 vez';
      this.tam=this.noticias.length;
      this.noticias = this.servicioNoticias.getNoticias();
    }
    else{
      this.texto='no entro';
    }
    this.usuario=this.loginService.getTipoUsuario();
    //Se inicia el array con la cantidad de elementos de la matriz de noticias
    //Se llena cada elemento del arreglo con la imagen base
    this.imagenes = Array(this.noticias.length).fill(this.imagenActual);
    this.cantidad_notc=50;
    this.inicio=0;
    this.fin=9;
    this.num_pag='1';
    const tam = this.noticias.length;
    this.desactivar1 = tam < 1 || tam > 9;
    this.desactivar2 = tam < 10 || tam > 19;
    this.desactivar3 = tam < 20 || tam > 29;
    this.desactivar4 = tam < 30 || tam > 39;
    this.desactivar5 = tam < 40 || tam > 49;
    if (tam >= 0 && tam <= 49) {
      this.desactivar1 = false;
    }
    if (tam >= 10 && tam <= 49) {
      this.desactivar2 = false;
    }
    if (tam >= 20 && tam <= 49) {
      this.desactivar3 = false;
    }
    if (tam >= 30 && tam <= 49) {
      this.desactivar4 = false;
    }
    if (tam >= 40 && tam <= 49) {
      this.desactivar5 = false;
    }
  }

  apoyar(indice: number) {
    if (this.imagenes[indice] === this.imagenOriginal) {
      this.imagenes[indice] = this.imagenNueva;
    } else {
      this.imagenes[indice] = this.imagenOriginal;
    }
  }
  //Se obtiene la ruta de la imagen actual para cada botón
  //Si el elemento está en el arreglo de imagenes se devuelve su valor, si no la imagen base.
  getImagenActual(indice: number): string {
    if (this.imagenes[indice]) {
      return this.imagenes[indice];
    } else {
      return this.imagenActual;
    }
  }
  getCantidadNoticias(){
    return this.cantidad_notc;
  }
  paginacion(pagina:number){
    switch(pagina){
      case 1:
        this.inicio=0;
        this.fin=9;
        this.num_pag='1';
        break;
      case 2:
        this.inicio=10;
        this.fin=19;
        this.num_pag='2';
        break;
      case 3:
        this.inicio=20;
        this.fin=29;
        this.num_pag='3';
        break;
      case 4:
        this.inicio=30;
        this.fin=39;
        this.num_pag='4';
        break;
      case 5:
        this.inicio=40;
        this.fin=49;
        this.num_pag='5';
        break;
      default:
        this.inicio=0;
        this.fin=9;
        this.num_pag='1';
        break;
    }
  }
  //Método que redirecciona para ver la noticia, enviando el ID por la URL
  verNoticia(id: string) {
    this.router.navigate(['/ver', id]);
  }

}