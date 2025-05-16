// ==== Sélections ====
const inputName = document.querySelector("#name");
const inputPrice = document.querySelector("#price");
const inputQuantity = document.querySelector("#quantity");
const addBtn = document.querySelector("button");
const listCommandes = document.querySelector(".list-commandes");
const totalCommandes = document.querySelector(".total-commandes");

// ==== Variables ====
const tableauCommandes = [];
class Order {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    };
    totalPrice() {
        return this.price*this.quantity
    };
}

// ==== Fonctions ====
function addOrder(name, price, quantity) {
    if (inputName.value === "" || inputPrice.value === 0 || inputQuantity.value === 0) {
        alert("Veuillez remplir les champs")
    } else {
        tableauCommandes.splice(tableauCommandes.length, 0, new Order(name, price, quantity));
        globalPrice()
    }
}
function displayOrder(name, price, quantity) {
    // listCommandes.innerHTML += `<div>${quantity}x ${name} - Total: ${price.toFixed(2)}€</div>`;
    
    const div = document.createElement("div");
    listCommandes.appendChild(div);

    const par = document.createElement("div")
    par.textContent = `${quantity}x ${name} - Total: ${price.toFixed(2)}€`;
    div.appendChild(par);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.title = "Supprimer l'élément";
    deleteBtn.dataset = ""
    deleteBtn.textContent = "❌";
    div.appendChild(deleteBtn);
}
function resetInput() {
    inputName.value = "";
    inputPrice.value = "";
    inputQuantity.value = "";
    inputName.focus();
}
function globalPrice() {
    const sumTotalPrice = tableauCommandes.reduce((sum, currentValue) => sum + currentValue.totalPrice(), 0);
    totalCommandes.innerHTML = `Total global: ${sumTotalPrice.toFixed(2)}€`
}

// ==== Evénements ====
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const name = inputName.value;
    const price = parseFloat(inputPrice.value).toFixed(2);
    const quantity = parseFloat(inputQuantity.value);

    addOrder(name, price, quantity);
    displayOrder(name, price*quantity, quantity);
    resetInput();
})

listCommandes.addEventListener("click", function (event) {
    if(event.target.classList.contains("delete-btn")) {
        const item = event.target.parentElement;
        const indexItem = Array.from(event.target.parentElement.children).indexOf(item);
        item.remove();
        tableauCommandes.splice(indexItem, 1);
        console.log(item);
        console.log(indexItem);
        
    }
})