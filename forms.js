
function capturarDatosFormulario(){
    const objetoInfo={
        nombre:"",
        email:"",
        mensaje:"",
        socio:"",
    }

    const nom=document.querySelector("#nombres");
    const mesj=document.querySelector("#text");
    const email=document.querySelector('#correo')
    const eleccion=document.querySelectorAll("[name=eleccion]")

    objetoInfo.nombre=nom.value;
    objetoInfo.mensaje=mesj.value;
    objetoInfo.email=email.value;

    eleccion.forEach(socio=>{
        if(socio.checked){
            objetoInfo.socio=socio.id;
        }
    })

    return objetoInfo;

}

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();


    const datos=capturarDatosFormulario();
    console.log(datos);

   const errores =validarInformacion(datos);
   console.log(errores);

   renderizaoErrores(errores);

   mostrarExito(errores);
})

function validarInformacion(usuario){
    let errores=[];

    if(usuario.nombre.length < 3 || !isNaN(usuario.nombre) ){
        errores.push("el nombre debe tener al menos 3 caracteres y ser un texto")
    }
    if(usuario.socio == ""){

        errores.push('Debe seleccionar si es socio o no')
        
    }

    return errores;
}


function renderizaoErrores (listado){

    const Errores = document.querySelector("#errores");

    if(Errores){
        Errores.remove();
    }

    if(listado.length>0){
        const divTemplate=document.createElement("div");
        divTemplate.setAttribute("id","errores");
        divTemplate.style="background:rgba(255,0,0,0.2);padding:.5rem 1em; color: red;margin:.5rem 0;"
        listado.forEach(error=>{
            divTemplate.innerHTML+=`<p><small>${error}</small></p>`
        });

        form.appendChild(divTemplate);
    }
}



function mostrarExito(listado){
    if(listado == 0){
        const divTemplate=document.createElement("div");
        // divTemplate.setAttribute("id","exito");
        divTemplate.style="background:rgba(0,255,0,0.2);padding:.5rem 1em; color: green;margin:.5rem 0;"
       divTemplate.innerHTML +=`<p>Formulario completado con exito!</p>`
       
        form.appendChild(divTemplate);

        const boton = document.querySelector('button');
        boton.setAttribute('disabled','')

        setTimeout(()=>{
            divTemplate.remove();
            boton.removeAttribute('disabled');
            form.reset();
        },4000);
    }
}