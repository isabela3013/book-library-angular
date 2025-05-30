import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookItemComponent } from '../book-item/book-item.component';
import { NgIf, NgFor } from '@angular/common'; 

@Component({
  selector: 'app-book-list',
  imports: [BookItemComponent, NgIf, NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() books: any[] = []; // Recibe la lista de libros de AppComponent

  // EventEmitter tipado como 'string' para el ID del libro
  // Este es el que escucha AppComponent
  @Output() bookSelected = new EventEmitter<string>();

  constructor() { }

  /**
   * Este método se llama cuando un BookItemComponent hijo emite 'bookSelected'.
   * @param bookId El ID del libro emitido por el BookItemComponent.
   */
  onBookItemSelect(bookId: string): void {
    // Simplemente reemite el ID del libro hacia AppComponent
    this.bookSelected.emit(bookId);
  }
}
