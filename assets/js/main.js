function botonLista(){
	 var muestra = document.getElementById('boton-lista');
  if (muestra.style.display === 'none') {
        muestra.style.display = 'block';
    } 
}


function listar(){
	/*var lista = document.getElementById('lista');
	lista.addEventListener("click",cambiaTexto);
	var cambiaTexto = function (){
		var texto = document.getElementById('lista').value;
		var muestra = document.getElementById('muestra-lista');
		muestra.innerHTML = texto;
};*/
	var m=document.getElementById('muestra-lista');
	m.style.display = 'block';
	var listo = document.getElementById("lista").value;
	if (listo==""){
		alert("Debe agregar una lista");
	}else{
    var mostrar = document.getElementById("muestra-lista");
    mostrar.innerHTML += "<div id='mostrar-tarjeta'>"+listo+"<br><br><textarea id='texto-tarjeta' placeholder='Añadir una tarjeta...'></textarea><br>"+
    "<button id='boton-tarjeta' onclick='botonTarjeta()'>Añadir</button><img src='assets/img/wiii.gif' width='50' height='50' align='left'></div><br>";
    console.log(mostrar);
 	listo.value="";
    /*var borrar1 = document.getElementById('lista');
    if (borrar1.style.display==="block"){
    	borrar1.style.display = "none";
    }
    var borrar2 = document.getElementById('boton-lista');
    if (borrar2.style.display==="block"){
    	borrar2.style.display = "none";
    }*/
}

}
function botonTarjeta(){
	var tarjeta = document.getElementById('texto-tarjeta').value;
	console.log(tarjeta);
	if (tarjeta==""){
		alert("Debe agregar una tarjeta");
	}else{
		var muestra = document.getElementById('mostrar-tarjeta');
		muestra.innerHTML += "<br>"+tarjeta;		
	}
}
