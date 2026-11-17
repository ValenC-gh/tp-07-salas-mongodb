Trabajo práctico 07 Persistencia inicial de reservas

Este practico es la continuacion del tp6 salas de estudio y incorporamos mongoose para conectar con mongodb atlas asi almacenamos las reservas de forma persistente.

luego de clonar y descargar el proyecto para instalar las dependencias ponemos el codigo 

npm install


Para preparar MongoDB Atlas:

Necesitamos registrarnos y crear el proyecto con la opcion de cluster gratuito.
Configurar el ususario de la base de datos con los permisos necesarios y autiorizar la direccion ip actual que nos permitira conectarnos.
Obtener la URI que nos brinda Atlas y copiarla en .env para poder conectarse 

src/index.js: inicia la aplicación Express.
src/app.js: configura las rutas y middleware.
src/config/entorno.js: obtiene y valida las variables de entorno.
src/config/base-datos.js: conecta y desconecta MongoDB mediante Mongoose.
src/modelos/reserva.js: define el esquema y modelo de las reservas.
src/servicios/reservas.js: administra las reservas temporales del sitio.
src/controladores/reservas.js: genera las respuestas HTTP.
src/rutas/reservas.js: organiza las rutas de reservas.
src/middleware/: contiene los middleware de identificación, medición y validación.
scripts/comprobar-conexion.js: comprueba la conexión.
scripts/crear-reserva.js: guarda una reserva en MongoDB.
scripts/listar-reservas.js: consulta las reservas persistentes.

Programas y comandos

.Comprobar conexión
node --env-file=.env scripts/comprobar-conexion.js - npm run comprobardb

.Crear una reserva
node --env-file=.env scripts/crear-reserva.js - npm run crear

.Listar reservas
node --env-file=.env scripts/listar-reservas.js - npm run listar

.Ejecutar el sitio web
npm start

.Comprobar calidad
npm run format
npm run check


