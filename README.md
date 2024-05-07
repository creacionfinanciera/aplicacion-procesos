# aplicacion-procesos

Este repositorio es para crear una aplicación en el servidor de google, que permita realizar varios procesos para la empresa Veggies Gourmet.

## Introducción 

Este repositorio es para crear una aplicación web a través de `clasp google apps script`.

La documentación de `clasp` en google se encuentra en el siguiente link: `https://developers.google.com/apps-script/guides/clasp?hl=es-419`.
`clasp` te permite desarrollar tus proyectos de Apps Script de forma local. Puedes escribir código en tu propia computadora y subirlo a Apps Script cuando termines. También puedes descargar proyectos existentes de Apps Script para poder editarlos cuando estés sin conexión. Como el código es local, puedes usar tus herramientas de desarrollo favoritas, como git, cuando compiles proyectos de Apps Script.

## Instalación

`clasp` se escribe en Node.js y se distribuye a través de la herramienta npm. Antes de usar clasp, debes tener instalada Node.js 4.7.4 o versiones posteriores. La instalación de Node.js requiere privilegios de administrador.

1. `npm install @google/clasp -g` => para instalar clasp en la terminal
2. `npm install --save @types/google-apps-script` => para instalar el autocompletado de google apps script
3. `https://script.google.com/home` => vamos a este link
4. Vamos a `Configuración`
5. Damos clic en `API de Google Apps Script`
6. Activamos la API si se encuentra desactivada

## Creación de proyecto

1. `clasp login` => nos sirve para inciar sesión y autorizar la administración de los proyectos de google apps script
2. Nos lleva al navegador, seleccionamos la cuenta de google y autorizamos todos los permisos
3. `clasp create aplicacion-procesos` => ahora creamos desde la terminal nuestro proyecto
4. Y seleccionamos el tipo de proyecto, en esta ocasión será un proyecto de google sheets
5. Automaticamente nos crea en VSC dos archivos:
    - `{} .clasp.json` => que nos indica el ID del proyecto
    - `{} appsscript.json` => donde estan los metadatos del proyecto actual, este es el unico archivo que se carga de manera oculta
6. Si vamos a la pantalla de "Mis proyectos" en google apps script, observaremos que nos creo el proyecto

## Actualización VSC - GAS

1. Creamos un archivo de javascript `funciones.js`, para que funcione bien el autocompletado de apps script, y despues cuando subamos los cambios, pasara a la plataforma de apps script como `funciones.gs`
2. Escribimos una función con código en VSC y guardamos
3. `clasp push` => para subir desde Visual Studio Code los cambios a google apps script
4. Ahora escribimos código en la plataforma de Google Apps Script, y creamos un archivo más `web.html`
5. `clasp pull` => para bajar los cambios desde la plataforma de google apps script hacia Visual Studio Code

## Clonación de proyecto

1. Copiamos el ID del proyecto existente en la plataforma de google apps script
2. Vamos a "Mis proyectos"
3. Copiamos el ID: `1liUQrhBRQwVQfxBYmV4AY3ZtCv_1Fnt1aeUxn00ObCTe_BYoXjaS6EdG`
4. `mkdir` + `nombre del proyecto` => para crear la carpeta del proyecto en mi entorno local
5. `code .` => para abrir VSC desde la carpeta del nuevo proyecto
6. `clasp clone 1liUQrhBRQwVQfxBYmV4AY3ZtCv_1Fnt1aeUxn00ObCTe_BYoXjaS6EdG` => para clonar el proyecto y bajarlo a mi entorno de trabajo local
7. Visualizamos en Visual Studio Code como nos baja todos los archivos del proyecto
8. Si hacemos cambios a los archivos en VSC
9. Hacemos `clasp push`, y nos sube los cambios hechos a la plataforma de GAS

## Prueba del proyecto

