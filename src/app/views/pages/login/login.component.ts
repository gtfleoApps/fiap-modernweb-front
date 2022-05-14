import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Ir para o Home (botao Entrar):
  navigateToHome() {
    // [] permite passar parametros na url:
    // this.router.navigate(["home", 1234]);
    this.router.navigate(["home"]);
  }

}
