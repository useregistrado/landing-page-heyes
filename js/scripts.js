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
    return {"nombre":nombre,"telefono":telefono,"razones":"","email":email,"form":"0"}
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
    return {"nombre":nombre,"telefono":"","razones":" Mensaje: "+razones,"email":email,"form":"1"}
  }
}

function send_mail(form_number) {
  var respuesta = (form_number==0)?validarForm():validarForm2()
  if (!(respuesta == undefined)) {
    peticion(respuesta)
  }
}

function peticion(array) {
  const url = './send_mail.php'
  const http = new XMLHttpRequest()

  http.open("POST", url)
  http.onreadystatechange = function(){

      if(this.readyState == 4 && this.status == 200){
          var resultado = JSON.parse(http.responseText)
          actuador(resultado)
      }
  }
  http.send(JSON.stringify(array))
}

function actuador(code) {
  var text = (code==200)?"¡Pronto estaremos en contacto contigo!":"¡Por favor vuelve a intentarlo!"
  document.getElementById("id_p_mensaje").innerHTML = text
}
