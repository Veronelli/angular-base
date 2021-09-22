import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = [
    'Spider man',
    'Meliodas',
    'Goku',
    'Armin'

  ]

  borrados: string[] = [];

  borrarHeroe(): void {

    if (this.esVacio(this.heroes)) {
      const del = this.heroes.shift() || '';
      this.borrados.push(del);

    }

  }

  recuperarHeroe(): void {
    if (this.esVacio(this.borrados)) {
      const del = this.borrados.shift() || '';
      this.heroes.push(del);

    }

  }

  esVacio(arr: string[]) {
    return arr.length !== 0;

  }

}
