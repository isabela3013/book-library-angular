import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  // 1. Variable para almacenar el término de búsqueda
  searchTerm: string = '';

  // Filter
  value: number = 50;

  // 2. EventEmitter tipado como 'string'
  // Es crucial que sea `EventEmitter<string>`
  @Output() searchPerformed = new EventEmitter<string>();

  // 3. Método que se llama cuando el usuario hace clic en buscar o presiona Enter
  onSearch(): void {
    // 4. Emitir el valor de 'searchTerm' (que es un string)
    if (this.searchTerm.trim()) { // Opcional: Asegurarse de que no esté vacío
      this.searchPerformed.emit(this.searchTerm.trim());
    }
  }
}
