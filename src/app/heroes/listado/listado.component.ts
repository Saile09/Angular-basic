import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  horoes: string[] = ['spiderma', 'ironman', 'hulk'];
  borrado: string = '';
  

  borrarHeroe():void{
    this.borrado = this.horoes.shift() || '';
    
  }

}
