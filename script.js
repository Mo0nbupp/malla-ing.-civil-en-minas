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
const malla = document.getElementById("malla");

// =========================
// SEMESTRES Y RAMOS
// =========================
const semestres = [
  {
    numero: 1,
    ramos: [
      { id: "r1", nombre: "Introducción a las matemáticas", prereq: [], estado: "disponible" },
      { id: "r2", nombre: "Introducción a la física", prereq: [], estado: "disponible" },
      { id: "r3", nombre: "Introducción a la ingeniería en minas", prereq: [], estado: "disponible" },
      { id: "r4", nombre: "Formación básica para la vida académica I", prereq: [], estado: "disponible" },
      { id: "r5", nombre: "Curso sello institucional I: Inglés I", prereq: [], estado: "disponible" }
    ]
  },
  {
    numero: 2,
    ramos: [
      { id: "r6", nombre: "Álgebra I", prereq: ["r1"], estado: "bloqueado" },
      { id: "r7", nombre: "Cálculo I", prereq: [], estado: "disponible" },
      { id: "r8", nombre: "Mecánica", prereq: ["r2"], estado: "bloqueado" },
      { id: "r9", nombre: "Formación básica para la vida académica II", prereq: ["r4"], estado: "bloqueado" },
      { id: "r10", nombre: "Curso sello institucional II: Inglés II", prereq: ["r5"], estado: "bloqueado" }
    ]
  },
  {
    numero: 3,
    ramos: [
      { id: "r11", nombre: "Álgebra II", prereq: ["r6"], estado: "bloqueado" },
      { id: "r12", nombre: "Cálculo II", prereq: ["r7"], estado: "bloqueado" },
      { id: "r13", nombre: "Química general", prereq: [], estado: "bloqueado" },
      { id: "r14", nombre: "Geología general", prereq: ["r2"], estado: "bloqueado" },
      { id: "r15", nombre: "TIC para la minería", prereq: [], estado: "bloqueado" },
      { id: "r16", nombre: "Curso sello institucional III", prereq: [], estado: "bloqueado" }
    ]
  },
  {
    numero: 4,
    ramos: [
      { id: "r17", nombre: "Ecuaciones diferenciales", prereq: ["r11"], estado: "bloqueado" },
      { id: "r18", nombre: "Cálculo III", prereq: ["r12"], estado: "bloqueado" },
      { id: "r19", nombre: "Electricidad y magnetismo", prereq: [], estado: "bloqueado" },
      { id: "r20", nombre: "Métodos de producción minera", prereq: [], estado: "bloqueado" },
      { id: "r21", nombre: "Petrografía y mineralogía", prereq: ["r14"], estado: "bloqueado" },
      { id: "r22", nombre: "Curso sello institucional IV", prereq: [], estado: "bloqueado" }
    ]
  },
  {
    numero: 5,
    ramos: [
      { id: "r23", nombre: "Probabilidad y estadística", prereq: ["r12"], estado: "bloqueado" },
      { id: "r24", nombre: "Fundamentos de economía", prereq: [], estado: "bloqueado" },
      { id: "r25", nombre: "Investigación operativa", prereq: [], estado: "bloqueado" },
      { id: "r26", nombre: "Termodinámica", prereq: ["r13"], estado: "bloqueado" },
      { id: "r27", nombre: "Métodos numéricos", prereq: [], estado: "bloqueado" },
      { id: "r28", nombre: "Topografía y geomensura minera", prereq: ["r20"], estado: "bloqueado" }
    ]
  },
  {
    numero: 6,
    ramos: [
      { id: "r29", nombre: "Geoestadística", prereq: ["r23"], estado: "bloqueado" },
      { id: "r30", nombre: "Evaluación de proyectos", prereq: ["r24"], estado: "bloqueado" },
      { id: "r31", nombre: "Exploración y geología económica", prereq: [], estado: "bloqueado" },
      { id: "r32", nombre: "Perforación y tronadura", prereq: ["r28"], estado: "bloqueado" },
      {
        id: "r33",
        nombre: "Taller integrador I",
        prereq: [
          "r1","r2","r3","r4","r5","r6","r7","r8","r9","r10",
          "r11","r12","r13","r14","r15","r16","r17","r18","r19","r20","r21","r22"
        ],
        estado: "bloqueado"
      },
      { id: "r34", nombre: "Interdisciplinar", prereq: [], estado: "bloqueado" }
    ]
  },
  {
    numero: 7,
    ramos: [
      { id: "r35", nombre: "Evaluación económica de yacimientos", prereq: ["r30"], estado: "bloqueado" },
      { id: "r36", nombre: "Mecánica de fluidos", prereq: [], estado: "bloqueado" },
      { id: "r37", nombre: "Fundamentos de metalurgia", prereq: [], estado: "bloqueado" },
      { id: "r38", nombre: "Carguío y transporte", prereq: ["r32"], estado: "bloqueado" },
      { id: "r39", nombre: "Mecánica de rocas", prereq: [], estado: "bloqueado" },
      { id: "r40", nombre: "Interdisciplinar (A+S)", prereq: [], estado: "bloqueado" },
      {
        id: "r41",
        nombre: "Práctica operacional",
        prereq: [
          "r1","r2","r3","r4","r5","r6","r7","r8","r9","r10",
          "r11","r12","r13","r14","r15","r16","r17","r18","r19","r20","r21","r22",
          "r23","r24","r25","r26","r27","r28","r29","r30","r31","r32","r33","r34"
        ],
        estado: "bloqueado"
      }
    ]
  }
];

