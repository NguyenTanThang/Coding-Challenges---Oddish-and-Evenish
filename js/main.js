const numberForm = document.querySelector("#number-form");
const resultTag = document.querySelector("#result");

numberForm.addEventListener("submit", (e) => {
    // Prevent default behviour of the form
    e.preventDefault();

    // Get the number
    const number = document.getElementById("number").value;

    // Check if it's harshad or not
    isHappyNumber(number);
})

const isHappyNumber = (number) => {

    // If the number is a negative number
    if (parseInt(number) < 0) {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "Both numbers must be positive";
        resultTag.className = "text-danger";
        return;
    }

    let numCharArray = number.split("");
    let sum = sumThemUp(numCharArray);

    if (isEven(sum)) {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is evenish";
        resultTag.className = "text-success";
        return;
    } else {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is oddish";
        resultTag.className = "text-success";
        return;
    }
}

const sumThemUp = (numCharArray) => {
    let sum = 0;
    for (let index = 0; index < numCharArray.length; index++) {
        const element = numCharArray[index];
        sum += parseInt(element);
    }
    return sum;
}

const isEven = (number) => {
    if (number == 0 || number % 2 == 0){
        return true;
    } else {
        return false;
    }
}