import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs'; // Necesario para of() si no se encuentra el ID
import { switchMap, catchError } from 'rxjs/operators';
import { BookService } from '../../services/book.service';
import { NgIf, NgFor } from '@angular/common'; 
import { LoadingSpinnerComponent } from '../../components/shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-book-detail',
  imports: [
    LoadingSpinnerComponent,
    NgIf,
    NgFor
  ],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnInit {
  book: any | null = null;
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute, // Para acceder a los parámetros de la URL
    private bookService: BookService,
    private router: Router // Para posible navegación de regreso
  ) { }

  ngOnInit(): void {
    console.log(this.route)
    this.isLoading = true;
    this.errorMessage = null;

    // Obtiene el 'id' del libro de los parámetros de la URL
    this.route.paramMap.pipe(
      switchMap(params => {
        const bookId = params.get('id'); // Obtiene el valor del parámetro 'id'
        if (bookId) {
          return this.bookService.getBookById(bookId); // Llama al servicio para obtener los detalles
        } else {
          this.errorMessage = 'No se proporcionó un ID de libro.';
          this.isLoading = false;
          return of(null); // Retorna un observable vacío si no hay ID
        }
      }),
      catchError(err => {
        console.error('Error al cargar detalles del libro:', err);
        this.errorMessage = 'No se pudo cargar los detalles del libro. Por favor, inténtalo de nuevo.';
        this.isLoading = false;
        return of(null); // Asegura que el observable se complete incluso con error
      })
    ).subscribe(
      (bookData) => {
        if (bookData) {
          this.book = bookData;
        } else {
          this.book = null; // No data or error case
        }
        this.isLoading = false;
      },
      // El error ya se maneja en catchError del pipe, pero es bueno tener un error handler aquí también
      (err) => {
        // Esto solo se ejecutará si throwError se usa directamente en el pipe sin catchError final
        // Ya está cubierto por el catchError de arriba
      }
    );
  }

  // Método para obtener la URL de la imagen de forma segura
  getCoverImage(): string {
    return this.book?.volumeInfo?.imageLinks?.large ||
           this.book?.volumeInfo?.imageLinks?.medium ||
           this.book?.volumeInfo?.imageLinks?.small ||
           this.book?.volumeInfo?.imageLinks?.thumbnail ||
           'assets/default-book-cover.png'; // Proporciona una imagen por defecto
  }

  // Método para volver a la lista de libros
  goBackToList(): void {
    this.router.navigate(['/books']);
  }
}