// =========================
// GUARDAR / CARGAR ESTADO
// =========================
function guardarEstado() {
  localStorage.setItem("estadoMalla", JSON.stringify(semestres));
}

function cargarEstado() {
  const guardado = localStorage.getItem("estadoMalla");
  if (!guardado) return;

  const datos = JSON.parse(guardado);
  datos.forEach((sem, i) => {
    semestres[i].ramos.forEach((ramo, j) => {
      ramo.estado = sem.ramos[j].estado;
    });
  });
}

// =========================
// RENDER
// =========================
function renderMalla() {
  malla.innerHTML = "";

  for (let i = 0; i < semestres.length; i += 2) {
    const año = document.createElement("div");
    año.className = "año";

    const h2 = document.createElement("h2");
    h2.textContent = `Año ${Math.floor(i / 2) + 1}`;
    año.appendChild(h2);

    const cont = document.createElement("div");
    cont.className = "semestres";

    semestres.slice(i, i + 2).forEach(sem => {
      const divSem = document.createElement("div");
      divSem.className = "semestre";

      const h3 = document.createElement("h3");
      h3.textContent = `Semestre ${sem.numero}`;
      divSem.appendChild(h3);

      sem.ramos.forEach(ramo => {
        const d = document.createElement("div");
        d.className = `ramo ${ramo.estado}`;
        d.textContent = ramo.nombre;
        d.id = ramo.id;

        if (ramo.estado !== "bloqueado") {
          d.addEventListener("click", () => aprobarRamo(ramo.id));
        }

        divSem.appendChild(d);
      });

      cont.appendChild(divSem);
    });

    año.appendChild(cont);
    malla.appendChild(año);
  }
}

// =========================
// APROBAR / DESAPROBAR
// =========================
function aprobarRamo(id) {
  semestres.forEach(sem => {
    sem.ramos.forEach(r => {
      if (r.id === id) {
        r.estado = r.estado === "aprobado" ? "disponible" : "aprobado";
      }
    });
  });

  semestres.forEach(sem => {
    sem.ramos.forEach(r => {
      if (r.estado !== "aprobado") {
        const ok = r.prereq.every(req =>
          semestres.some(s =>
            s.ramos.some(x => x.id === req && x.estado === "aprobado")
          )
        );
        r.estado = ok ? "disponible" : "bloqueado";
      }
    });
  });

  renderMalla();
  guardarEstado();
}

// =========================
// INICIO
// =========================
cargarEstado();
renderMalla();
