import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSetting = {
  databaseURL: "https://playground-b8e64-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListdb = ref(database, "shoppingList")

console.log(app)

const addButton = document.getElementById("add-button")
const inputField = document.getElementById("input-field")
const shoppingList = document.getElementById('shopping-list')

addButton.addEventListener("click", () => {
  let inputValue = inputField.value;

  push(shoppingListdb, inputValue)

  clearInputField()

  appendItemToShoppingList(inputValue)
})

onValue("shoppingListdb", function (snapsshot) {
  let itemsArray = Object.entries(snapsshot.val())

  clearShoppingList()

  for (let i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i]
    let currentItemId = currentItem[0]
    let currentItemValue = currentItem[1]

    appendItemToShoppingList(currentItem)
  }
})

function clearShoppingList() {
  shoppingList = ""
}

function clearInputField() {
  inputField.value = ""
}

function appendItemToShoppingList(item) {
  /*  shoppingList.innerHTML += `<li>${itemValue}</li>` */

  let itemID = item[0]

  let itemValue = item[1]

  const listEl = document.createElement('li')

  listEl.textContent = itemValue;

  shoppingList.append(listEl)
}