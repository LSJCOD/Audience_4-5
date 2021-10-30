function traerInformacionAuditorios() {
    $.ajax({
        url: "http://localhost:8080/api/Audience/all",
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
    myTable += "<th>" + "OWNER" + "</th>";
    myTable += "<th>" + "CAPACITY" + "</th>";
    myTable += "<th>" + "DESCRIPTION" + "</th>";
    myTable += "<th>" + "ELIMINAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].owner + "</td>";
        myTable += "<td>" + respuesta[i].capacity + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='borrarAuditorio(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarInformacionAuditorios() {
    let var2 = {
        name: $("#BName").val(),
        owner: $("#BOwner").val(),
        capacity: $("#BCapacity").val(),
        description: $("#BDescription").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://localhost:8080/api/Audience/save",


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

function actualizarInformacionAuditorios(idElemento) {
    let myData = {
        id: idElemento,
        name: $("#BName").val(),
        owner: $("#BOwner").val(),
        capacity: $("#BCapacity").val(),
        description: $("#BDescription").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Audience/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#BName").val("");
            $("#BOwner").val("");
            $("#BCapacity").val("");
            $("#BDescription").val("");
            traerInformacionAuditorios();
            alert("se ha Actualizado correctamente los Auditorios")
        }
    });

}

function borrarAuditorio(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Audience/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionAuditorios();
            alert("Se ha Eliminado.")
        }
    });

}

//Modificar

function modificarTablaAuditorios() {
    $.ajax({
        url: "http://localhost:8080/api/Audience/all",
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
    myTable += "<th>" + "OWNER" + "</th>";
    myTable += "<th>" + "CAPACITY" + "</th>";
    myTable += "<th>" + "DESCRIPTION" + "</th>";
    myTable += "<th>" + "ACTUALIZAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta1.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta1[i].name + "</td>";
        myTable += "<td>" + respuesta1[i].owner + "</td>";
        myTable += "<td>" + respuesta1[i].capacity + "</td>";
        myTable += "<td>" + respuesta1[i].description + "</td>";
        myTable += "<td> <button onclick=' actualizarInformacionAuditorios(" + respuesta1[i].id + ")'>Actualizar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function actualizarInformacionAuditorios(idElemento) {
    let myData = {
        id: idElemento,
        name: $("#BName").val(),
        owner: $("#BOwner").val(),
        capacity: $("#BCapacity").val(),
        description: $("#BDescription").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Audience/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado1").empty();
            $("#id").val("");
            $("#BName").val("");
            $("#BOwner").val("");
            $("#BCapacity").val("");
            $("#BDescription").val("");
            traerInformacionAuditorios();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}
