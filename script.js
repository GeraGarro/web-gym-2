document.getElementById("btn__registro").addEventListener("click",registro);
document.getElementById("btn__inicio-sesion").addEventListener("click",InicioSesion);

 window.addEventListener("resize",anchoPagina);

var formulario_login =document.querySelector(".formulario__login");
var formulario_registro=document.querySelector(".formulario__registro");
var contenedor_login_registro = document.querySelector(".contenedor__login-registro");

var cajaTrasera_login =document.querySelector(".caja__trasera-login");
var cajaTrasera_registro=document.querySelector(".caja__trasera-registro");

function anchoPagina(){
    if(window.innerWidth>850){
        cajaTrasera_login.style.display="block";
        cajaTrasera_registro.style.display="block";
    }
    else{;

        cajaTrasera_registro.style.display="block";
        cajaTrasera_registro.style.opacity="1";
        cajaTrasera_login.style.display="none";
        formulario_login.style.display="block";
        formulario_registro.style.display="none";
        contenedor_login_registro.style.left="0px";
    }

}

anchoPagina();

function InicioSesion(){   
    if(window.innerWidth > 850){
formulario_registro.style.display ="none";
contenedor_login_registro.style.left ="0px";
formulario_login.style.display="block";
cajaTrasera_registro.style.opacity="1";
cajaTrasera_login.style.opacity="0";
}else{
    formulario_registro.style.display ="none";
    contenedor_login_registro.style.left ="0px";
    formulario_login.style.display="block";
    cajaTrasera_registro.style.display="block";
    cajaTrasera_login.style.display="none";

}
}


function registro(){   
    if(window.innerWidth > 850){
formulario_registro.style.display ="block";
contenedor_login_registro.style.left ="450px";
formulario_login.style.display="none";
cajaTrasera_registro.style.opacity="0";
cajaTrasera_login.style.opacity="1";
}
else{
    formulario_registro.style.display ="block";
    contenedor_login_registro.style.left ="0px";
    formulario_login.style.display="none";
    cajaTrasera_registro.style.display="none";
    cajaTrasera_login.style.display="block";
    cajaTrasera_login.style.opacity="1";
}

}