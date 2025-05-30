import { Routes } from '@angular/router';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' }, // Redirige la ruta raíz a /books
    { path: 'books', component: MainPageComponent }, // Muestra la lista de libros en /books
    { path: 'books/:id', component: BookDetailComponent }, // Muestra los detalles de un libro específico
    { path: '**', redirectTo: '/books' } // Para cualquier otra ruta no definida, redirige a /books (ruta de 404 simple)
];
