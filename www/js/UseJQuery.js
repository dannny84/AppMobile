function CallService()
{
    //Creamos la variable que contiene la url del webservice
    var webServiceURL = 'http://localhost:8080/WSPrueba/services/Hola?wsdl';
    //Este es el mensaje SOAP, dentro de las etiquetas <CI>'+ $('#ci').val() +'</CI> hacemos uso de una función JQuery para obtener valor que está en el campo de texto
    //var soapMessage = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><holaMundo xmlns="http://src"></holaMundo></soap:Body></soap:Envelope>';
	var soapMessage = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><saludo xmlns="http://src"><nombre>'+ $('#ci').val() +'</nombre></saludo></soap:Body></soap:Envelope>';
 
    //Llamamos a la función AJAX de JQuery
	
	$.ajax({
        url: "http://localhost:8080/WSPrueba/services/Hola/saludo", 
        type: "POST",
        data: { nombre : "LUCIA" }, 
        success: function(data, textStatus, jqXHR) {
            alert($(data).find("return").text());
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status + " " + jqXHR.statusText);
        }
    });
	
   /* $.ajax({
        url: webServiceURL,
		//url: "plantilla.html",
		async:true,
		//contentType: "application/x-www-form-urlencoded",
		contentType: "text/xml;charset=UTF-8",
		dataType: "xml",
        type: "GET",
        cache: false,
		global: true,
        ifModified: false,
        processData:true,
        //data: soapMessage,
        success: OnSuccess,
		/*success: function(datos){
            alert(datos);
        },
        error: OnError
    });*/
    return false;
}
//Función que se ejecuta si realizó completa la petición
function OnSuccess(data, status, req)
{		//alert("status:asdasd "+status);	
		//Check to see if an object is a plain object (created using "{}" or "new Object").
		//alert(jQuery.isPlainObject(data));
		//alert($.isEmptyObject(data)); 
		//alert(JSON.stringify(data));
		console.log(data);
		//alert("data WSDL: "+data);		
		//alert(req.responseText.getElementsByTagName("ns:return"));

        //Aquí mostramos el valor que aparece en la etiqueta "PrimerNombre" del cuerpo de respuesta
        alert("PRIMER NOMBRE:" + $(req).find("holaMundoResponse").text());
		alert("val NOMBRE:" + req.responseText);
		
}
function OnError(request, status, error)  //Función que se ejecuta si ocurre algún error
{
    alert(status);
}
$(function() {
    //Evita problemas de cross-domain con JQuery
    jQuery.support.cors = true;
});