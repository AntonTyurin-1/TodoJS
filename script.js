let arrTasks = [];
 if(localStorage.getItem('task',arrTasks)) {
   arrTasks = JSON.parse(localStorage.getItem('task',arrTasks))
   renderTasks(arrTasks)
 }
/* 	-----------CREATE---------------------------------------------------------- */

function createListItem(task) {
  let li = document.createElement("li");
  li.classList.add("list__item");

  let input = document.createElement("input");

  input.type = "checkbox";
  input.checked = task.complited;
  input.classList.add("list__input");
  input.id = task.id;

  let label = document.createElement("label");
  label.classList.add("list__label");

  label.innerHTML = task.text;
  label.for = task.id;
  label.onclick = checkInput;

  let img = document.createElement("img");
  img.src = "img/del.svg";
  img.alt = "image";

  let div = document.createElement("div");
  div.append(img);
  div.addEventListener("click", delTask);

  li.append(input, label, div);

  li.id = task.id;

  return li;
}

/* 	-----------RENDER----------------------------------------------------- */

function renderTasks(tasks) {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  tasks.forEach((item) => {
    let li = createListItem(item);
    ul.prepend(li);
  });
}
renderTasks(arrTasks);

/* 	-----------ADD----------------------------------------------------- */

function addTasks() {
  const formInput = document.querySelector(".form__input")

  const maxId = +new Date()

  const newTask = { id: maxId, text: formInput.value, complited: false }

  arrTasks.push(newTask)

  renderTasks(arrTasks)

  formInput.value = ''

  localStorage.setItem('task', JSON.stringify(arrTasks))
}

/* 	-----------CHECKED----------------------------------------------------- */

function checkInput(event) {
  let id = event.target.parentNode.id;
  arrTasks.map((elem) => {
    if (elem.id == id) {
      elem.complited = !elem.complited;
    }
  })
  localStorage.setItem('task', JSON.stringify(arrTasks))
  renderTasks(arrTasks);
}

/* 	-----------DELETE----------------------------------------------------- */

function delTask(event) {
  localStorage.getItem('task', JSON.stringify(arrTasks))
  let id = event.target.parentNode.parentNode.id
  let arrDel = arrTasks.filter((elem) => elem.id != id)
  arrTasks = arrDel
  localStorage.setItem('task', JSON.stringify(arrTasks))
  renderTasks(arrTasks) 
}

/* 	-----------ALL----------------------------------------------------- */

function allTask() {
  renderTasks(arrTasks);
}

/* 	-----------checkedTaskL----------------------------------------------------- */

function checkedTask(item) {
  let check = arrTasks.filter((item) => item.complited == true);

  renderTasks(check);
}

/* 	-----------NotCheckedTask----------------------------------------------------- */

function NotCheckedTask(item) {
  let notCheck = arrTasks.filter((item) => item.complited !== true)

  renderTasks(notCheck) 
 }
 /* 	---------------------------------------------------------------- */