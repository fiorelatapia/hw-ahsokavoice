let popup=document.getElementById("popup");
let popupdelete=document.getElementById("popupdelete");

function mostrarVentanaEmergente(){
    popup.classList.add("MostrarVentanaEmergente");
    
}

function CerrarVentanaEmergente(){
    popup.classList.remove("MostrarVentanaEmergente");
    
}

function mostrarVentanaEmergenteDelete(){
    popupdelete.classList.add("MostrarVentanaEmergenteDelete")
}

function CerrarVentanaEmergenteDelete(){
    popupdelete.classList.remove("MostrarVentanaEmergenteDelete")
}




function validarContraseña() {
    var contraseñaActual = document.getElementById("contraseñaActual").value;
    var nuevaContraseña = document.getElementById("nuevaContraseña").value;
    var confirmarNuevaContraseña = document.getElementById("confirmarNuevaContraseña").value;
    
    if (nuevaContraseña !== confirmarNuevaContraseña) {
        alert("La nueva contraseña y la confirmación no coinciden");
        return;
    }
    
    alert("Contraseña cambiada exitosamente");
    CerrarVentanaEmergente();
}


