import { Component } from '@angular/core';

@Component({
  selector: 'app-calificacion-propietario',
  templateUrl: './calificacion-propietario.component.html',
  styleUrl: './calificacion-propietario.component.css'
})
export class CalificacionPropietarioComponent {
  selectedValuePropietario = 0;
  selectedValuePropiedad = 0;
//identififer es para determinar que variable dentro de la clase queremos cambiar
  selectStar(value: number, identifier:number): void {
    if (identifier == 1){
      this.selectedValuePropietario = value;
    }
    else if (identifier == 2){
      this.selectedValuePropiedad = value;
    }
  }
}
