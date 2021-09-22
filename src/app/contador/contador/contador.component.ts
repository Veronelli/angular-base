import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>

<button (click)="acumular2(base)">-{{base}}</button>
<span>La base es <strong>{{base}}</strong></span>
<button (click)="acumular2(base)">+{{base}}</button>
<br>
<br>
<button (click)="acumular(-1)">-1</button>
<span>{{numero}}</span>
<button (click)="acumular(1)">+1</button>
    `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;

  }

  acumular2(valor: number) {
    this.base + valor;

  }
}
