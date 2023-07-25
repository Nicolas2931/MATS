import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.css']
})
export class PreguntasFrecuentesComponent implements OnInit{
  txt_buscar:string;
  //Para borrar
  txt_lista:string
  constructor(){

  }
  ngOnInit(): void {
    this.txt_lista="Seleccione las categorías";
  }
  //Método para buscar entre las tarjetas la que se adecue a lo ingresado por el usuario
  buscar(){

  }
  categorias: { id: number; nombre: string; seleccionado: boolean }[] = [
    { id: 1, nombre: 'Categoría 1', seleccionado: false },
    { id: 2, nombre: 'Categoría 2', seleccionado: false },
    { id: 3, nombre: 'Categoría 3', seleccionado: false },
    { id: 4, nombre: 'Categoría 4', seleccionado: false },
    { id: 5, nombre: 'Categoría 5', seleccionado: false },
    { id: 6, nombre: 'Categoría 6', seleccionado: false },
    { id: 7, nombre: 'Categoría 7', seleccionado: false },
    { id: 8, nombre: 'Categoría 8', seleccionado: false },
    { id: 9, nombre: 'Categoría 9', seleccionado: false },
    { id: 10, nombre: 'Categoría 10', seleccionado: false },
    { id: 11, nombre: 'Categoría 11', seleccionado: false },
    { id: 12, nombre: 'Categoría 12', seleccionado: false },
    { id: 13, nombre: 'Categoría 13', seleccionado: false },
    { id: 14, nombre: 'Categoría 14', seleccionado: false },
    { id: 15, nombre: 'Categoría 15', seleccionado: false },
  ];

  obtenerCategoriasSeleccionadas() {
    const categoriasSeleccionadas = this.categorias.filter(cat => cat.seleccionado);
    console.log('Categorías seleccionadas:', categoriasSeleccionadas);
  }

  //Función para mostrar todos los checkboxs
  showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (checkboxes !== null) {
      if (checkboxes.classList.contains("hide")) {
        checkboxes.classList.remove("hide");
      } else {
        checkboxes.classList.add("hide");
      }
    }
  }

  mostrar_lista(){
    const selectedBtn=document.querySelector(".select-btn");
    if (selectedBtn) {
      selectedBtn.classList.toggle("open");
    }
    
  }
  seleccionadas:string;
  chulo(ID:number,categoria:string){
    let id=`${ID}`;
    const items=document.getElementById(id);
    if (items) {
          items.classList.toggle("checked");
          let checked = document.querySelectorAll(".checked"),
            btnText=document.querySelector(".btn-text");
            if(checked && checked.length>0) {
              this.txt_lista="Categorías seleccionadas ("+`${checked.length}`+")";
              this.seleccionadas=categoria;
            }
            else{
              this.txt_lista="Seleccione las categorías";
            }
    }
  }
  

}
