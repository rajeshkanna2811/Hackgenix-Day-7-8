
console.log("Lab ready");

const customer = "Asha";
const price = 250;
let quantity = 3;

console.log(`${customer} is buying ${quantity} items at Rs. ${price}.`);


const amount = price * quantity;

const discount = amount > 1000
    ? amount * 0.10
    : amount * 0.05;

const discountedAmount = amount - discount;
const gst = discountedAmount * 0.18;
const finalAmount = discountedAmount + gst;

console.log("customer:", customer);
console.log("Amount:", amount.toFixed(2));
console.log("Discount:", discount.toFixed(2));
console.log("GST:", gst.toFixed(2));
console.log("Final Amount:", finalAmount.toFixed(2));


const customerName = prompt("Enter customer name:");
const enteredQuantity = prompt("Enter quantity:");
const userQuantity = Number(enteredQuantity);

if (
    customerName === null ||
    customerName.trim() === "" ||
    enteredQuantity === null ||
    isNaN(userQuantity) ||
    userQuantity <= 0
) {
    alert("Invalid customer name or quantity");
} else {
    const userAmount = price * userQuantity;

    const userDiscount = userAmount > 1000
        ? userAmount * 0.10
        : userAmount * 0.05;

    const userGst = (userAmount - userDiscount) * 0.18;
    const userFinal = userAmount - userDiscount + userGst;

    console.log("Customer bill details:");
    console.log("Customer:", customerName);
    console.log("Final Bill:", userFinal.toFixed(2));
}


function checkGrade(marks) {
    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    let remark;

    switch (grade) {
        case "A+":
            remark = "Excellent";
            break;
        case "A":
            remark = "Very Good";
            break;
        case "B":
            remark = "Good";
            break;
        case "C":
            remark = "Average";
            break;
        default:
            remark = "Needs Improvement";
    }

    console.log("Grade:", grade);
    console.log("Remark:", remark);

    return grade;
}

const marksInput = prompt("Enter marks between 0 and 100:");

if (
    marksInput !== null &&
    marksInput.trim() !== "" &&
    !isNaN(Number(marksInput)) &&
    Number(marksInput) >= 0 &&
    Number(marksInput) <= 100
) {
    checkGrade(Number(marksInput));
} else {
    console.log("Invalid marks");
}


const n = Number(prompt("Enter a number for loops:"));

if (Number.isInteger(n) && n >= 1) {

    console.log("MULTIPLICATION TABLE");

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }

    let i = 1;
    let sum = 0;

    while (i <= n) {
        sum += i;
        i++;
    }

    console.log("Sum:", sum);

    console.log("Even Numbers:");

    for (let j = 2; j <= n; j += 2) {
        console.log(j);
    }
} else {
    console.log("Invalid number");
}


console.log("STAR TRIANGLE");

for (let i = 1; i <= 5; i++) {
    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "*";
    }

    console.log(stars);
}

console.log("NUMBER TRIANGLE");

for (let i = 1; i <= 5; i++) {
    let numbers = "";

    for (let j = 1; j <= i; j++) {
        numbers += j;
    }

    console.log(numbers);
}


console.log("FIZZBUZZ");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("PRIME NUMBERS");

for (let num = 2; num <= 50; num++) {
    let prime = true;

    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(num);
    }
}


document.getElementById("calculateBtn")
    .addEventListener("click", function () {

        const quantityInput = document.getElementById("quantity").value;
        const quantity = Number(quantityInput);

        if (
            quantityInput.trim() === "" ||
            isNaN(quantity) ||
            quantity <= 0
        ) {
            alert("Enter a valid quantity");
            return;
        }

        const amount = price * quantity;

        const discount = amount > 1000
            ? amount * 0.10
            : amount * 0.05;

        const discountedAmount = amount - discount;
        const gst = discountedAmount * 0.18;
        const finalAmount = discountedAmount + gst;

        document.getElementById("output").textContent =
            `Amount: Rs. ${amount.toFixed(2)} | 
            Discount: Rs. ${discount.toFixed(2)} | 
            GST: Rs. ${gst.toFixed(2)} | 
            Final Bill: Rs. ${finalAmount.toFixed(2)}`;
    });


document.getElementById("checkGradeBtn")
    .addEventListener("click", function () {

        const marks = prompt("Enter marks between 0 and 100:");

        if (
            marks === null ||
            marks.trim() === "" ||
            isNaN(Number(marks)) ||
            Number(marks) < 0 ||
            Number(marks) > 100
        ) {
            alert("Enter valid marks");
            return;
        }

        const grade = checkGrade(Number(marks));

        document.getElementById("gradeOutput").textContent =
            "Your Grade: " + grade;
    });
