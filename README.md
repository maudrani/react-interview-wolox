# Wolox - Interview
(13/12/2020)

## This is a technical React challenge provided by Wolox 

## INFO (ES):

### Introducción

La finalidad del ejercicio es desarrollar una aplicación web. La web consiste en una
página inicial o landing page (cuyo diseño y assets se te enviarán en conjunto con
este ejercicio), una pantalla de registro y un listado de tecnologías con filtros. El
registro y el listado no tienen un diseño definido, por lo cual esperamos que lo hagas
por tu cuenta, y si bien no esperamos un diseño superador, si es deseable que sean
pantallas usables. Para obtener los datos tanto del registro como del listado,
tenemos la siguiente API.

Esperamos que el código esté en un repositorio de git, en el cual haya al menos un
commit por pantalla.


### Requerimientos y Restricciones

● No utilizar Bootstrap ni ninguna librería con clases de CSS predefinidas.
● Utilizar flexbox como principal herramienta para definir el layout (no usar
tablas).
● Hacer responsive las pantallas hasta 300px.
● Configurar un linter.
● Los botones deben tener algún efecto en hover.
● Utilizar al menos alguna animación.


### Opcionales

● Utilizar SCSS y/o SCSS modules
● Utilizar CSS Grid
● Hacer la web accesible


### Landing

Criterios de aceptación

● Respetar el diseño enviado.
● Al seleccionar un link de la barra superior, se debe scrollear a la sección
correspondiente.
● Al clickear el botón de “Síguenos” debe enviar el usuario al twitter de Wolox.
● El botón de “Conocer más” debe enviar al usuario a la página de Wolox.
● El botón de Registrarse debe enviar al usuario a la pantalla de Registro. (En el
diseño este botón aparece como Login, no es necesario hacer el login de la
aplicación)


### Registro

Criterios de aceptación

● Se deberán enviar al endpoint los siguientes campos: nombre, apellido, país,
provincia (Departamento), email, teléfono y contraseña.
● El nombre y apellido deben ser 2 campos distintos. Cada uno con un máximo
de 30 caracteres.
● Los países deben ser un listado de mínimo 5 elementos. Ejemplo: Argentina,
Chile, Colombia, México, Perú.
● Las provincias deben ser listados de mínimo 5 elementos, relacionados con los
países. Es decir, solo se deben ver las 5 provincias del país seleccionado
Ejemplo:
○ Si seleccionó como país a Argentina, las provincias que se deberían
desplegar son: Buenos Aires, Córdoba, Santa Fe, Mendoza y Chaco.
○ Si seleccionó como país a Colombia, las provincias que se deberían
desplegar son: Bolívar, Boyacá, Caldas, Cauca y Magdalena.
Nota: Las provincias pueden no ser reales. Pero deben ser diferentes para
cada país.
● El email debe tener un formato válido.
● El teléfono debe aceptar solo valores numéricos y un máximo de 10 caracteres.
● La contraseña debe ser alfanumérica con un mínimo de 6 caracteres.
● Debe existir un campo para repetir la contraseña, el cual no será enviado a la
api, pero deberá ser igual a la contraseña.
● Debe existir un checkbox de “Acepto Términos y Condiciones” con un link a
una página de términos y condiciones que se encontrara en TODO.
● El usuario registrado debe ser guardado en LocalStorage, y la próxima vez que
el usuario se conecte debe ingresar directamente al listado. El usuario no
deberá poder ir a la pantalla de registro, siendo redirigido al listado. En la
Landing no debe verse el botón de Registro.
● Todos los campos son requeridos. En caso de que alguno no cumpla con las
validaciones el botón para submitear quedará deshabilitado y se le deberá dar
feedback al usuario de qué validación no está cumpliendo.


### Listado

Criterios de aceptación

● Listar los elementos retornados por el endpoint con todos sus datos.
● Poder filtrar los elementos por nombre y por si son Front-end, Back-end o
Mobile, cambiando el resultado a medida que se tipea. Si el filtro está vacío se
deben mostrar todos los elementos.
● Poder ordenar los elementos por nombre, tanto ascendente como
descendentemente.
● No usar paginación.
● Mostrar debajo del listado la suma total de tecnologías siendo mostrada.
● Cada tecnología debe contar con una opción de favorito o me gusta, que
permita indicar si la tecnología es del agrado del usuario. La selección de las
mismas deben quedar persistidas en LocalStorage.
● En el navbar deben aparecer la cantidad de tecnologías seleccionadas como
favoritas cuando por lo menos una se encuentre seleccionada, es decir, si no
se ha seleccionado ninguna no debe aparecer nada.


### React

Criterios de aceptación

● Implementar una solución de routing para poder marcar con un flag rutas
privadas y que el usuario no conectado no pueda acceder a ellas.
● Usar un state management a eleccion propia (Redux/Context/Recoil/etc).
● Implementar test de componente de listado con Jest y react testing library.
● Implementar lazy loading por screen con React.Lazy y React.Suspense.
● Utilizar react hooks.

Como requerimientos opcionales se establecen los siguientes:

● Utilizar i18n para todos los textos de la landing y agregar un botón para
cambiar de idioma (español/inglés).
● Utilizar Error Boundaries.
● Hacer deploy la aplicación a un ambiente símil productivo.
