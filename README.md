

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
DELETE http://localhost/api/movies?name=Elemental //Elimina el pelicula Elemental
```


