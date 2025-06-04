import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-book-item',
  imports: [
    ButtonModule,
    NgClass
  ],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss'
})
export class BookItemComponent {
  @Input() book: any; // Recibe un objeto de libro individual

  // EventEmitter tipado como 'string' para el ID del libro
  @Output() bookSelected = new EventEmitter<string>();

  constructor() { }

  /**
   * Este método se llama cuando el usuario hace clic en el libro.
   * Emite el ID del libro.
   */
  onSelectBook(): void {
    // Asegúrate de que tu objeto 'book' tenga una propiedad 'id'
    // La API de Google Books usualmente provee un 'id' en el objeto principal del volumen.
    if (this.book && this.book.id) {
      this.bookSelected.emit(this.book.id);
    } else {
      console.warn('Book ID not found for selected book:', this.book);
      // Opcional: Podrías emitir un error o manejarlo de otra manera.
    }
  }

  // Helper para obtener la URL de la portada de forma segura
  getThumbnailUrl(): string {
    return this.book?.volumeInfo?.imageLinks?.thumbnail || 'assets/default-book.png';
    // Asegúrate de tener una imagen 'default-book.png' en la carpeta assets si la usas.
  }

  isFavorite = false;

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
