import { Component, Input } from '@angular/core';
import { Element } from '../models/element.model';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ element.nom | uppercase }}</h3>
      <p>Valor: {{ element.valor }}</p>
      <p *ngIf="element.descripcio">{{ element.descripcio }}</p>
    </div>
  `
})
export class TargetaElementComponent {
  @Input() element!: Element;
}
