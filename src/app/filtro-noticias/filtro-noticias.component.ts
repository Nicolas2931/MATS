import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-filtro-noticias',
  templateUrl: './filtro-noticias.component.html',
  styleUrls: ['./filtro-noticias.component.css']
})
export class FiltroNoticiasComponent implements OnInit{
  cantidad_noticias:number[] = [];
  txt_buscar:string;
  @Output() enviarTexto = new EventEmitter<string>();
  @Output() tam = new EventEmitter<string>();

  cargar_cantidad(event:any) {
    const seleccion=event.target.value;
    this.tam.emit(seleccion);
  }

  enviar() {
    this.enviarTexto.emit(this.txt_buscar);
  }
  constructor(){
  }
  ngOnInit(): void {
    for(let i=5;i<=50;i+=5){
      this.cantidad_noticias.push(i);
    }
  }
}
