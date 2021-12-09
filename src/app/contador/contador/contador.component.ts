import { Component } from "@angular/core";

@Component({
    selector: "app-contador",
    template: `
    <h1>{{ titulo }}</h1>
    <h1>La base es:<strong> {{ base }} </strong> </h1>

    <span class="numer">{{ numero }}</span>
    <br><br>
    <button (click)="acumular( base )">+{{base}}</button>
    <button (click)="acumular( -base )">-{{base}}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10
    base: number = 5

    acumular(valor: number) {
        this.numero += valor
    }

}
