import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-noticia',
  templateUrl: './ver-noticia.component.html',
  styleUrls: ['./ver-noticia.component.css']
})
export class VerNoticiaComponent implements OnInit{
  constructor(private router: Router, private routerURL: ActivatedRoute){}
  id_noticia:string;
  ngOnInit(): void {
    this.id_noticia = this.routerURL.snapshot.params['id'];
  }
  volver(){
    this.router.navigate(['']);
  }
}
