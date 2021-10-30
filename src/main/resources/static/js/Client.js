function traerInformacionClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
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
    myTable += "<th>" + "EMAIL" + "</th>";
    myTable += "<th>" + "PASSWORD" + "</th>";
    myTable += "<th>" + "NAME" + "</th>";
    myTable += "<th>" + "AGE" + "</th>";
    myTable += "<th>" + "ELIMINAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td> <button onclick='borrarCliente(" + respuesta[i].idClient + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarInformacionClientes() {
    let var2 = {
        email: $("#ClEmail").val(),
        password: $("#ClPassword").val(),
        name: $("#ClName").val(),
        age: $("#ClAge").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://localhost:8080/api/Client/save",


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

function actualizarInformacionCliente(idElemento) {
    let myData = {
        idClient: idElemento,
        email: $("#ClEmail").val(),
        password: $("#ClPassword").val(),
        name: $("#ClName").val(),
        age: $("#ClAge").val()


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idClient").val("");
            $("#ClEmail").val("");
            $("#ClPassword").val("");
            $("#ClName").val("");
            $("#ClAge").val("");
            traerInformacionClientes();
            alert("se ha Actualizado correctamente el cliente")
        }
    });

}

function borrarCliente(idElemento) {
    let myData = {
        idClient: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado.")
        }
    });

}

//Modificar

function modificarTablaClientes() {
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
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
    myTable += "<th>" + "EMAIL" + "</th>";
    myTable += "<th>" + "PASSWORD" + "</th>";
    myTable += "<th>" + "NAME" + "</th>";
    myTable += "<th>" + "AGE" + "</th>";
    myTable += "<th>" + "ACTUALIZAR" + "</th>";
    myTable += "</tr>";
    for (i = 0; i < respuesta1.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta1[i].email + "</td>";
        myTable += "<td>" + respuesta1[i].password + "</td>";
        myTable += "<td>" + respuesta1[i].name + "</td>";
        myTable += "<td>" + respuesta1[i].age + "</td>";
        myTable += "<td> <button onclick=' actualizarInformacionCliente(" + respuesta1[i].idClient + ")'>Actualizar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function actualizarInformacionCliente(idElemento) {
    let myData = {
        idClient: idElemento,
        email: $("#ClEmail").val(),
        password: $("#ClPassword").val(),
        name: $("#ClName").val(),
        age: $("#ClAge").val()

    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado1").empty();
            $("#idClient").val("");
            $("#ClEmail").val("");
            $("#ClPassword").val("");
            $("#ClName").val("");
            $("#ClAge").val("");
            traerInformacionClientes();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

