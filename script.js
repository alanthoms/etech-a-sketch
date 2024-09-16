document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    let s = 16;
    for (let i = 0; i < s ;i++) { // 16x16 = 256
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for (let j = 0; j < s; j++) { // 16x16 = 256
            const sqDiv = document.createElement("div");
            sqDiv.classList.add("square");

            //add event listener to squarediv of mouseenter so that the style background color of the div 
            sqDiv.addEventListener("mouseenter", () => {
                sqDiv.style.backgroundColor = "red"; // Change the color when hovered
            });
            rowDiv.appendChild(sqDiv);
        }
    }
});


function showPopup() {
    // Display a confirmation popup with a question
    const userConfirmed = confirm("Do you want to proceed?");

    if (userConfirmed) {
        // User pressed "OK"
        alert("You chose to proceed!");
    } else {
        // User pressed "Cancel"
        alert("You chose to cancel.");
    }
}

function showPopup(){

    const userInput = prompt("Enter size of grid 1-10");
    const userNumber = Number(userInput);

    // Convert the input to a number and check if it's valid

    if (!isNaN(userNumber)&& userNumber<=10) {
        // User entered a valid number
        alert("You entered the number: " + userNumber);
    } else {
        // User did not enter a valid number
        alert("That's not a valid number.");
    }
}


