

# Idico API

Es importante tener instalado en la maquina Docker Destop, para agilizar la instalación

1. Clonar proyecto
2. ```npm install```
3. Cambiar las variables de entorno
4. Levantar la base de datos
```
docker-compose up --build
```

5. Levantar: ```npm run start:dev```
6. Poblar la base de datos con la semilla, use los siguientes EndPoint:
```
GET http://localhost/api/character
GET http://localhost/api/movies
GET http://localhost/api/genres
```
7. Los EndPoint Disponibles son:
```
POST http://localhost/api/character //crear personaje
```


