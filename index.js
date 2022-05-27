const listContainer = document.querySelector(".list");
const inputContainer = document.getElementById("idea-input")
const selectContainer = document.getElementById("person")
class Item {
    newItem = ""
    constructor(item, container, person, date) {
        this.item = item;
        this.container = container
        this.person = person
        this.addToView()
        this.checked = false
        this.date = date

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

        let date = document.createElement("p")
        let d = new Date();
        let noTimeDate = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear()
        d.setDate(d.getDate())
        date.innerHTML = noTimeDate
        this.newItem.appendChild(date)


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
    console.log(selectedPerson)
    ideaArray.push(new Item(ideaText, listContainer, selectedPerson))
    clearInput()


}
function clearInput() {
    inputContainer.value = ""
}
function undoDelete() {
    ideaArray[0].addToView()
}

console.log(ideaArray)
console.log(Item)

window.localStorage.setItem("item", JSON.stringify(ideaArray))
let retrievedItem = window.localStorage.getItem("item")
let data = JSON.parse(retrievedItem
)
console.log(data)