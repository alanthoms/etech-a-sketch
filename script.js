document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    let s = 4;
    for (let i = 0; i < s ;i++) { // 16x16 = 256
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for (let j = 0; j < s; j++) { // 16x16 = 256
            const sqDiv = document.createElement("div");
            sqDiv.classList.add("square");
            rowDiv.appendChild(sqDiv);
        }
    }
});