function evalua() {
    var cadena = document.getElementById('cadena').value;
    var contieneMayusculas = /[A-Z]/.test(cadena);
    var contieneMinusculas = /[a-z]/.test(cadena);
  
    if (contieneMayusculas && contieneMinusculas) {
      document.getElementById('res').innerText = 'Su cadena de caracteres "' + cadena + '" contiene minúsculas y mayúsculas.';
    } else if (contieneMayusculas) {
      document.getElementById('res').innerText = 'Su cadena de caracteres "' + cadena + '" contiene solo mayúsculas.';
    } else if (contieneMinusculas) {
      document.getElementById('res').innerText = 'Su cadena de caracteres "' + cadena + '" contiene solo minúsculas.';
    } else {
      document.getElementById('res').innerText = 'Su cadena no contiene letras.';
    }
  
    return false; 
  }