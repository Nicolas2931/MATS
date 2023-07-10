import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  noticias:Noticia[] = [];
  constructor(private loginService:LoginService) { }
  noticia1:Noticia =
  new Noticia("A1","Investigadores de la Universidad XYZ descubren posible cura para el cáncer"
  ,"15 de abril de 2023",
  "Un equipo de científicos de la Universidad XYZ ha realizado un avance significativo en la búsqueda de una cura para el cáncer. Sus estudios preliminares han revelado una terapia innovadora que muestra resultados prometedores en pruebas de laboratorio.");
  noticia2:Noticia=new Noticia("A2","Estudiante de la Universidad ABC gana prestigioso premio de matemáticas",
  "2 de mayo de 2023",
  "Juan Pérez, estudiante de último año de la Universidad ABC, ha sido galardonado con el Premio Nacional de Matemáticas por su destacado trabajo en el campo de la teoría de números. Este premio reconoce su talento y dedicación a la excelencia académica.");
  noticia3:Noticia=new Noticia("A3","Nueva conferencia sobre inteligencia artificial en la Universidad XYZ",
  "10 de junio de 2023",
  "La Universidad XYZ organizará una conferencia de dos días sobre los avances más recientes en inteligencia artificial. El evento contará con destacados expertos en el campo y brindará una plataforma para el intercambio de conocimientos y la discusión de ideas innovadoras.");
  noticia4:Noticia=new Noticia("A4","Investigadores de la Universidad ABC descubren nueva especie de mariposa",
  "18 de julio de 2023",
  "Un equipo de biólogos de la Universidad ABC ha identificado una nueva especie de mariposa en una remota región de la selva amazónica. Este descubrimiento destaca la importancia de la conservación de los ecosistemas y la biodiversidad.");
  noticia5:Noticia=new Noticia("A5","Concurso de diseño sostenible en la Facultad de Arquitectura",
  "5 de septiembre de 2023",
  "La Facultad de Arquitectura de la Universidad XYZ organizará un concurso para fomentar la innovación en el diseño sostenible. Los estudiantes tendrán la oportunidad de presentar sus propuestas y contribuir a la creación de entornos más ecológicos y respetuosos con el medio ambiente.");
  noticia6:Noticia=new Noticia("A6","Investigadores de la Universidad ABC publican estudio sobre cambio climático",
  "20 de octubre de 2023",
  "Un equipo de científicos de la Universidad ABC ha publicado un estudio integral sobre los efectos del cambio climático en los ecosistemas costeros. Sus hallazgos destacan la urgencia de abordar este problema global y proponen posibles soluciones basadas en la conservación y la mitigación.");
  noticia7:Noticia=new Noticia("A7","Jornada de voluntariado en la Universidad XYZ",
  "15 mayo de 2023",
  "La Universidad XYZ organizará una jornada de voluntariado para promover el servicio comunitario entre los estudiantes. Los participantes colaborarán en proyectos sociales y brindarán apoyo a organizaciones locales, fortaleciendo así el compromiso cívico y la responsabilidad social.");
  noticia8:Noticia=new Noticia("A8","Nueva exposición de arte en el campus de la Universidad ABC",
  "6 de diciembre de 2023",
  "El Departamento de Bellas Artes de la Universidad ABC inaugurará una emocionante exposición de arte contemporáneo en el campus. La muestra contará con obras de reconocidos artistas locales e internacionales, brindando a la comunidad académica una experiencia cultural enriquecedora.");
  noticia9:Noticia=new Noticia("A9","Conferencia sobre medicina personalizada en la Universidad XYZ",
  "18 de enero de 2024",
  "La Universidad XYZ acogerá una conferencia especializada en medicina personalizada, explorando los avances y desafíos en este campo de rápido crecimiento. Los asistentes tendrán la oportunidad de aprender de expertos líderes en la industria y descubrir nuevas perspectivas en el cuidado de la salud.");
  noticia10:Noticia=new Noticia("A10","Estudiantes de la Universidad ABC obtienen becas para estudiar en el extranjero",
  "2 de febrero de 2024",
  "Varios estudiantes destacados de la Universidad ABC han sido seleccionados para recibir becas que les permitirán realizar estudios en el extranjero durante el próximo año académico. Esta oportunidad les brindará una experiencia educativa internacional y les abrirá nuevas puertas en sus carreras.");
  noticia11:Noticia=new Noticia("A11","Estudiantes de la Universidad Santo Tomas obtienen becas para estudiar en el extranjero",
  "2 de febrero de 2024",
  "Varios estudiantes destacados de la Universidad ABC han sido seleccionados para recibir becas que les permitirán realizar estudios en el extranjero durante el próximo año académico. Esta oportunidad les brindará una experiencia educativa internacional y les abrirá nuevas puertas en sus carreras.");
  getNoticias(){
    let usuario:string;
    usuario=this.loginService.getTipoUsuario();
    if(usuario =="Estudiante"){
      this.noticias.push(this.noticia1);
      this.noticias.push(this.noticia2);
      this.noticias.push(this.noticia3);
      this.noticias.push(this.noticia4);
      this.noticias.push(this.noticia5);
      this.noticias.push(this.noticia6);
    }
    else if(usuario =="Profesor"){
      this.noticias.push(this.noticia7);
      this.noticias.push(this.noticia8);
      this.noticias.push(this.noticia9);
      this.noticias.push(this.noticia10);
    }
    else if(usuario =="Administrador"){
      this.noticias.push(this.noticia1);
      this.noticias.push(this.noticia2);
      this.noticias.push(this.noticia3);
      this.noticias.push(this.noticia4);
      this.noticias.push(this.noticia5);
      this.noticias.push(this.noticia6);
      this.noticias.push(this.noticia7);
      this.noticias.push(this.noticia8);
      this.noticias.push(this.noticia9);
      this.noticias.push(this.noticia10);
      this.noticias.push(this.noticia11);
    }
    return this.noticias;
  }

}
