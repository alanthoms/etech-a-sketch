document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    let s = 4;
    for (let i = 0; i < s * s; i++) { // 16x16 = 256
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
});