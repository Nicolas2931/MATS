import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-opciones-noticia',
  templateUrl: './opciones-noticia.component.html',
  styleUrls: ['./opciones-noticia.component.css']
})
export class OpcionesNoticiaComponent implements OnInit{
  constructor(private route: Router, private routerURL: ActivatedRoute){}
  //Varaible que guarda el ID de la noticia
  private id_noticia:string;
  //Variable que guarda ver o editar dependiendo de la opción seleccionada
  private opcion:string;
  ngOnInit(){
    this.routerURL.queryParams.subscribe(params => {
      this.opcion = params['opcion'];
    });  
    this.id_noticia = this.routerURL.snapshot.params['id'];
  }
  volver(){
    this.route.navigate(['/']);
  }
  getIdNoticia(){
    return this.id_noticia;
  }
  getOpcion(){
    return this.opcion;
  }


}
