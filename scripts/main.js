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
    }
}
function displayOrder(name, price, quantity) {
    listCommandes.innerHTML = `${quantity}x ${name} - Total: ${price}`
}
function resetInput() {
    inputName.value = "";
    inputPrice.value = "";
    inputQuantity.value = "";
    inputName.focus();
}
function globalPrice() {
    const sumTotalPrice = tableauCommandes.reduce((sum, currentValue) => sum + currentValue.price, 0,);
        totalCommandes.innerHTML = `Total global: ${sumTotalPrice}€`
}

// ==== Evénements ====
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const name = inputName.value;
    const price = parseFloat(inputPrice.value).toFixed(2);
    const quantity = parseFloat(inputQuantity.value);

    addOrder(name, price, quantity);
    displayOrder(name, price, quantity);
    resetInput();
})