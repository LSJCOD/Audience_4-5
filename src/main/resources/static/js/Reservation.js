function traerInformacionReservacion() {
    $.ajax({
        url: "http://132.145.221.82:8080/api/Reservation/all",
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
    myTable += "<th>" + "STARDATE" + "</th>";
    myTable += "<th>" + "DEVOLUTIONDATE" + "</th>";
    myTable += "<th>" + "STATUS" + "</th>";
    myTable += "<th>" + "ELIMINAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td> <button onclick='borrarReservacion(" + respuesta[i].idReservation + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarInformacionReservacion() {
    let var2 = {
        startDate: $("#RStardate").val(),
        devolutionDate: $("#RDevolutiondate").val(),
        status: $("#RStatus").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://132.145.221.82:8080/api/Reservation/save",


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

function actualizarInformacionReservacion(idElemento) {
    let myData = {
        idReservation: idElemento,
        startDate: $("#RStardate").val(),
        devolutionDate: $("#RDevolutiondate").val(),
        status: $("#RStatus").val()


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.145.221.82:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#RStardate").val("");
            $("#RDevolutiondate").val("");
            $("#RStatus").val("");
            traerInformacionReservacion();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function borrarReservacion(idElemento) {
    let myData = {
        idReservation: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.145.221.82:8080/api/Reservation/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionReservacion();
            alert("Se ha Eliminado.")
        }
    });

}

//Modificar

function modificarTablaReservacion() {
    $.ajax({
        url: "http://132.145.221.82:8080/api/Reservation/all",
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
    myTable += "<th>" + "STARDATE" + "</th>";
    myTable += "<th>" + "DEVOLUTIONDATE" + "</th>";
    myTable += "<th>" + "STATUS" + "</th>";
    myTable += "<th>" + "ACTUALIZACION" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta1.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta1[i].startDate + "</td>";
        myTable += "<td>" + respuesta1[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta1[i].status + "</td>";
        myTable += "<td> <button onclick=' actualizarInformacionReservacion(" + respuesta1[i].idReservation + ")'>Actualizar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function actualizarInformacionReservacion(idElemento) {
    let myData = {
        idReservation: idElemento,
        startDate: $("#RStardate").val(),
        devolutionDate: $("#RDevolutiondate").val(),
        status: $("#RStatus").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://132.145.221.82:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado1").empty();
            $("#idReservation").val("");
            $("#RStardate").val("");
            $("#RDevolutiondate").val("");
            $("#RStatus").val("");
            traerInformacionReservacion();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}
