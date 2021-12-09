import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Aquaman"]
  heroeBorrado: string = "";
  constructor() {

  }

  ngOnInit(): void {

  }
  borrarPrimero(): void {
    this.heroeBorrado = this.heroes.shift() || ""
  }

  borrarUltimo() {
    this.heroeBorrado = this.heroes.pop() || ""
  }


}
