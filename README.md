# Tienda Natural E-Commerce

Este es un E-Commerce de alimentos agroecológicos hecho integramente con ReactJS utilizando una serverless data base.


# Librerías

El proyecto no utiliza librerías por fuera de [React](https://reactjs.org/) y [React-Router-DOM](https://www.npmjs.com/package/react-router-dom)
Todo el styling esta hecho utilizando solamente css.


# Base de Datos

La base de datos de la aplicación está almacenada en Firestore, servicio de [Google Firebase](https://firebase.google.com/)
Las credenciales de acceso a Firestore están protegidas en un archivo .env.local

# Funcionalidades

Las siguientes son las funcionalidades actualmente disponibles en la aplicación:

## Navegación de productos disponibles

En el inicio de la aplicación se despliega una lista de todos los items disponibles en la tienda, tengan stock o no.

## Navegación de productos por categoría

En la barra de navegación hay un menú en el que se pueden filtrar los productos según sus categorías.

## Detalle de producto

Haciendo click sobre un producto se navega a un detalle del producto en el que aparece una breve descripción del mismo y permite agregar la cantidad deseada al carrito de compra en el caso de haber stock suficiente. Si el stock es 0 el boton aparece deshabilitado. La cantidad que se puede agregar al carrito está limitada al stock del mismo. Una vez agregado el producto al carrito el boton y el contador desaparecen y en su lugar el usuario puede elegir entre ir al carrito para finalizar la compra o seguir navegando la tienda.

## Carrito de compras

Al agregar un producto al carrito de compra, se hace visible un widget a la derecha en la barra de navegación que puede ser clickeado en cualquier momento para acceder al carrito. El widget indica en numeros la cantidad total de items agregados en al momento. Si se vacía el carrito el widget deja de ser visible.
Una vez en la pantalla del carrito, el usuario puede eliminar productos, vaciar todo el carrito o finalizar la compra.

## Checkout

Al hacer click en "Finalizar Compra" se accede a la pantalla de checkout en la cual aparece la lista final de productos, ya sin la posibilidad de editarla y un formulario en el que se piden los datos del usuario para generar la orden. El formulario tiene los siguientes campos con las siguientes condiciones:

 - Nombre: Campo obligatorio
 - Apellido: Campo obligatorio
 - DNI: Campo obligatorio y debe ser numérico
 - Teléfono: Campo obligatorio y debe ser numérico
 - E-mail: Campo obligatorio y debe cumplir con el formato de email
 - Repetir E-Mail: Campo obligatorio y debe cumplir con el formato de email

Si se completa el formulario correctamente, el usuario debe hacer click en el boton "Comprar" el cual genera la orden en la base de datos y le provee el número de ID de la misma al usuario. Si algo falla en la generación de la orden se le muestra un mensaje al usuario que le avisa del error y le pide intentarlo nuevamente más tarde. Si la orden se genera correctamente se vacía el carrito automáticamente.