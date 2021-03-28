//Don't run JS if the DOM is not loaded
document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btn = document.getElementById("add");
  let countId = 0;
  btn.onclick = addTodo;
  function addTodo() {
    if (title.value === "" || description === "") {
      alert.classList.remove("d-none");
      alert.innerText = "Title and description are requiered";
      return;
    }
    alert.classList.add("d-none");
    const row = table.insertRow();
    row.setAttribute("id", countId++);
    row.innerHTML = `
        <td>${title.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
            <input type="checkbox">
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
            </button>
        </td>
    `;
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger", "mb-1", "ml-1");
    removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
    row.children[3].appendChild(removeBtn);
    removeBtn.onclick = function () {
      removeTodo(row.getAttribute("id"));
    };
  }

  function removeTodo(id) {
    document.getElementById(id).remove();
  }
});
