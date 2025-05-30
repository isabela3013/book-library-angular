import { Routes } from '@angular/router';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' }, // Redirige la ruta raíz a /books
    { path: 'books', component: BookListComponent }, // Muestra la lista de libros en /books
    { path: 'books/:id', component: BookDetailComponent }, // Muestra los detalles de un libro específico
    { path: '**', redirectTo: '/books' } // Para cualquier otra ruta no definida, redirige a /books (ruta de 404 simple)
];
