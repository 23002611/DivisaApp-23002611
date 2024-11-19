import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  quetzales: number = 0;
  resultado: number | null = null;

  convertir() {
    const tasaDeCambio = 8;
    if (this.quetzales > 0) {
      this.resultado = this.quetzales / tasaDeCambio;
    } else {
      this.resultado = null;
      alert('Por favor, ingrese una cantidad válida en Quetzales.');
    }
  }
}