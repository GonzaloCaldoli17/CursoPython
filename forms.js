
    function validarFormulario() {
        var nombres = document.getElementById("nombres").value;
        var correo = document.getElementById("correo").value;
        var mensaje = document.getElementById("mensaje").value;
        var eleccion = document.querySelector('input[name="eleccion"]:checked');

        if (nombres === "" || correo === "" || mensaje === "" || eleccion === null) {
            alert("Por favor, complete todos los campos y seleccione su elección.");
        } else {
            alert('debe completar todos los espacios')
        }
    }

