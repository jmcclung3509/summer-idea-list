const listContainer = document.querySelector(".list");
const inputContainer = document.getElementById("idea-input")
const selectContainer = document.getElementById("person")

// Storage.prototype.SetObject = function (key, value) {
//     this.setItem(key, JSON.stringify(value))
// }
// Storage.prototype.getObject = function (key) {
//     let value = this.getItem(key)
//     return value && JSON.parse(value)
// }

class Item {
    newItem = ""
    constructor(item, container, person, saved) {
        this.item = item;
        this.container = container
        this.person = person
        this.checked = false

        this.addToView();
        if (saved == false) {
            this.storeTodo()
        }
    }





    storeTodo() {
        let stringPrevData = localStorage.getItem("todo")
        let prevData = JSON.parse(stringPrevData)
        prevData = prevData ? prevData + " |!@  " + this.item : this.item;
        localStorage.setItem("todo", JSON.stringify(prevData))
        console.log(prevData)


    }
    addToView() {

        this.newItem = document.createElement("li");
        this.newItem.innerHTML = this.item

        this.container.appendChild(this.newItem)



        let selected = document.createElement("p")

        selected.innerHTML = ` (${this.person})`
        this.newItem.appendChild(selected)

        let checkedBtn = document.createElement("button")
        checkedBtn.innerHTML = "✔️"
        checkedBtn.onclick = () => {
            this.checkItem()
        }
        this.newItem.appendChild(checkedBtn)

        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "X";
        deleteBtn.onclick = () => {
            this.deleteItem()
        }
        this.newItem.appendChild(deleteBtn)

        // let date = document.createElement("p")
        // let d = new Date();
        // let noTimeDate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear()
        // d.setDate(d.getDate())
        // date.innerHTML = noTimeDate
        // this.newItem.appendChild(date)


    }
    deleteItem() {
        this.container.removeChild(this.newItem)
    }

    checkItem() {
        if (this.newItem.classList.contains("checked")) {
            this.newItem.classList.remove("checked")
        } else {
            this.newItem.classList.add("checked")
        }
    }


}

let ideaArray = []

function add() {
    let ideaText = inputContainer.value
    let selectedPerson = person.value
    if (!ideaText) {
        alert("Please enter a todo item")
    } else {
        ideaArray.push(new Item(ideaText, listContainer, selectedPerson, false))
        clearInput()
    }
}
function clearInput() {
    inputContainer.value = ""
}
function undoDelete() {
    ideaArray[0].addToView()
}

function startTheApp() {

    let selectedPerson = person.value
    let todoData = localStorage.getItem("todo")
    todoData = todoData.split(" |!@ ")
    console.log(todoData)
    // todoData = [JSON.parse(todoData)]
    // console.log(todoData)
    todoData.forEach((element) => {
        new Item(element, listContainer, selectedPerson, true)

    })
}
