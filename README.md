# 📚 Buscador de Libros (Angular)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2aeab4d-9699-44e5-a82b-3b0af5688a2f/deploy-status)](https://app.netlify.com/projects/by-isa-book-library/deploys)



Un proyecto sencillo y rápido en Angular para buscar libros por título o autor, consumiendo la API pública de Google Books. Permite ver una lista de resultados y navegar a una página de detalles para cada libro.

---

## 🚀 Funcionalidades

* **Búsqueda de Libros:** Busca libros por título o autor a través de un campo de búsqueda intuitivo.
* **Resultados en Lista:** Muestra los libros encontrados en un formato de lista o cuadrícula con sus portadas y datos clave.
* **Detalles del Libro:** Haz clic en cualquier libro para ver una página con información detallada, incluyendo sinopsis, fecha de publicación, editorial, y más.
* **Manejo de Carga y Errores:** Indicadores visuales durante la carga de datos y mensajes claros en caso de errores o falta de resultados.
* **Navegación Intuitiva:** Utiliza el enrutamiento de Angular para una experiencia de usuario fluida entre la lista y los detalles.



## 🛠️ Tecnologías Utilizadas

* **Angular CLI:** Para la creación y gestión del proyecto.
* **Angular (Core, Common, Router, HttpClient):** El framework principal para construir la aplicación web.
* **RxJS:** Para la gestión de operaciones asíncronas (como las llamadas a la API).
* **Google Books API:** La API pública utilizada para obtener los datos de los libros.
* **HTML5 / CSS3:** Para la estructura y el estilo de la interfaz de usuario.



## ⚙️ Cómo Ponerlo en Marcha

Sigue estos pasos para levantar el proyecto en tu máquina local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/isabela3013/book-library-angular
    cd book-library-angular
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta la aplicación:**
    ```bash
    ng serve
    ```
    Una vez iniciado, la aplicación estará disponible en tu navegador en `http://localhost:4200/`.



## 📌 Estructura del Proyecto

El proyecto está organizado en componentes modulares y servicios para una clara separación de responsabilidades:

* **`AppComponent`**: Contenedor principal de la aplicación y gestor de la lógica de búsqueda global.
* **`HeaderComponent`**: Encabezado de la aplicación.
* **`SearchBarComponent`**: Componente para la entrada de búsqueda.
* **`BookListComponent`**: Muestra la lista de libros resultantes de la búsqueda.
* **`BookItemComponent`**: Representa un solo libro dentro de la lista de resultados.
* **`BookDetailComponent`**: Página dedicada a mostrar la información completa de un libro específico.
* **`LoadingSpinnerComponent`**: Indicador visual de carga.
* **`BookService`**: Servicio encargado de la comunicación con la API de Google Books.
* **`app-routing.module.ts`**: Configuración de las rutas de navegación.



## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.



## 📧 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme.



**Nota:** Este es un proyecto de demostración para practicar el uso de Angular y la integración con APIs públicas.
