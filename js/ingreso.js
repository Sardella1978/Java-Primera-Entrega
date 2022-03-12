debugger

let nombreCompleto = prompt("Ingrese su nombre de usuario ")
let numeroDeSocio = parseInt (prompt ("ingrese número de cliente"))

for (let numeroDeSocio = 1 ; numeroDeSocio < 100 ; numeroDeSocio ++){
    console.log (numeroDeSocio);
}

if ((nombreCompleto == null) && (numeroDeSocio == null))   {
   console.error ("El usuario canceló su identificación")
 }
 else if ((nombreCompleto != "") && (numeroDeSocio >0) && (numeroDeSocio <100)) {
          console.log ("bienvenido", nombreCompleto,) 
 }
 else { console.warn ("usuario o número de cliente incorrecto")

  }

  
