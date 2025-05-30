import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { LoadingSpinnerComponent } from '../../components/shared/loading-spinner/loading-spinner.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [
    BookListComponent,
    LoadingSpinnerComponent,
    SearchBarComponent,
    NgIf
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  books: any[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;
  searchTerm: string = '';

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  onSearchPerformed(query: string): void {
    this.searchTerm = query;
    this.isLoading = true;
    this.errorMessage = null;
    this.books = [];

    this.bookService.searchBooks(query).subscribe({
      next: (data) => {
        // 'data' aquí ya será el array 'items' o un array vacío gracias al 'map' en el servicio
        this.books = data;
        this.isLoading = false;
        console.log(data)
      },
      error: (err) => {
        console.error('Error al buscar libros:', err);
        this.errorMessage = 'Hubo un error al buscar libros. Por favor, inténtalo de nuevo.';
        this.isLoading = false;
      }
    });
  }

  // Este método ahora debería recibir un string (el bookId)
  onBookSelected(bookId: string): void {
    console.log('Book selected with ID:', bookId); // Para depuración
    this.router.navigate(['/books', bookId]);
  }
}
