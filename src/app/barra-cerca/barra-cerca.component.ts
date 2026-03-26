import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-cerca.component.html'
})
export class BarraCercaComponent {
  text: string = '';
  @Output() cerca = new EventEmitter<string>();

  enviar() {
    this.cerca.emit(this.text);
  }
}
