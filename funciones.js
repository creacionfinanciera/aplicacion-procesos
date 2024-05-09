// conecta con el libro "BD Proveedores" de google sheets
const libroProveedores = SpreadsheetApp.openById("131OSRQkhlYVPAY9cM7K89A1jr_YHmL-2bX3ygjoTzSc");
const hojaProveedores = libroProveedores.getSheetByName("Proveedores");

// esta será la función de entrada a la aplicación web, es decir, cuando yo ejecute la aplicación web o cuando yo abra la página, lo primero que hará esa página será ejecutar esta función
function doGet() {
    // a través de la clase "HtmlService", utilizaremos el método "createTemplateFromFile('nombre de la página web')", y finalmente evaluamos por medio de "evaluate()" si tenemos Scriptles
    // el método "setTitle" es la misma etiqueta de título que viene por defecto en el HTML, y es el título de la aplicación, entonces si lo ponemos en esta función podemos quitarlo del HTML
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Formulario de proveedores');

}

// entonces con lo anterior lo que conseguimos es que una vez ejecutemos la aplicación, se abra la página "web.html" que se encuentra en el otro archivo

// programamos la función "doPost" para que cuando hagamos clic sobre el botón "Crear proveedor", envíe a la misma página a través del método "Post" información a traves de los campos nombre y correo
// tengamos en cuenta que los datos que enviemos a través de "Post", se van a recibir aqui como parámetro con el nombre que le pongamos, es decir, dentro de "datos" vamos a tener el nombre y el correo que hayamos escrito en el formulario  
function doPost(datos) {
    // y para poder acceder a cada uno de esos datos serian tan simple como poner el nombre del parámetro, ., parameter, ., y el nombre del campo en el formulario
    // con esto accedemos al atributo name de los campos del formulario
    // insertarContacto(datos.parameter.nombre, datos.parameter.identificacion, datos.parameter.municipio);
    // si usamos el método "dialog", para que no se recargue la página cuando se crea un contacto, la anterior línea de código ya no es necesaria


    // cuando se ejecuta el post, lo que hace es cargar de nuevo la página, inserta el nuevo conbtacto pero la página se queda en blanco, y como lo que quiero es seguir trabajando con la página web, entonces la vuelvo a cargar
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Formulario de proveedores');

}



// ahora crearemos una función que lleve el código que tenemos en cada uno de los archivos ".html" al scriptlets que tendremos en la página web principal, y desde la página llamariamos la función dentro del scriptlets
function obtenerDatosHTML(nombre) {

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

// esta es la función que obtendrá los datos directamente de la hoja de cálculo de google sheets
function obtenerContactos() {

    const rangoProveedores = hojaProveedores.getDataRange().getValues();
    return rangoProveedores;

}

// esta es la función que inserta un nuevo contacto
// Nota: el orden de los parametros, es el orden en el que se insertaran los registros en la base de datos!
function insertarContacto(identificacion, nit, dv, razonSocial, direccion, municipio, departamento, correo, celular) {
    
    hojaProveedores.appendRow([identificacion, nit, dv, razonSocial, direccion, municipio, departamento, correo, celular]);

}

// esta es la función que borra un contacto existente
function borrarContacto(numFila) {

    hojaProveedores.deleteRow(numFila);

}

// esta es la función que modifica un contacto existente

function modificarContacto(numFila, datos) {

    let celdas = hojaProveedores.getRange('A'+numFila+':I'+numFila);
    // el método setValues recibe una matriz, por lo tanto ponemos doble corchete, en este caso sería una matriz de una unica fila
    celdas.setValues([[datos.identificacion, datos.nit, datos.dv, datos.razonSocial, datos.direccion, datos.municipio, datos.departamento, datos.correo, datos.celular]]);

}