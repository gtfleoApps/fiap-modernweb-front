import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';

import { Router, Routes } from '@angular/router'

import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }
]

// fdescribe - forca execucao desse unico teste
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let injector: TestBed;

  // beforeEach: antes de executar os its (antes de cada um), 
  // roda a funcao
  beforeEach(async () => {
    // Preparando o modulo para pteste
    // aqui colocamos tudo o que o componete vai utilizar
    // outros componentes, services, módulos, etc.
    await TestBed.configureTestingModule({
      // declaracoes em app.module.ts
      declarations: [LoginComponent],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    // Criando o componete:
    fixture = TestBed.createComponent(LoginComponent);
    // Pegando a instancia do componente criado:
    component = fixture.componentInstance;
    // Aplicando as mudancas no dom:
    fixture.detectChanges();

    injector = getTestBed();
    router = injector.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Simular click no entrar, chamando a rota home:
  it('should navigate to home', () => {
    // preparacao
    spyOn(router, 'navigate');
    const button = fixture.nativeElement.querySelector('#btnLogin');

    // execucao
    button.click();

    // verificacao
    expect(router.navigate).toHaveBeenCalledWith(["home"]);
  })
});
