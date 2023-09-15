<h1>
Descripcion del Proyecto
</h1>

Este es el cliente de una pequeña aplicación para el control de pagos mensuales de una academia de artes marciales 

tegnologias
-React 
-React Router
-ViteJS
-NodeJS
-HTML 
-CSS3

Instrucciones para uso
en el archivo .env
agregar nuestro propio LocalStorage

para instalar las dependencias usadas, usar el siguiente comando desde la terminal
> npm install

Para abrir el servidor basta con poner desde la terminal
> npm run dev

Datos a Considerar

El BackEnd es una REST API hecha con Java SpringBoot que lo podemos encontrar en el repositorio
'https://github.com/Victrex/ClanShinobyAPI.git'

y la base de datos esta hecha en SQL SERVER, el script estará en la carpeta raíz de este repositorio en la carpeta BD junto con la copia de seguridad

debemos crear un usuario dentro de SQL Management
nombre de usuario = clanshinoby
contraseña = Shinoby77 



capturas de pantalla
<h1>Pagina principal</h1> 
-Aqui apareceran los resultados de todos los pagos realizados, tanto un historial de pagos como el pago mensual realizado por alumno 

![Pagina Principal 1.1](image.png)
![Pagina Principal 1.2](image-2.png)


<h1>Pagina Pagos</h1> 
-Desde aqui se seleccionará un alumno, al cual se le agregará el monto que haya pagado en dicho momento

![Pagos](image-1.png)
![Modal Pago](image-3.png)


<h1>Alumnos</h1> 
-Este es un CRUD para los alumnos que tenga dicha academia

![Alumnos](image-4.png)
![Modal Formulario Alumnos](image-5.png)