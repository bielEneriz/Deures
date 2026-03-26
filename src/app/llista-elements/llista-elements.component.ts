import { ELEMENTS_MOCK } from '../mocks/dades-mock';
import { Element } from '../models/element.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, BarraCercaComponent],
  templateUrl: './llista-elements.component.html'
})
export class LlistaElementsComponent {
  elements: Element[] = ELEMENTS_MOCK;
  filtrats: Element[] = [...this.elements];

  filtrar(text: string) {
    this.filtrats = this.elements.filter(e =>
      e.nom.toLowerCase().includes(text.toLowerCase())
    );
  }

  trackById(index: number, item: Element) {
    return item.id;
  }
}
