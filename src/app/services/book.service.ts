import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Base URL for the Google Books API
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  /**
   * Searches for books based on a query string.
   *
   * @param query The search term (e.g., 'harry potter', 'Stephen King').
   * @returns An Observable with the API response containing a list of books.
   */
  searchBooks(query: string): Observable<any> {
    console.log(query)
    if (!query || query.trim() === '') {
      return throwError(() => new Error('El término de búsqueda no puede estar vacío.'));
    }

    // Use HttpParams to safely encode the query parameter
    let params = new HttpParams().set('q', query.trim());

    // You can add more parameters if needed, for example:
    // params = params.set('maxResults', '20'); // Limit the number of results
    // params = params.set('printType', 'books'); // Only return books

    return this.http.get<any>(this.API_URL, { params }).pipe(
      // Optional: Add a map operator to transform the data if needed
      // For example, if you only want the 'items' array
      map(response => {
        // Google Books API returns an object with an 'items' array
        // if books are found, or an empty object/no 'items' if not.
        return response.items || [];
      }),
      catchError(this.handleError) // Handle potential errors
    );
  }

  /**
   * Fetches detailed information for a specific book by its ID.
   *
   * @param bookId The unique ID of the book (provided by the Google Books API).
   * @returns An Observable with the detailed book information.
   */
  getBookById(bookId: string): Observable<any> {
    if (!bookId || bookId.trim() === '') {
      return throwError(() => new Error('El ID del libro no puede estar vacío.'));
    }

    const url = `${this.API_URL}/${bookId}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError) // Handle potential errors
    );
  }

  /**
   * Generic error handling method for HTTP requests.
   *
   * @param error The error response from the HTTP call.
   * @returns An Observable that emits an error.
   */
  private handleError(error: any) {
    let errorMessage = 'Un error desconocido ocurrió.';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error('BookService error:', error); // Log the full error for debugging
    return throwError(() => new Error(errorMessage)); // Re-throw for component to handle
  }
}
