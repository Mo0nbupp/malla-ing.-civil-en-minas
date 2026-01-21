const malla = document.getElementById("malla");

const semestres = [
  {
    numero: 1,
    ramos: [
      { id: "r1", nombre: "Ramo de ejemplo", prereq: [], estado: "disponible" }
    ]
  }
];

function renderMalla() {
  malla.innerHTML = "";

  semestres.forEach(sem => {
    const div = document.createElement("div");
    div.textContent = "Semestre " + sem.numero;
    malla.appendChild(div);
  });
}

renderMalla();
