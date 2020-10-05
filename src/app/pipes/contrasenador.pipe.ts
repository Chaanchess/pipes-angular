import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenador'
})
export class ContrasenadorPipe implements PipeTransform {

  transform(value: string, activado: boolean = true): string {
    if(activado){
      return '*'.repeat(value.length);
    }else{
      return value;
    }
}

}
