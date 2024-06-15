import { Component } from '@angular/core';

@Component({
  selector: 'app-calificacion-propietario',
  templateUrl: './calificacion-propietario.component.html',
  styleUrl: './calificacion-propietario.component.css'
})
export class CalificacionPropietarioComponent {
  selectedValue = 0;

  selectStar(value: number): void {
    this.selectedValue = value;
  }
}
