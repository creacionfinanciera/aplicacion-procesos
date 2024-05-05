// esta será la función de entrada a la aplicación web, es decir, cuando yo ejecute la aplicación web o cuando yo abra la página, lo primero que hará esa página será ejecutar esta función
function doGet() {
    // a través de la clase "HtmlService", utilizaremos el método "createTemplateFromFile('nombre de la página web')", y finalmente evaluamos por medio de "evaluate()" si tenemos Scriptles
    // el método "setTitle" es la misma etiqueta de título que viene por defecto en el HTML, y es el título de la aplicación, entonces si lo ponemos en esta función podemos quitarlo del HTML
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Formulario de proveedores');

}

// entonces con lo anterior lo que conseguimos es que una vez ejecutemos la aplicación, se abra la página "web.html" que se encuentra en el otro archivo

// ahora crearemos una función que lleve el código que tenemos en cada uno de los archivos ".html" al scriptlets que tendremos en la página web principal, y desde la página llamariamos la función dentro del scriptlets
function obtenerDatosHTML(nombre) {

    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}