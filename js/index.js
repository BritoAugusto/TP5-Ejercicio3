/* 3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */

document.addEventListener("DOMContentLoaded", () => {
  const listaUl = document.querySelector("ul");
  const formulario = document.querySelector("form");

  const mostrarLista = (e) => {
    e.preventDefault();
    const input = document.querySelector("input").value.trim();

    if (input === "") {
      return;
    }
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between text-center me-5";
    listItem.innerHTML = input;

    const btnBorrar = document.createElement("button");
    btnBorrar.className = "btn btn-danger";
    btnBorrar.innerHTML = "Eliminar";
    btnBorrar.addEventListener("click", () => {
      listaUl.removeChild(listItem);
    });

    listItem.appendChild(btnBorrar);
    listaUl.appendChild(listItem);

    formulario.reset();
  };

  formulario.addEventListener("submit", mostrarLista);
});

