import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  // id?: number;
  // private sub: any;
  // constructor(private route: ActivatedRoute) { }
  // ngOnInit(): void {
  //   // Recebendo parametros da url:
  //   // this.sub = this.route.params.subscribe(
  //   //   params => {
  //   //     this.id = params['id'] //id - do arquivo app-routing.module.ts
  //   //     alert("Parametro recebido ID: " + this.id)
  //   //   }
  //   // )
  // }

}
