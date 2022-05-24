let arrTasks = []
	

/* 	-----------CREATE---------------------------------------------------------- */

function createListItem(task) {
   let li = document.createElement('li')
	li.classList.add('list__item')

   let input = document.createElement('input')

	input.type = 'checkbox'
	input.checked = task.complited
	input.classList.add('list__input')
	input.id = task.id
	/* input.onclick = checkInput */

   let label = document.createElement('label') 
	label.classList.add('list__label')

	label.innerHTML = task.text
	label.for = task.id
	label.onclick = checkInput
	
	
	let img = document.createElement('img')
	img.src = 'img/del.svg'
	img.alt = 'image'

	let div = document.createElement('div')
	div.append(img)
	div.addEventListener('click', delTask)

   li.append(input, label, div)
	
	li.id = task.id
	
	/*  console.log(task)  */
	return li 	
} 

/* 	-----------RENDER----------------------------------------------------- */

function renderTasks(tasks) {
	const ul = document.querySelector('ul')
	ul.innerHTML = ''
	tasks.forEach(item => {
		let li = createListItem(item)
		ul.prepend(li)
	})
}
renderTasks(arrTasks)

/* 	-----------ADD----------------------------------------------------- */

function addTasks() {
	const formInput = document.querySelector('.form__input')

	const maxId = + new Date()

	const newTask = { id: maxId, text: formInput.value, complited: false }

	arrTasks.push(newTask)

	renderTasks(arrTasks)

/* 	localStorage.setItem(formInput.value, JSON.stringify(arrTasks))
	function delStorege() {
		if (delTask(item)) {
			localStorage.removeItem(formInput.value)
		}
		let newT = localStorage.getItem(arrTasks)
		let localS = JSON.parse(newT)
	} */

}

const formButton = document.querySelector('.form__btn')
formButton.addEventListener('click', addTasks)

const formInput = document.querySelector('.form__input')
formInput.addEventListener('keydown', function(event) {
   if(event.code === 'Enter') {
		addTasks()
	} 
})


/* 	-----------CHECKED----------------------------------------------------- */

function checkInput(event) {
	let id = event.target.parentNode.id
	 arrTasks.map(elem => {
		if (elem.id == id) {
		 elem.complited = !elem.complited
		}
	})
	renderTasks(arrTasks)
}

/* 	-----------DELETE----------------------------------------------------- */

function delTask(event) {
	let id = event.target.parentNode.parentNode.id
	let arrDel = arrTasks.filter(elem => elem.id != id)
	arrTasks = arrDel
	renderTasks(arrTasks)
}

/* 	-----------ALL----------------------------------------------------- */

function allTask() {
	let all = arrTasks
	renderTasks(all)
}

 let btn1 = document.querySelector('.btn1')
btn1.onclick = allTask 


/* 	-----------checkedTaskL----------------------------------------------------- */


function checkedTask(item) {
	let check = arrTasks.filter(item => item.complited == true)

	 renderTasks(check)

}
let btn2 = document.querySelector('.btn2')
btn2.onclick = checkedTask


/* 	-----------NotCheckedTask----------------------------------------------------- */

function NotCheckedTask(item) {
	let notCheck = arrTasks.filter(item => item.complited !== true)

	renderTasks(notCheck)
}
let btn3 = document.querySelector('.btn3')
btn3.onclick = NotCheckedTask




