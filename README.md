

# Idico API

Es importante tener instalado en la maquina Docker Destop, para agilizar la instalación

1. Clonar proyecto
2. Instalar Dependencias
```npm install```
3. Cambiar las variables de entorno
4. Levantar la base de datos
```
docker-compose up --build
```

5. Inicializar: 
```npm run start:dev```
6. Poblar la base de datos con la semilla, use los siguientes EndPoint:
```
GET http://localhost/api/character
GET http://localhost/api/movies
GET http://localhost/api/genres
```
7. Los EndPoint Disponibles son:
Autenticación por autorization barer Token
```
POST http://localhost/api/auth/register //Crea un usuario y devuelve el token
POST http://localhost/api/auth/login //Registra un usuario y devuelve el token
```
CRUD Tabla Character
```
POST http://localhost/api/character //Crear personaje
GET http://localhost/api/character  //Obtener todos los personajes
GET http://localhost/api/character?movies=Cars  //Obtiene los personajes asociados a la pelicula cars
GET http://localhost/api/character?age=32  //Obtener todos los personajes con edad 32
DELETE http://localhost/api/character?name=test1 //Elimina el personaje test 1 
```
CRUD Tabla Movies
```
POST http://localhost/api/movies //Crear la pelicula 
GET http://localhost/api/movies  //Obtener todos las peliculas
GET http://localhost/api/movies?genre=drama  //Obtiene los peliculas asociados al genero drama
GET http://localhost/api/movies?order=ASC  //Obtener todas las peliculas ordenadas
DELETE http://localhost/api/movies?name=test17 //Elimina el pelicula test17
```

-------------------------------------------------------------------------------------------------------------------------------------------------------------
Prueba Técnica - Desarrollo con NodeJs y React 
Objetivo: 
Desarrollar una API que permita explorar el universo Disney, facilitando conocer y modificar los  personajes, y entender las películas en las que estos participaron. Además, deberá exponer la  información de manera que cualquier frontend pueda consumirla. 
Herramientas a Utilizar: 
• NodeJs 
• ExpressJs 
• Base de datos MYSQL 
• React con @mui React Text Field component - Material UI 
• Patrón REST para rutas 
• Librería Sequelize 
Instrucciones de Entrega: 
Publicar el código en GitHub y compartir con el usuario johanCarvajalRPA. Se evaluarán los commits y el  manejo de ramas. 
Realice una segregación en tareas de los requerimientos y proponga una estimación para las mismas.  Utilice el README de GitHub para este propósito. 
Requerimientos Técnicos: 
A continuación, se presenta una serie de requerimientos que sirven como orientación. No es necesario  implementar todos, seleccione los que considere pertinentes para la entrevista, teniendo en cuenta que  se revisará la organización y estructura del código. 
Modelado de Base de Datos: 
Personaje: Debe incluir: 
• Imagen 
• Nombre 
• Edad 
• Peso 
• Historia 
• Películas o series asociadas 
Película o Serie: Debe incluir: 
• Imagen 
• Título
• Fecha de creación 
• Calificación (del 1 al 5) 
• Personajes asociados 
Género: Debe incluir: 
• Nombre 
• Imagen 
• Películas o series asociadas 
Autenticación de Usuarios: Para hacer peticiones a los siguientes endpoints, el usuario necesita un  token que obtendrá al autenticarse. 
• Endpoints: 
o /auth/login 
o /auth/register 
Listado de Personajes: Debe mostrar: 
• Imagen 
• Nombre 
• Endpoint: /characters 
Operaciones CRUD de Personajes: Incluir creación, edición (ambas con todos los atributos del modelo) y  eliminación soft usando paranoid de Sequelize. 
Detalle de Personaje: Mostrar todos los atributos y las películas o series relacionadas. 
Búsqueda de Personajes: Permitir buscar por nombre y filtrar por edad, peso o películas/series.  Ejemplos: 
• GET /characters?name=nombre 
• GET /characters?age=edad 
• GET /characters?movies=idMovie 
Listado de Películas: Mostrar imagen, título y fecha de creación. 
• Endpoint: GET /movies 
• Detalle de Película/Serie con Personajes: Devolver todos los campos de la película o serie y los  personajes asociados. 
Operaciones CRUD de Películas/Series: Creación, edición y eliminación soft. 
Búsqueda de Películas/Series: Permitir   buscar por título, filtrar por género y ordenar por fecha de  creación (ascendente o descendente). Ejemplos:
• GET /movies?name=nombre • GET /movies?genre=idGenero • GET /movies?order=ASC | DESC 

