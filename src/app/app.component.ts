import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre: string = "Capitán América";
  nombre2: string = "fRaNcIsCo SánCHeZ rOmErO";

  array = [1,2,3,4,5,6,7,8,9,10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  fecha: Date = new Date();

  idioma: string = "es";

  activar: boolean = true;

  textButton: String = "Mostrar";

  videoUrl: string ="https://www.youtube.com/embed/NU8iOl8Caq8";

  constructor(){
    setInterval(() => {
      this.fecha = new Date();
    }, 1000);
  }

  valorPromersa = new Promise<String>((resolve)=>{
    setTimeout(() => {
      resolve("Llegó la información");
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad:500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }

  textoBtn(){
    if(this.textButton=="Mostrar"){
      this.textButton="Ocultar";
    }else if(this.textButton=="Ocultar"){
      this.textButton="Mostrar"
    }

  }
}
