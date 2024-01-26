(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
const juego = {
  template: `
		  <!DOCTYPE html>
    <html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Prototipo</title>
		<!-- bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossorigin="anonymous"
		/>
		<!-- fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
			rel="stylesheet"
		/>
		<!-- icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>

		<style>
			body {
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url("img/fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="src/style.css"/>
	</head>

		<div id="juego">
		<div class="row">
		  <div
			class="col-4 d-flex flex-column justify-content-end align-items-center p-5">
			<h4 class="text-light">Nivel: <span>1</span></h4>
			<h4 class="text-light">Tiempo: <span>10 Minutos</span></h4>
			<h4 class="text-light">Lineas: <span>5</span></h4>
			<h4 class="text-light">Puntos: <span>777777</span></h4>
		  </div>
		  <!-- Panel central -->
		  <div class="col-4 d-flex justify-content-center">
			<div id="panel" class="p-5">
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-primary border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			  <div class="fila d-flex justify-content-center">
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
				<div class="celda bg-dark border border-white p-4"></div>
			  </div>
			</div>
		  </div>
		  <div>
		  <button id="volver" class="btn btn-success fs-1 mt-5 volver">VOLVER</button>
		  </div>
		  `,
  script: () => {
    document.querySelector("#volver").addEventListener("click", () => {
      document.querySelector("main").innerHTML = home.template;
      home.script();
    });
  }
};
function buscador(texto) {
  const partidas = [
    // Creo un array de partidas con los datos de las personas que participasn
    { nick: "Messi", puntuacion: 10, fecha: "13 ABRIL 2023" },
    { nick: "Cristiano", puntuacion: 600, fecha: "13 FEBRERO 2023" },
    { nick: "Rubiales", puntuacion: 888, fecha: "1 ENERO 2023" }
  ];
  const coincidencias = partidas.filter((partida) => partida.nick.toLowerCase().includes(texto.toLowerCase()));
  return coincidencias;
}
const vistaRanking = {
  template: `
    <!DOCTYPE html>
    <html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Prototipo</title>
		<!-- bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossorigin="anonymous"
		/>
		<!-- fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
			rel="stylesheet"
		/>

		<!-- icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>

		<style>
			body {
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url("img/fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body class="text-light">
    <div id="info" class="">
				<div class="m-5 p-5 bg-dark">
					<h2 class="text-center text-light">Ranking</h2>
					<table class="table table-dark align-middle">
						<theader>
							<tr class="bg-dark">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</theader>
						<tbody>
							<tr>
							<td><img src="img/messi.jpg" alt="Messi" height="100" width="120"></td>
							<td>Messi</td>
							<td>10</td>
							<td>13 ABRIL 2023</td>
						</tr>
						<tr>
							<td><img src="img/cristiano.jpg" alt="Cristiano" height="100" width="120"></td>
							<td>Cristiano</td>
							<td>600</td>
							<td>13 FEBRERO 2023</td>
						</tr>
						<tr>
							<td><img src="img/rubiales.jpg" alt="Neymar" height="100" width="120"></td>
							<td>Rubiales</td>
							<td>888</td>
							<td>1 ENERO 2023</td>
						</tr>
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
				
				<div id="partidas" class="m-5 p-5 bg-dark">
					<h2 class="text-center text-light">Partidas</h2>
					
					<div id="buscador" class="input-group mb-3">
					<button
							class="btn btn-outline-secondary"
							type="button"
							id="boton"
						>
							<i>Buscador</i>
						</button>
						<input
							type="text"
							class="form-control"
							placeholder="Buscador"
							aria-label="Buscador"
							aria-describedby="button-addon2"
						/>
						<button
							class="btn btn-outline-secondary"
							type="button"
							id="borrar"
						>
							<i>X</i>
						</button>
					</div>
					<div class="d-flex justify-content-center">
						<p></p>
						<p id="iconNick" style="margin: 0 50px; color: white;">Nick <i class="bi bi-arrow-up-square"></i></p>
						<p id="iconPuntuacion" style="margin: 0 50px; color: white;">Puntuación <i class="bi bi-arrow-up-square"></i></p>
						<p style="margin: 0 50px; color: white;">Fecha <i class="bi bi-arrow-up-square"></i></p>
					</div>

								
					<table class="table table-dark">
						
						<tbody>
							
						</tbody>
						<tfoot></tfoot>
					</table>
				</div>
                <div class="justify-content-center text-center mb-5 pb-5">
                <button id="partida" class="btn btn-success fs-1 mt-5">JUGAR</button>
                </div>
			</div>
    `,
  script: () => {
    document.querySelector("#boton").addEventListener("click", () => {
      const textoBusqueda = document.querySelector("#buscador input").value;
      const partidasCoincidentes = buscador(textoBusqueda);
      limpiarRanking();
      actualizarRanking(partidasCoincidentes);
    });
    document.querySelector("#partida").addEventListener("click", () => {
      document.querySelector("main").innerHTML = juego.template;
      juego.script();
    });
    document.querySelector("#iconNick").addEventListener("click", () => {
      orden("nick", "up");
    });
    document.querySelector("#iconPuntuacion").addEventListener("click", () => {
      orden("puntuacion", "up");
    });
  }
};
function orden(campo, tipo) {
  const textoBusqueda = document.querySelector("#buscador input").value;
  const partidasCoincidentes = buscador(textoBusqueda);
  partidasCoincidentes.sort((a, b) => {
    const valorA = a[campo];
    const valorB = b[campo];
    if (tipo === "down") {
      return valorA > valorB ? 1 : -1;
    } else if (tipo === "up") {
      return valorA < valorB ? 1 : -1;
    }
    return 0;
  });
  limpiarRanking();
  actualizarRanking(partidasCoincidentes);
}
function limpiarRanking() {
  const ranking = document.querySelector("#partidas tbody");
  ranking.innerHTML = "";
}
function actualizarRanking(partidas) {
  const ranking = document.querySelector("#partidas tbody");
  partidas.forEach((partidas2, sumar) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
		  <td class="fs-2">${sumar + 1}</td>
		  <td><img src="img/${partidas2.nick.toLowerCase()}.jpg" alt="avatar" height="100" width="120"/></td>
		  <td>${partidas2.nick}</td>
		  <td>${partidas2.puntuacion}</td>
		  <td>${partidas2.fecha}</td>
		`;
    ranking.appendChild(fila);
  });
}
const home = {
  template: `
    <!DOCTYPE html>
    <html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Prototipo</title>
		<!-- bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
			crossorigin="anonymous"
		/>
		<!-- fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=VT323&display=swap"
			rel="stylesheet"
		/>

		<!-- icons -->
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
		/>

		<style>
			body {
				background-repeat: no-repeat;
				background-size: cover;
				background-image: url("img/fondo.jpg");
				font-family: "VT323", monospace;
				font-size: 25px;
			}
		</style>
		<link rel="stylesheet" href="style.css" />
	</head>
	<body class="text-light">
		<header class="d-flex align-items-center justify-content-center">
			<img src="img/logo.png" alt="logo" width="200" class="mt-5" />
		</header>
		<main class="container mt-5 bg-opacity-50 bg-dark p-2">
			<!-- Pantalla de introducción -->
      <div id="intro" class="text-center p-5 text-light">
        <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
        <h2>Instruccions:</h2>
        <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
        <p>Amb la fletxa avall pots girar la peça</p>
        <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
        <p>Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
        <button id="ranking" class="btn btn-success fs-1 mt-5">RANKING</button>
				<hr>
      </div>
    `,
  script: () => {
    document.querySelector("#ranking").addEventListener("click", () => {
      document.querySelector("main").innerHTML = vistaRanking.template;
      vistaRanking.script();
    });
  }
};
const header = {
  template: `
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid p-3 bg-dark">
          <div class="mx-auto">
            <button id="Home" class="btn btn-success mx-2 fs-4">HOME</button>
            <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
            <button id="Juego" class="btn btn-success mx-2 fs-4">JUEGO</button>
          </div>
        </div>
      </nav>
      `,
  script: () => {
    document.querySelector("#Home").addEventListener("click", () => {
      document.querySelector("main").innerHTML = home.template;
      home.script();
    });
    document.querySelector("#vistaRanking").addEventListener("click", () => {
      document.querySelector("main").innerHTML = vistaRanking.template;
      vistaRanking.script();
    });
    document.querySelector("#Juego").addEventListener("click", () => {
      document.querySelector("main").innerHTML = juego.template;
      juego.script();
    });
  }
};
document.querySelector("header").innerHTML = header.template;
header.script();
document.querySelector("main").innerHTML = home.template;
home.script();
