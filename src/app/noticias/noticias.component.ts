import { Component, OnInit} from '@angular/core';
import { LoginService } from '../login.service';
import { Noticia } from '../noticia.model';
import { NoticiasService } from '../noticias.service';

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
  noticias:Noticia[];
  constructor(private loginService:LoginService, private servicioNoticias:NoticiasService){}
  ngOnInit(): void {
    this.noticias=this.servicioNoticias.getNoticias();
    //Se inicia el array con la cantidad de elementos de la matriz de noticias
    //Se llena cada elemento del arreglo con la imagen base
    this.imagenes = Array(this.noticias.length).fill(this.imagenActual);
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
}