1. Vamos al proyecto en GAS
2. Damos clic en el `editor`
3. Clic al boton azul `Implementar`
4. Seleccionamos `Nueva implementación`
5. Clic en `Seleccionar tipo`
6. Seleccionamos el tipo `Aplicación web` en este caso
7. En descripción, colocamos versión `v1.0`
8. Copiamos o Damos clic en la URL d ela aplicación web para ver la aplicación, pero esta aplicación es la definitiva, entonces si nosotros seguimos haciendo cambios no podremos verlos reflejados en esta URL
9. Entonces en vez de seleccionar 'Nueva implementación' seleccionamos `Implementación de prueba` y este link si me llevara a la URL que me imprimirá los cambios que ire haciendo poco a poco, cada vez que recargo la página
10. Cuando estemos trabajando y haciendo cambios en VSC, es buena práctica, hacer primero `clasp pull` y después hacer `clasp push`, de esta manera en la terminal no pregunta si deseamos sobreescribir los archivos, y sencillamente despues recargamos la página dónde se encuentra la aplicación y se visualizan los cambios. Pero es importante saber que al hacer pull me actualiza la información con esta en la plataforma de GAS, entonces tener cuidado de no borrar lo ultimo que hemos hecho. Este problema tiene que ver con la actualización correcta del archivo `appsscript.json`.

## Creación de archivos

1. Todos los archivos de javascript, html y css deben crearse con extensión `.html`
2. Creamos el archivo `css.html` que dentro tendra la etiqueta <style></style>
3. Creamos el archivo `js.html` que dentro tendra la etiqueta <script></script>
4. Para además de estos archivos, para dividir las partes de la página web, vamos a crear tres archivos adicionales, uno para el header, uno para el main y otro para el footer, de este modo vamos a separar del código tanto la cabecera como el pie de página
5. Creamos el archivo `header.html` que dentro tendra la etiqueta <header></header>
6. Creamos el archivo `footer.html` que dentro tendra la etiqueta <footer></footer>
7. Creamos el archivo `main.html` que dentro tendra la etiqueta <main></main>

## Conexión de archivos con la página web

1. Esto lo haremos mediante scriptlets `<?!= ?>` en la página web principal `web.html`, para que se incluya en éste el código de otros archivos secundarios a través de una función que estaría en el archivo `funciones.js`
2. En el `head` de la página principal insertamos el scriptlets de `CSS y Bootstrap`
3. Y en el `body` de la página principal insertamos los scriptlets del `Header`, el `Main`, el `Footer` y `Javascript`
4. Entonces lo único que haremos es modificar cada uno de los archivos individuales para ir modificando la aplicación

## Conexión con Bootstrapt

1. Vamos a la página de Bootstrapt 5, get started
2. Copiamos el link con la librería de css de Bootstrapt: `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">`
3. Lo pegamos en la parte superior del archivo `css.html`
4. Copiamos el link con la librería de javascript Bootstrapt: `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>`
5. Lo pegamos en la parte superior del archivo `css.html`
6. Vamos a la sección de iconos, clic en install
7. Copiamos el link del CDN para los iconos: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`
8. Lo pegamos en la parte superior del archivo `css.html`

## Conexión con google sheets

Después de escribir las funciones y los métodos que traeran del archivo de google sheets los datos, crearan la tabla e insertaran los datos en la tabla, y hacer `clasp push` y recargar la página, me sale un error que dice "Se necesita autorización para realiza esta acción", y esto es que como ahora estoy accediendo a una hoja de cálculo de google sheets, necesito los permisos para acceder a esa hoja de cálculo.

Entonces, vamos al editor de GAS, y damos clic en el archivo `funciones.gs` y ejecutamos la función `doGet` para que nos pida revisar los permisos, y ahí autorizamos la cuenta de correo `desarrolloveggies@gmail.com`.

Ya después podemos recargar la página, y nos aparece la tabla con los datos.

## Creación de ícono de procesamiento

1. Vamos a la página `https://loading.io/css/`
2. Seleccionamos uno de los íconos de procesamiento que ahí se mencionan
3. Se despliega una ventana con el código CSS y lo copiamos

Nota: Al correr el código de éste punto me saca un error, y no logre solucionarlo, entonces lo dejo comentado.










