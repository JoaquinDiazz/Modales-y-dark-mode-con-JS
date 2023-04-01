const btn1 = document.querySelector(".btn1");
const btnCerrar = document.querySelector(".btnCerrar");
const modalCentro = document.querySelector(".modalCentro");

btn1.addEventListener("click", () => {
  modalCentro.classList.add("active");
})

btnCerrar.addEventListener("click", () => {
  modalCentro.classList.remove("active");
})


const btn2 = document.querySelector(".btn2");
const btnCerrar2 = document.querySelector(".btnCerrar2");
const modalDerecha = document.querySelector(".modalDerecha");

btn2.addEventListener("click", () => {
  modalDerecha.classList.add("active");
})

btnCerrar2.addEventListener("click", () => {
  modalDerecha.classList.remove("active");
})

const btnDarkMode = document.querySelector(".btnDarkMode");
const body = document.body;

btnDarkMode.addEventListener("click", () => {
  body.classList.toggle("darkMode")

  if (body.classList.contains("darkMode")) {
    btnDarkMode.innerText = "Cambiar a light mode"
  } else {
    btnDarkMode.innerText = "Cambiar a dark mode"
  }
})