import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = "Iroman";
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();

    }

    cambiarNombre(): void {
        this.nombre = "Spederman";

    }

    cambiarEdad(): void {
        this.edad = 23;

    }

}