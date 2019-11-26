import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any = [
  {
    EventoID: 1,
    Tema: 'Angular',
    Local: 'Belo horizonte'
  },
  {
    EventoID: 2,
    Tema: '.Net Core',
    Local: 'São Paulo'
  },
  {
    EventoID: 3,
    Tema: 'Anguar e .Net Core',
    Local: 'Rio de Janeiro'
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
