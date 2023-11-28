function loadDoc(url, funcion) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        funcion(this);
    }
    xhttp.open("GET", url, true);
    xhttp.send();
}
function funcion1(xhttp) {
  document.getElementById("content").innerHTML = xhttp.responseText;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(registration => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch(error => {
      console.error('Error al registrar el Service Worker:', error);
    });
}