import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto9';
  valor1:number;
  valor2:number;
  valor3:number;
  resultado:string ="";

  constructor(){
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();
  }

  tirar(){
    this.valor1 = this.retornarAleatorio();
    this.valor2 = this.retornarAleatorio();
    this.valor3 = this.retornarAleatorio();

    if(this.valor1===this.valor2 && this.valor1===this.valor3){
      this.resultado = "Ganaste";
    }
  }

  retornarAleatorio(){
    return Math.trunc(Math.random()*6)+1;
  }

}
