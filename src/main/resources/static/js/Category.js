function traerInformacionCategorias() {
    $.ajax({
        url: "http://132.145.221.82:8080/api/Category/all",
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
        myTable += "<th>" + "NAME" + "</th>";
        myTable += "<th>" + "DESCRIPTION" + "</th>";
        myTable += "<th>" + "ELIMINAR" + "</th>";
        myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='borrarCategoria(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarInformacionCategorias() {
    let var2 = {
        name: $("#CName").val(),
        description: $("#CDescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://132.145.221.82:8080/api/Category/save",


        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

function actualizarInformacionCategorias(idElemento) {
    let myData = {
        id: idElemento,
        name: $("#CName").val(),
        description: $("#CDescription").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.145.221.82:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#CName").val("");
            $("#CDescription").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarCategoria(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.145.221.82:8080/api/Category/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado.")
        }
    });

}

//Modificar

function modificarTablaCategorias() {
    $.ajax({
        url: "http://132.145.221.82:8080/api/Category/all",
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
        myTable += "<th>" + "NAME" + "</th>";
        myTable += "<th>" + "DESCRIPTION" + "</th>";
        myTable += "<th>" + "ACTUALIZAR" + "</th>";
        myTable += "</tr>";
    for (i = 0; i < respuesta1.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta1[i].name + "</td>";
        myTable += "<td>" + respuesta1[i].description + "</td>";
        myTable += "<td> <button onclick=' actualizarInformacionCategorias(" + respuesta1[i].id + ")'>Actualizar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function actualizarInformacionCategorias(idElemento) {
    let myData = {
        id: idElemento,
        name: $("#CName").val(),
        description: $("#CDescription").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.145.221.82:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado1").empty();
            $("#id").val("");
            $("#CName").val("");
            $("#CDescription").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}
