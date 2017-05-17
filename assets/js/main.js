function boton(){
	 var muestra = document.getElementById('boton');
  if (muestra.style.display === 'none') {
        muestra.style.display = 'block';
    } 
}

function listar(){
	var lista = document.getElementById("lista").value;
    var mostrar = document.getElementById("muestra-lista");
    mostrar.innerHTML += lista + "<br>";

    lista="";

}