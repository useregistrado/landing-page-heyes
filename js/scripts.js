// alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height)
//javascript:location.reload(true)

function validarForm() {
  var nombre = document.getElementById('nombre_id').value
  var ciudad = document.getElementById('ciudad_id').value
  var telefono = document.getElementById('telefono_id').value
  var email = document.getElementById('email_id').value
  var check = document.getElementById('terminos_id')
  if(nombre === ''){
    alert("Por favor rellene el campo nombre")
  }else if (ciudad === '') {
    alert("Por favor rellene el campo ciudad")
  }else if (telefono === '') {
    alert("Por favor rellene el campo teléfono")
  }else if (email === '') {
    alert("Por favor rellene el campo emil")
  }else if (!check.checked==1) {
    alert("Por favor acepte los términos")
  }else {
    document.getElementById('form_id').submit()
  }
}

function validarForm2() {
  var nombre = document.getElementById('nombre_id_').value
  var razones = document.getElementById('razones_id_').value
  var email = document.getElementById('email_id_').value

  if(nombre === ''){
    alert("Por favor rellene el campo nombres")
  }else if (email === '') {
    alert("Por favor rellene el campo email")
  }else if (razones === '') {
    alert("Por favor rellene el todos los campos")
  }else {
    document.getElementById('form_id_').submit()
  }
}
