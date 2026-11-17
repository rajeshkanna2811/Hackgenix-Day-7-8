
function calculateTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].qty;
    }

    return total;
}

const cart = [
    { name: "Pen", price: 10, qty: 5 },
    { name: "Book", price: 120, qty: 2 },
    { name: "Bag", price: 750, qty: 1 },
];

let result = calculateTotal(cart);
console.log("Total: " + result.toFixed(2));

const names = cart.map(item => item.name);
console.log("Names:", names);

const costly = cart.filter(item => item.price > 100);
console.log("Costly:", costly);

const sum = cart.reduce(
    (s, item) => s + item.price * item.qty, 0
);
console.log("Sum:", sum);

const sorted = [...cart].sort((a, b) => a.price - b.price);
console.log("Sorted:", sorted);

const bag = cart.find(item => item.name === "Bag");
console.log("Bag:", bag);

const copy = [...cart];
copy.push({ name: "Cap", price: 200, qty: 1 });
console.log("Copy:", copy);

const user = {
    name: "Asha",
    greet: function () {
        console.log("Hi " + this.name);
    }
};

user.greet();

const data = JSON.parse('{"name":"Asha","age":20}');
console.log("Data:", data);

let json = JSON.stringify(cart);
console.log("JSON Length:", json.length);

console.log("Last Item:", cart[cart.length - 1]);
