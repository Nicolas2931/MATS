import { Component, Input, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-filtro-noticias',
  templateUrl: './filtro-noticias.component.html',
  styleUrls: ['./filtro-noticias.component.css']
})
export class FiltroNoticiasComponent implements OnInit{
  cantidad_noticias:number[] = [];

  @Input() total_noticias:number;

  desactivar:boolean[];
  txt_buscar:string;
  @Output() enviarTexto = new EventEmitter<string>();
  @Output() tam = new EventEmitter<string>();
  tipo_usuario:string;
  constructor(private login:LoginService){
  }
  cargar_cantidad(event:any) {
    const seleccion=event.target.value;
    this.tam.emit(seleccion);
  }

  enviar() {
    this.enviarTexto.emit(this.txt_buscar);
  }
  ngOnInit(): void {
    this.generarOpcionesSelect();
    this.tipo_usuario=this.login.getTipoUsuario();
  }
  generarOpcionesSelect(): void {
    const rangoMaximo = Math.ceil(this.total_noticias / 5) * 5;
    for (let i = 5; i <= rangoMaximo; i += 5) {
      this.cantidad_noticias.push(i);
    }
  }
}
