function traerInformacionMensaje() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>" + "MESSAGE" + "</th>";
    myTable += "<th>" + "ELIMINAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td> <button onclick='borrarMensaje(" + respuesta[i].idMessage + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarInformacionMensaje() {
    let var2 = {
        messageText: $("#messageText").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://localhost:8080/api/Message/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente");
            window.location.reload()

        }
    });

}

function actualizarInformacionMensajes(idElemento) {
    let myData = {
        idMessage: idElemento,
        messageText: $("#messageText").val()


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacionMensaje();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarMensaje(idElemento) {
    let myData = {
        idMessage: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Message/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionMensaje();
            alert("Se ha Eliminado.")
        }
    });

}

//Modificar

function modificarTablaMensaje() {
    $.ajax({
        url: "http://localhost:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta1) {
            console.log(respuesta1);
            pintarRespuesta1(respuesta1);
        }
    });
}

function pintarRespuesta1(respuesta1) {

    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<th>" + "MESSAGE" + "</th>";
    myTable += "<th>" + "ACTUALIZAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta1.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta1[i].messageText + "</td>";
        myTable += "<td> <button onclick=' actualizarInformacionMensajes(" + respuesta1[i].idMessage + ")'>Actualizar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function actualizarInformacionMensajes(idElemento) {
    let myData = {
        idMessage: idElemento,
        messageText: $("#messageText").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado1").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacionMensaje();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}
