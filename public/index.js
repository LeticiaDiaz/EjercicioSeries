series();

function series() {
  fetch("api/series")
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
      console.log(datos);
      let serie = "";
      for (let i = 0; i < datos.length; i++) {
        serie += `
              <div>
                  <p>Titulo: ${datos[i].titulo}</p>
                  <p>Plataforma: ${datos[i].plataforma}</p>
                  <p>Nota:${datos[i].nota}</p>
              </div>    
          `;
      }
      document.getElementById("div1").innerHTML = serie;
    });
}

function buscar() {
  const titulo = document.getElementById("titulo").value;
  fetch(`api/serie/${titulo}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (datos) {
        console.log(datos)
      let serie = "";
      for (let i = 0; i < datos.length; i++) {
        serie += `
                <div>
                <p>Titulo: ${datos[i].titulo}</p>
                <p>Plataforma: ${datos[i].plataforma}</p>
                <p>Nota:${datos[i].nota}</p>
                </div>    
            `;
      }
      document.getElementById("div1").innerHTML = serie;
    });
}

function anyadir() {
    const titulo = document.getElementById("tituloNuevo").value;
    const plataforma = document.getElementById("plataformaNuevo").value;
    const nota = document.getElementById("notaNuevo").value;
    let serie = {
        titulo: titulo,
        plataforma: plataforma,
        nota: nota,
    }
    console.log(serie)
  
    fetch("api/nuevaSerie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serie),
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (datos) {
        console.log(datos);
        series();
      });
  }
