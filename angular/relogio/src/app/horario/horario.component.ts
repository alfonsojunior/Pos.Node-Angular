import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  // fullDate = new Date();
  // Pesquisar sobre PipeTransform para formatação
  // hora = this.fullDate.toLocaleDateString() + ' ' + this.fullDate.toLocaleTimeString();
  hora = new Date();

  constructor() { }

  ngOnInit() {
    setInterval( () => {
      /* this.fullDate = new Date();
      this.hora = this.fullDate.toLocaleDateString() + ' ' + this.fullDate.toLocaleTimeString(); */
      this.hora = new Date();
    }, 1000);
  }

}
