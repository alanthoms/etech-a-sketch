
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    for (let i = 0; i < 4^2; i++) { // 16x16 = 256
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
});