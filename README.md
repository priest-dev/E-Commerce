# README - Entrega Final de Coderhouse

## Proyecto E-Commerce

Este proyecto es la entrega final del curso de Coderhouse, donde se ha desarrollado un sistema de E-Commerce utilizando MongoDB como sistema de persistencia principal. A continuación, se detallan los objetivos, funcionalidades y cómo ejecutar el proyecto.

---

## Objetivos Generales

- Implementar MongoDB como sistema de persistencia principal.
- Definir todos los endpoints necesarios para trabajar con productos y carritos.

## Objetivos Específicos

- Profesionalizar las consultas de productos con filtros, paginación y ordenamientos.
- Mejorar la gestión del carrito implementando los últimos conceptos aprendidos.

---

## Endpoints Implementados

### Productos

- **GET /api/products**
  - Permite obtener una lista de productos.
  - **Query Params:**
    - `limit`: Número de productos a devolver (opcional, por defecto 10).
    - `page`: Página de resultados a devolver (opcional, por defecto 1).
    - `sort`: Ordenar por precio (asc/desc, opcional).
    - `query`: Filtrar por categoría o disponibilidad (opcional).
  - **Respuesta:**
    ```json
    {
      "status": "success/error",
      "payload": "Resultado de los productos solicitados",
      "totalPages": "Total de páginas",
      "prevPage": "Página anterior",
      "nextPage": "Página siguiente",
      "page": "Página actual",
      "hasPrevPage": "Indicador para saber si la página previa existe",
      "hasNextPage": "Indicador para saber si la página siguiente existe",
      "prevLink": "Link directo a la página previa (null si hasPrevPage=false)",
      "nextLink": "Link directo a la página siguiente (null si hasNextPage=false)"
    }
    ```

- **POST /api/products**
  - Permite agregar un nuevo producto.

### Carritos

- **DELETE /api/carts/:cid/products/:pid**
  - Elimina un producto específico del carrito.

- **PUT /api/carts/:cid**
  - Actualiza todos los productos del carrito con un arreglo de productos.

- **PUT /api/carts/:cid/products/:pid**
  - Actualiza la cantidad de un producto específico en el carrito.

- **DELETE /api/carts/:cid**
  - Elimina todos los productos del carrito.

- **GET /api/carts/:cid**
  - Obtiene todos los productos de un carrito específico, utilizando `populate` para desglosar los productos asociados.

---

## Vistas

- **index.handlebars**
  - Visualiza todos los productos con paginación.
  - Cada producto tiene un botón para agregar al carrito y un enlace para ver detalles completos.

- **/products/:pid**
  - Muestra la descripción completa del producto seleccionado, detalles de precio, categoría, etc.

- **/carts/:cid**
  - Visualiza un carrito específico, listando solo los productos que pertenecen a dicho carrito.

---

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/priest-dev/E-Commerce
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd Project-E-Commerce
   ```
3. Instala las dependencias:
   ```bash
   npm install 
   ```
4. Configura las variables de entorno en un archivo `.env`:
   ```plaintext
   MONGO_URI=<tu_uri_de_mongodb>
   PORT=<puerto_deseado>
   ```
5. Inicia el servidor:
   ```bash
   npm start
   ```

---
# Trabajo hecho y realizado por Leonardo Felipe Stefaniszen Maiczuk.

