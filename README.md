

# Idico API

Es importante tener instalado en la maquina Docker Destop, para agilizar la instalación

1. Clonar proyecto
2. ```npm install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up --build
```

6. Levantar: ```npm run start:dev```
7. para ver en la bd solo colocar la url localhost o 192 en dbbear y la contraseña  probrar conexión y ya está